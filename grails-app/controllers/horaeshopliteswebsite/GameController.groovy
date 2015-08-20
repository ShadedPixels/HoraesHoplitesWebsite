package horaeshopliteswebsite

import grails.converters.JSON

class GameController {

    def index() { 
		def map = []
		
		def user1 = new User(username: "heck")
		
		return []
	}
	
	def ajax_response(){
		println params.test
		def answer = [message: 'success']		
		render answer as JSON
	}
}
