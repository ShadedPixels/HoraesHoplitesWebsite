import org.gradle.api.DefaultTask
import org.gradle.api.tasks.TaskAction

import org.ajoberstar.grgit.Grgit
//import com.moowork.gradle.node.task.NpmTask for the failing thing at the bottom of the file

class IncludeGame extends DefaultTask {
    //String property = value

    @TaskAction
    def include_game () {
        println 'include game'
    }

}

class WatchifyGame extends DefaultTask {

	@TaskAction
	def watchify(){
		println 'watchify'
	}
}

class BrowserifyGame extends DefaultTask {

	@TaskAction
	def browserify(){
		println 'browserify'


	}
}

class CloneGame extends DefaultTask {

	@TaskAction
	def clone(){
		File dir = new File("${project.buildDir}/game")
		def grgit;

		if(!dir.exists()){
			grgit = Grgit.clone(
					dir: dir.getAbsolutePath(),
					uri: 'https://github.com/ShadedPixels/Multiplayer-Infinite-2-D-Side-Scroller.git',
			)
		}else{
			grgit = Grgit.open(dir: dir.getAbsolutePath())
			grgit.pull()
		}

	}
}

// didn't work because of some inheritance issue (?) but nice idea, so I'll leave it here
// maybe some day will need more functionality, then can get back, find the problem, make it work
/*
class InstallBrowserify extends NpmTask{
	@Override
	@TaskAction
	void exec(){
		this.setArgs(['install', 'browserify']) // custom

        if (this.npmCommand != null) {
            this.runner.arguments.addAll(this.npmCommand)
        }
        this.runner.arguments.addAll(this.args)
        this.result = this.runner.execute()
    }
}
*/
