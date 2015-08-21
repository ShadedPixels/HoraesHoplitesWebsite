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
    
    attach_listener("#loginForm", "submit", function(event){
    	default_ajax_call(extract_form_information(this))
    })
    
    attach_listener("#signUpForm", "submit", function(event){
    	default_ajax_call(extract_form_information(this))
    })


};
