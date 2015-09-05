package horaeshopliteswebsite

import grails.converters.JSON
import org.grails.web.json.JSONObject

class GameController {
	
	def userService
	def gameService

    def index() { 
		def map = []
				
		return [session: session]
	}
	
	def ajax_response(){
				
		def reply = [:]

		JSONObject request_obj = JSON.parse(params.json_formatted_request)
		def operation = request_obj['operation']
		def data = request_obj['data']
		
		switch (operation){
			case 'login':
				if(User.findByUsername(data.username)){
					session.user = data.username;
					reply << [success: true, username: session.user, 
						message: 'Logged in as ' + session.user]
				}else{
					reply << [success: false, message: 'no such user']
				}
				
				break
			case 'logout':
				session.user = null
				session.invalidate()
				reply << [success: true, message: 'Logged out successfully']
				break
				
			case 'create user':
				def(success, user_id) = userService.create(data.username)
				reply << ['success': success, 'user_id': user_id]
				break
				
			case 'create game':
				if(session.user){
					def game_name = data.game_name ?: ''
					def creator_username = session.user
					def(success, game_id) = gameService.create(game_name, creator_username)
					reply << ['success': success, 'game_id': game_id]
				}else{
					reply << ['success': false, 'message': "Failed to create game: you are not logged in"]
				}
				break
				
			case 'play singleplayer':
				break
			case 'join game':
				if(session.user){
					def success = gameService.join(data.game_id, session.user) // replace with session info later
					reply << ['success': success]
				}else{
					reply << ['success': false, 'message': 'You are not logged in']
				}
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
