package horaeshopliteswebsite

class User {
	
	String username

    static constraints = {
		username unique: true
    }
}
