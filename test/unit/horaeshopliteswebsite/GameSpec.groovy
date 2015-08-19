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
		when: 'game created without creator specified'
			def game1 = new Game(name: "game1").save(failOnError: true)
		then:
			def excptn = thrown(ValidationException)
			excptn.message.contains("Field error in object 'horaeshopliteswebsite.Game' on field 'creator': rejected value [null];")

		when: 'game created properly'
			def creator = new User(username: "Joe")
			def game2Created = new Game(name: "game2", creator: creator).save(failOnError: true)
		then: 'no error or inconsistent data'
			game2Created != null
			def game2FromDb = Game.findByName("game2")
			game2FromDb != null
			game2FromDb == game2Created
			game2FromDb.creator == creator
			
			
    }
}
