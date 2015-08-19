package horaeshopliteswebsite

import grails.test.mixin.TestFor
import grails.test.mixin.TestMixin
import grails.test.mixin.hibernate.HibernateTestMixin
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
    }
	
	
}
