package horaeshopliteswebsite

import grails.test.mixin.Mock
import grails.test.mixin.TestFor
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.services.ServiceUnitTestMixin} for usage instructions
 */
@TestFor(UserService)
@Mock([User])
class UserServiceSpec extends Specification {

    def setup() {
    }

    def cleanup() {
    }

    void "user creation"() {
		when:
			def(success, user_id) = service.create("user")
		then:
			success == true
			def user = User.get(user_id)
			user != null
			user.username == "user"
			user == service.getByUsername("user")
    }
	
	void "list users"(){
		when:
			def user1 = new User(username: "user1").save(flush: true, failOnError: true)
			def user2 = new User(username: "user2").save(flush: true, failOnError: true)
		then:
			service.list().sort() == [[username: "user1"], [username: "user2"]].sort()
	}
}
