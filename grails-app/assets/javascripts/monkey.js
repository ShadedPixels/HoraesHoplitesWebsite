function main(){


    /*
     * in: 
     * 		css_selector (string) - valid css selector to return one DOM element
     * 		event_name (string) - name of the event to subscribe for
     * 		callable (function) - function taking one parameter (event) that will be called on event
     * 		dont_prevent_default (boolean) [optional] - prevention of the default action is prevented by default. change that? 
     * will attach callable as listener for the event_name event to the DOM element matching css_selector
     * attention!!! overwrites previously attached listener
     */
    var attach_listener = function(css_selector, event_name, callable, dont_prevent_default){
    	dont_prevent_default = !! dont_prevent_default // convert truthy/falsy to boolean
    	var element = $(css_selector);
    	element.on(event_name, function(event){
    		dont_prevent_default || event.preventDefault(); // prevent default, if dont_prevent_default is false
    		callable.call(this, event) // call user defined function with 'this' being the object to which listener is attached
    	});
    }
    
    /*
     * Send data to the default ajax handler on the server side
     * in:
     * 		data (some serializable object/primitive) [optional] - data to send
     * 		operation (string) [optional] - operation to be performed on the server side
     * 		success_function (function) [optional] - function taking data parameter
     * 		error_function (function) [optional] - function taking response parameter
     */
    var default_ajax_call = function(data, operation, success_function, error_function){
        
    	data = data || 'ping'
    	operation = operation || 'default'
    	success_function = success_function || function(data){console.log("Got ajax data: ", data)}
    	error_function = error_function || function(xhr){console.log("Error: ", xhr.responseText)}
    	
    	$.ajax({
            url: "game/ajax_response",
            type:"post",
            dataType: 'json',
            data: {json_formatted_request: JSON.stringify({operation: operation, data: data})},
            success: success_function,
            error: error_function
        });
    }
    
    /*
     * in:
     * 		form_object - DOM form object
     * return:
     * 		javascript object with form data
     * warning !!! all input elements w/in form must have unique name attribute
     */
    var extract_form_information = function (form_object){
    	var data = {};
    	$(form_object).serializeArray().map(function(x){data[x.name] = x.value;});
    	return data
    }

    attach_listener("#playNow", "click", function(event){
        console.log("aggle aggle!");
    })
    
    attach_listener("#refreshGames", "click", function(event){
        console.log("refreshing games");
        games = default_ajax_call({}, 'list games', function(data){
	        console.log(data)
			loadLeftTable(data);
        });
    })
    
    attach_listener("#refreshUsers", "click", function(event){
        console.log("refreshing users");
        default_ajax_call({}, 'list users', function(data){
	        console.log(data);
			loadRightTable(data);
    });
    })
    
    attach_listener("#createGame", "submit", function(event){
    	var game_info = extract_form_information(this)
    	var data = {'game_name': game_info.gameName, 'creator_username': game_info.gameCreator} 

    	default_ajax_call(data, "create game")
    })
    
    attach_listener("#createUser", "submit", function(event){
    	var user_info = extract_form_information(this)
    	var data = {'username': user_info.userName}

    	default_ajax_call(data, "create user")
    })
	
	
	function loadLeftTable(games){
	
    	var TABLE_ID = "leftTable";
    	var ROW_CLASS = TABLE_ID + "Row";
    	
	
		//get leftTable
		var table = $("#" + TABLE_ID);
		var crntRow;
		var l = games.length;//gameList.size;
		
		//create headings
		crntRow = $("<tr>", {class: ROW_CLASS}) //set table class for later css styling
		
		//create data
		$.each(games, function(index, game){
			crntRow = $("<tr>", {class: ROW_CLASS}); //set table class for later css styling
			
			$.each(['id', 'name', 'creator', 'participants'], function(index, property_name){
				crntRow.append($("<td>", {class: TABLE_ID + property_name}).html(game[property_name]))
			});
			
			//create buttons
			var button = $("<td>", {class: "joinButton"}).html("Join Game");
			
			$(button).click(function(){
				var id_cell = $(this).parent().find('.' + TABLE_ID + 'id') // first element of the parent, i.e. first cell in the row
				var id = parseInt(id_cell.html()) // get numberic id from html content of first cell
				
				console.log(id)
			});
			
			crntRow.append(button);
			
			table.append(crntRow);
		 });
		return;
	};
	
	function loadRightTable(playerList){
		
		
		var target = $("#rightTable");
		var crntData;
		
		var l = playerList.length;//gameList.size;
		
		for (i=0;i<l;i++){
			var crntRow = $('<tr>', {class: "rightTableRow"}); //set table class for later css styling
			
			crntData = $("<td>").html(playerList[i]);
			
			crntRow.append(crntData);
			
			target.append(crntRow);
		}
		return;
	};
	
	// things to execute immediately (should go last)
	(function call_immediately(){
		//Filler Data for until database is ready
		var games = [
			{id: 1, "name":"banana","creator":"bb","participants":["dukakes","myself"]},
			{id: 2, "name":"gorilla","creator":"DK","participants":["DK","Tarzan"]},
			{id: 3, "name":"chimp","creator":"joe","participants":["joe","archibald"]},
			{id: 4, "name":"ape","creator":"schmoe","participants":["schmoe","bloe"]},
		];
		
		var playerList = [
		      			"DK",
		      			"bb",
		      			"dukakes",
		      			"myself",
		      			"joe",
		      			"bloe",
		      			"schmoe"
		];
		
		
		loadLeftTable(games);
		loadRightTable(playerList);
		
	})();
}; // end main