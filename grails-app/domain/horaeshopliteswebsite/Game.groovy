package horaeshopliteswebsite

class Game {
		
	String name
	User creator
	
	//static hasOne = [creator: User]
	
	static hasMany = [participants: User]
	
	//static belongsTo = User
			
	
    static constraints = {
		creator nullable: false
		name nullable: true
    }
	
	static mapping = {
		participants joinTable: 'game_participants'
	}
}
