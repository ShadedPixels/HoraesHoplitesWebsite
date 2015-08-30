package horaeshopliteswebsite

class User {
	
	String username
	
	//static hasMany = [games: Game]

    static constraints = {
		username unique: true
    }
	
	
	static mapping = {
		//games joinTable: 'user_games'
	}
}
