package horaeshopliteswebsite

class Game {
	
	boolean multiplayer
	
	String name 
	
	static hasOne = [creator: User]
	
	static hasMany = [participants: User]

    static constraints = {
		creator nullable: false
    }
}
