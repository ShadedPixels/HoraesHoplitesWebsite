package horaeshopliteswebsite

import grails.test.mixin.TestFor
import grails.validation.ValidationException
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.domain.DomainClassUnitTestMixin} for usage instructions
 */
@TestFor(User)
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
	
	
}
	
	