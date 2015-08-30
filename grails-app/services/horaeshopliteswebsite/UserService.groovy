package horaeshopliteswebsite

import grails.transaction.Transactional

@Transactional
class UserService {

	@Transactional
    def create(String username){
		User user = new User(username: username)
		user = user.save()
		return [!! user, user?.id]
	}
	
	@Transactional(readOnly = true)
	def list(){
		return User.list().collect{
			[username: it.username]
		}
	}
	
	@Transactional(readOnly = true)
	def getByUsername(String username){
		return User.findByUsername(username)
	}
}
