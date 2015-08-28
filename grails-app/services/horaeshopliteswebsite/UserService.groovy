package horaeshopliteswebsite

import grails.transaction.Transactional

@Transactional
class UserService {

	@Transactional
    def create(){
		
	}
	
	@Transactional(readOnly = true)
	def list(){
		
	}
	
	@Transactional(readOnly = true)
	def getByUsername(String username){
		
	}
}
