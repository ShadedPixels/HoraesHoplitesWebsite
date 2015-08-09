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

	}

    def get_log(){
		render log_array as JSON
    }

    def blah(){
		def message = ["id": params.id, "something": params.something]
		render message as JSON
    }
}