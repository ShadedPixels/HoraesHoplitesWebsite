package horaeshopliteswebsite

import grails.transaction.Transactional

@Transactional
class GameService {

	@Transactional
    def create(){
	/*
	 * creates new game
	 * return:
	 * 		id of the game just created
	 */
	}
	
	@Transactional
	def join(){
		
	}
	
	@Transactional(readOnly = true)
	def list(){
		
	}
	
	@Transactional(readOnly = true)
	def getById(int id){
		
	}
}
