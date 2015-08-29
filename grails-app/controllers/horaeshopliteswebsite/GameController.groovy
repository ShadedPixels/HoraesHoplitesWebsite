package horaeshopliteswebsite

import grails.converters.JSON

import org.codehaus.groovy.grails.web.json.JSONObject

class GameController {
	
	def userService
	def gameService

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
				def(success, user_id) = userService.create(data.username)
				reply << ['success': success, 'user_id': user_id]
				break
				
			case 'create game':
				def game_name = data.game_name || ""
				def creator_username = data.creator_username
				def(success, game_id) = gameService.create(game_name, creator_username)
				reply << ['success': success, 'game_id': game_id]
				break
				
			case 'play singleplayer':
				break
			case 'join game':
				def success = gameService.join(data.game_id, data.username) // replace with session info later
				reply << ['success': success]
				break
				
			case 'list users':
				reply << ["user_array": userService.list()]
				break
			case 'list games':
				reply << ["game_array": gameService.list()]
				break
				
			case 'default':
			default:
				println data
				reply << [message: "default case executed for operation \"${operation}\" and data ${data}"]
		}
		
		render reply as JSON
	}
}
