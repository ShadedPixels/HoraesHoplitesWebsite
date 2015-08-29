package horaeshopliteswebsite

import grails.test.mixin.Mock
import grails.test.mixin.TestFor
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.services.ServiceUnitTestMixin} for usage instructions
 */
@TestFor(GameService)
@Mock([User, Game, UserService])
class GameServiceSpec extends Specification {
	
    def setup() {
    }

    def cleanup() {
    }

    void "test game creation"() {
		setup:	
			User john = new User(username: "John").save(flush: true, failOnError: true)
			
		when:
			def game_id = service.create("game1", "John")
			service.userService.getByUsername(_) >> john;
			
		then:
			game_id >= 0 // not an error flag 
			
			Game.list().size() == 1
			Game game = Game.findByName("game1")
			game != null // game was created
			
			game_id == game.id // id that we recieved from create function equals actual id
			
			game == service.getById(game_id)
			
			service.list() == [[game.id, game.name]]
			
			game.creator == john // creator is correct
			
			
    }
	
	void "test joining game"(){
		
		setup:
			User creator = new User(username: "creator").save()
			User participant = new User(username: "participant").save(flush: true, failOnError: true)
			
			def game_id = service.create("game", "creator")
			Game game = Game.get(game_id)
		
		when: "new participant added"
			boolean success = service.join(game.id, "participant")
			game = Game.findByName("game")
		then:
			success == true
			game.refresh().participants.sort() == [creator, participant].sort()
	}
}
