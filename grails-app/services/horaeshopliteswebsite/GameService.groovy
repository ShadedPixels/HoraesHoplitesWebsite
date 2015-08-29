package horaeshopliteswebsite

import java.util.logging.Logger;

import grails.transaction.Transactional

@Transactional
class GameService {
	
	def userService

	@Transactional
    def create(String name, String creator_username){
	/*
	 * creates new game
	 * return:
	 * 		id of the game just created
	 */
		User creator = userService.getByUsername(creator_username)
		if(creator == null){
			log.info("User ${creator_username} not found")
			return -1
		}
		
		Game game = new Game(name: name, creator: creator).save();
		game.addToParticipants(creator)
		game = game.save(flush:true)
		if(game == null){
			// if failed to save
			return -1
		}
		return game.id
	}
	
	@Transactional
	def join(game_id, String username){
		Game game = Game.get(game_id)
		User user = User.findByUsername(username)
		
		if(game == null || user == null){ // if can't find one of them
			return false
		}
		
		if(user in game.participants){
			return true
		}
		game.addToParticipants(user)
		return !!game.save(flush: true)
		
	}
	
	@Transactional(readOnly = true)
	def list(){
		return Game.list().collect {[it.id, it.name]}
	}
	
	@Transactional(readOnly = true)
	def getById(id){
		return Game.get(id)
	}
}
