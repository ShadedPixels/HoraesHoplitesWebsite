package horaeshopliteswebsite

class HomeController {

	def index() {
		
		def builds = [
			["Build #1.0", "Lorem ipsum dolor sit amet, consectetur \
			adipiscing elit. Aliquam convallis erat nunc, in venenatis urna \
			accumsan nec. Proin commodo, velit a dignissim luctus, tortor odio \
			consectetur lectus, quis congue mauris."],
			["Build #1.1", "Lorem ipsum dolor sit amet"],
			["Build #1.2", "Lorem ipsum dolor sit amet"],
			["Build #1.3", "Testing build message; Automatically embedded"],
			["Build #1.4", "Testing build message 2; Automatically embedded"]
		]
		
		return [builds: builds]
		
	}

}