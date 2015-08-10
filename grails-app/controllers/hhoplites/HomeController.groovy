package hhoplites

import grails.converters.JSON
import grails.converters.XML
import groovy.transform.TailRecursive;


class HomeController {

 	def log_array = []

	def tailService

	def index() {
			
//		def file = new File("/tmp/woodpecker.log")
//
//		tailService.tail("test", file){
//				log_array << it
//				print log_array
//		}
//
//		tailService.stop("test")
		
		def builds = [
			["Build #1.0", "Lorem ipsum dolor sit amet, consectetur \
			adipiscing elit. Aliquam convallis erat nunc, in venenatis urna \
			accumsan nec. Proin commodo, velit a dignissim luctus, tortor odio \
			consectetur lectus, quis congue mauris."],
			["Build #1.1", "Lorem ipsum dolor sit amet"],
			["Build #1.2", "Lorem ipsum dolor sit amet"],
			["Build #1.3", "Testing build message; Automatically embedded"]
		]
		
		return [builds: builds]
		

	}

    def get_log(){
		render log_array as JSON
    }

    def blah(){
		def message = ["id": params.id, "something": params.something]
		render message as JSON
    }
}