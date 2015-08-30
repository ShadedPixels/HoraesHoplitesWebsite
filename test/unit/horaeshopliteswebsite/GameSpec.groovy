package horaeshopliteswebsite

import grails.test.mixin.TestFor
import grails.validation.ValidationException
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.domain.DomainClassUnitTestMixin} for usage instructions
 */
@TestFor(Game)
class GameSpec extends Specification {

    def setup() {
    }

    def cleanup() {
    }

    void "game creation"() {
		setup:
			mockDomain(User)
			def creator = new User(username: "Joe").save(failOnError: true, flush: true)
		
		
		when: 'game created without creator specified'
			def game1 = new Game(name: "game1").save(failOnError: true)
		then:
			def excptn = thrown(ValidationException)
			excptn.message.contains("Field error in object 'horaeshopliteswebsite.Game' on field 'creator': rejected value [null];")

		when: 'game created properly'
			def game2Created = new Game(name: "game2", creator: creator).save(failOnError: true)
		then: 'no error or inconsistent data'
			game2Created != null
			Game game2FromDb = Game.findByName("game2")
			game2FromDb != null
			game2FromDb == game2Created
			game2FromDb.creator == creator
			
    }
	
	void "add participants"(){
		setup:
			mockDomain(User)
			def par1 = new User(username: "Doe").save(flush: true, failOnError: true)
			def par2 = new User(username: "Joe").save(flush: true, failOnError: true)
			def par3 = new User(username: "John").save(flush: true, failOnError: true)
			
			Game game1 = new Game(name: "game1", creator: par3).save(flush: true, failOnError: true)
			Game game2 = new Game(name: "game2", creator: par3).save(flush: true, failOnError: true)
			
		when: "add participants to the game"
			game1.addToParticipants(par1)
			game1.addToParticipants(par2)
			game1.addToParticipants(par3)
			game1 = game1.save(flush: true, failOnError: true)
		then:
			game1 != null
			Game.findByName("game1").participants.sort() == [par1, par2, par3].sort() // list of participants match
			
		//when: 'trying to add the same participant twice' ???
	}
	
	void "finding data"(){
		setup:
			mockDomain(User)
			def par1 = new User(username: "Doe").save(flush: true, failOnError: true)
			def par2 = new User(username: "Joe").save(flush: true, failOnError: true)
			def par3 = new User(username: "John").save(flush: true, failOnError: true)
			
			Game game1 = new Game(name: "game1", creator: par3).save(flush: true, failOnError: true)
			Game game2 = new Game(name: "game2", creator: par3).save(flush: true, failOnError: true)
			

			game1.addToParticipants(par2)
			game1.addToParticipants(par3)
			
			game2.addToParticipants(par1)
			game2.addToParticipants(par3)
			
		expect:
			Game.findAllByCreator(par3).asList().sort() == [game1, game2].sort()
//			User.findByUsername('John').games.asList().sort() == [game1, game2].sort()
			
			
	}
}
