class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

		"/game/images/$filename"{
			controller = "Game"
			action = "images"
		}


        "/"{                                                                    
            controller = "Home"                                                 
            action = "index"                                                    
        }

        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
