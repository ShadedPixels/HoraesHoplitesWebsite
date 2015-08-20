package horaeshopliteswebsite

class Game {
		
	String name 
	
	User creator
	
	static hasMany = [participants: User]
	
	static belongsTo = [User]
	
    static constraints = {
		creator nullable: false
		name nullable: true
    }
}
