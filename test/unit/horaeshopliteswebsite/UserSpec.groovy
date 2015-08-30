package horaeshopliteswebsite

import grails.test.mixin.Mock
import grails.test.mixin.TestFor
import grails.validation.ValidationException
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.domain.DomainClassUnitTestMixin} for usage instructions
 */
@TestFor(User)
@Mock([Game])
class UserSpec extends Specification {

    def setup() {
    }

    def cleanup() {
    }

    void "user creation"() {
		when: 'user Joe created'
			def joe = new User(username: "Joe").save()
		then: 
			joe.username == "Joe"
			User.list().size() == 1 // Only one user in the test db
			User.get(1) == joe // that user is joe
			
		when: 'attempt to create 2 users with same username'
			// flush property is important!!! otherwise test fails; read GORM Gotchas articles
			def doe = new User(username: 'Doe').save(failOnError: true, flush: true)
			def doe_dup = new User(username: 'Doe').save(failOnError: true, flush: true)
		then: 'exception'
			ValidationException e = thrown(ValidationException)
			e.message.contains("on field 'username': rejected value [Doe];")
    }
	
	void "user fetching"(){
		when: 'attempt to fetch non-existing user'
			User user = User.findByUsername('does_not_exist')
		then: 'object is null'
			user == null
			
	}
	
	void "add games to user"(){
		setup:
			def user = new User(username: "John").save(flush: true, failOnError: true)
			def game = new Game(name: "game", creator: user).save(flush: true, failOnError: true)
		
//		when: "added a game to user"
//			user.addToGames(game)
//			user = user.save(flush: true, failOnError: true)
//		then:
//			user.games.sort() == [game].sort()
			
		when: "added creator as the participant to game"
			game.addToParticipants(user)
			game = game.save(flush: true, failOnError: true)
		then:
			game.participants.sort() == [user].sort()
	}
	
	
}
	
	