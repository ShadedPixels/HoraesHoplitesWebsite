package horaeshopliteswebsite

import grails.converters.JSON

import org.codehaus.groovy.grails.web.json.JSONObject

class GameController {

    def index() { 
		def map = []
				
		return []
	}
	
	def ajax_response(){
				
		def reply = [:]

		JSONObject request_obj = JSON.parse(params.json_formatted_request)
		def operation = request_obj['operation']
		def data = request_obj['data']
		
		switch (operation){
			case 'login':
				break
			case 'create user':
				break
			case 'create game':
				break
			case 'play singleplayer':
				break
			case 'join game':
				break
			case 'list users':
				break
			case 'list games':
				break
				
			case 'default':
			default:
				println data
				reply << [message: "default case executed for operation \"${operation}\" and data ${data}"]
		}
		
		render reply as JSON
	}
}
