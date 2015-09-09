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
	
	var loadLeftTable = function loadLeftTable(games){
	
    	var TABLE_ID = "leftTable";
    	var ROW_CLASS = TABLE_ID + "Row";
    	
	
		//get leftTable
		var table = $("#" + TABLE_ID);
		
		table.find("tr:gt(0)").remove(); // delete all rows except first (done this obscurely due to some bug)

		
		var crntRow;
		var l = games.length;//gameList.size;
		
		//create headings
		crntRow = $("<tr>", {class: ROW_CLASS}) //set table class for later css styling
		
		//create data
		$.each(games, function(index, game){
			crntRow = $("<tr>", {class: ROW_CLASS}); //set table class for later css styling
			
			$.each(['id', 'name', 'creator'], function(index, property_name){
				crntRow.append($("<td>", {class: TABLE_ID + property_name}).html(game[property_name]))
			});
			crntRow.append($("<td>", {class: TABLE_ID + 'participants'}).html(
					JSON.stringify(game['participants']))); // for now as row array, hence stringification

			//create buttons
			var button = $("<td>", {class: "joinButton"}).html("Join Game");
			
			$(button).click(function(){
				var id_cell = $(this).parent().find('.' + TABLE_ID + 'id') // first element of the parent, i.e. first cell in the row
				var id = parseInt(id_cell.html()) // get numberic id from html content of first cell
				default_ajax_call({game_id: id}, 'join game', function(data){
					if(data.success){
						refresh_games();
						console.log("successfully joined game");
					}else{
						console.log(data.message);
					}
				});
			});
			
			crntRow.append(button);
			
			table.append(crntRow);
		 });
		return;
	};
	
	var loadRightTable = function loadRightTable(playerList){
		var TABLE_ID = "rightTable";
    	var ROW_CLASS = TABLE_ID + "Row";
    		
		//get leftTable
		var table = $("#" + TABLE_ID);
		
		table.find("tr:gt(0)").remove(); // delete all rows except first
				
		var l = playerList.length;//gameList.size;
		
		for (i=0;i<l;i++){
			var crntRow = $('<tr>', {class: ROW_CLASS}); //set table class for later css styling
			
			var crntData = $("<td>").html(playerList[i]['username']);
			
			crntRow.append(crntData);
			
			table.append(crntRow);
		}
		return;
	};
	
	var refresh_games = function refresh_users(){
        games = default_ajax_call({}, 'list games', function(data){
			loadLeftTable(data.game_array);
        });
	};
	
	var refresh_users = function refresh_games() {
        default_ajax_call({}, 'list users', function(data){
			loadRightTable(data.user_array);
        });
	};
	
	// things to execute immediately (should go last)
	(function call_immediately(){
		
		attach_listener("#playNow", "click", function(event){
	        console.log("aggle aggle!");
	    });
	    
	    attach_listener("#login_form", "submit", function(event){
	    	var login_info = extract_form_information(this)
	    	default_ajax_call(login_info, 'login', function(data){
	    		if(data.success){
	    			$('#login_form').hide();
	    			
	    			var logged_in_status = $('#logged_in_status')
	    			logged_in_status.html(data.message);
	    			logged_in_status.show();
	    			
	    			$('#logout').show();
	    		}else{
	    			console.log("login failed");
	    		}
	    	});
	    });
	    
	    attach_listener("#logout", "click", function(event){
	    	default_ajax_call({}, 'logout', function(data){
	    		if(data.success){
	    			$('#login_form').show();
	    			$('#logout').hide();
	    			var logged_in_status = $('#logged_in_status')
	    			logged_in_status.hide();
	    			logged_in_status.html('');

	    		}
	    	});
	    });
	    
	    attach_listener("#refreshGames", "click", refresh_games);
	    
	    attach_listener("#refreshUsers", "click", refresh_users);
	    
	    attach_listener("#createGame", "submit", function(event){
	    	var game_info = extract_form_information(this)
	    	var data = {'game_name': game_info.gameName} 

	    	default_ajax_call(data, "create game", function(data){
	    		if(data.success){
			    	refresh_games(); // refresh game list 
	    		}
		    	console.log(data.message)

	    	});
	    });
	    
	    attach_listener("#createUser", "submit", function(event){
	    	var user_info = extract_form_information(this)
	    	var data = {'username': user_info.userName}

	    	default_ajax_call(data, "create user", function(data){
		    	refresh_users(); // update user list
	    	});
	    });
	    
	    refresh_games();
	    refresh_users();
		
	})();
}; // end main
