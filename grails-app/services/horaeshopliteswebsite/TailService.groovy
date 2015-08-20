package horaeshopliteswebsite

/* USAGE:
 * 		
		def file = new File("/tmp/woodpecker.log")
		tailService.tail("test", file){
				log_array << it
				print log_array
		}

		tailService.stop("test")
 */

import grails.transaction.Transactional

import org.apache.commons.io.input.Tailer
import org.apache.commons.io.input.TailerListenerAdapter

class CustomTailListener extends TailerListenerAdapter{
	
	private Closure closure
	
	CustomTailListener(Closure c){
		closure = c
	}
	
	CustomTailListener(){
		closure = {
			println it
		}
	}
	
	@Override
	public void handle(String line){
		closure.call(line)
	}
}

@Transactional
class TailService {
	
	private tailers = [:]
	
	def tail(String name, File file, Closure c){
		assert name != null
		
		def listener = new CustomTailListener(c)
		
		def tailer = new Tailer(file, listener)
		
		def t = new Thread(tailer)
		
		tailers[name] = t
		
		t.start()
				
	}
	
	def stop(String name){
		def t = tailers[name]
		if(t){
			t.stop()
			tailers.remove(name)
		}
	}

}