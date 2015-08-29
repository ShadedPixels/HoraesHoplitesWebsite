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
    
    attach_listener("#createGame", "submit", function(event){
    	default_ajax_call(extract_form_information(this))
    })
    
    attach_listener("#createUser", "submit", function(event){
    	default_ajax_call(extract_form_information(this))
    })
    
	
	//define Game class
	var Game = function(def){
		this.creator = def.creator;
		this.participants = def.participants;
		return;
	};
	
	
	function loadLeftTable(){
	
		//Filler Data for until database is ready
		var games = [
			new Game({"name":"banana","creator":"bb","participants":["dukakes","myself"]}),
			new Game({"name":"gorilla","creator":"DK","participants":["DK","Tarzan"]}),
			new Game({"name":"chimp","creator":"joe","participants":["joe","archibald"]}),
			new Game({"name":"ape","creator":"schmoe","participants":["schmoe","bloe"]}),
		];
	
		//get leftTable
		var target = document.getElementById("leftTable");
		var crntData;
		var crntRow;
		var l = gameList.length;//gameList.size;
		
		//create headings
		crntRow = document.createElement("tr");
		crntRow.className = "leftTableRow";//set table class for later css styling
		
		crntData = document.createElement("th");
		crntData.innerHTML = "ID";
		crntRow.appendChild(crntData);
		
		crntData = document.createElement("th");
		crntData.innerHTML = "Name";
		crntRow.appendChild(crntData);
		
		crntData = document.createElement("th");
		crntData.innerHTML = "Creator";
		crntRow.appendChild(crntData);
		
		crntData = document.createElement("th");
		crntData.innerHTML = "Participants";
		crntRow.appendChild(crntData);
		
		crntData = document.createElement("th");
		crntData.innerHTML = "Join Game";
		crntRow.appendChild(crntData);
		
		target.appendChild(crntRow);
		
		//create data
		for (i=0;i<l;i++){
			crntRow = document.createElement("tr");
			crntRow.className = "leftTableRow";//set table class for later css styling
			
			crntData = document.createElement("td");
			crntData.innerHTML = i;
			crntRow.appendChild(crntData);
			
			crntData = document.createElement("td");
			crntData.innerHTML = games[i].name;
			crntRow.appendChild(crntData);
			
			crntData = document.createElement("td");
			crntData.innerHTML = games[i].creator;
			crntRow.appendChild(crntData);
			
			crntData = document.createElement("td");
			crntData.innerHTML = games[i].participants;
			crntRow.appendChild(crntData);
			
			//create buttons
			crntData = document.createElement("td");
			crntData.className = "joinButton";
			crntData.innerHTML = "Join Game";
			$(crntData).click = function(event){
				var sendButton = $(event.target);
				console.log(event);
			};
			crntRow.appendChild(crntData);
			
			target.appendChild(crntRow);
		}
		return;
	};
	
	function loadRightTable(){
		var playerList = [
			"DK",
			"bb",
			"dukakes",
			"myself",
			"joe",
			"bloe",
			"schmoe"
		];
		
		var target = document.getElementById("rightTable");
		var crntData;
		var crntRow;
		var l = playerList.length;//gameList.size;
		
		crntRow = document.createElement("tr");
		crntRow.className = "rightTableRow";//set table class for later css styling
		
		crntData = document.createElement("th");
		crntData.innerHTML = "Username";
		crntRow.appendChild(crntData);
		
		target.appendChild(crntRow);
		
		for (i=0;i<l;i++){
			crntRow = document.createElement("tr");
			crntRow.className = "rightTableRow";//set table class for later css styling
			
			crntData = document.createElement("td");
			crntData.innerHTML = gameList[i];
			crntRow.appendChild(crntData);
			
			target.appendChild(crntRow);
		}
		return;
	};
};