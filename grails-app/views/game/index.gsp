<!DOCTYPE html>
<html>
    <head>
        <title>Dummy Page</title>
        <meta charset="utf-8"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <link rel="stylesheet" href='<g:resource dir="css" file="temp_seans_placeholder.css" />' type="text/css" media="all"/>
        <script src='<g:resource dir="javascripts" file="temp_seans_filler.js"/>'></script>
    </head>
    <body onload="main();">
    	<h1>Database Access Mockup</h1>
	    <div class="column">
	        <p>
	            Enter a username and password
	        </p>
	        <form id="loginForm">
	            <input name="usernameBox" type="text" placeholder="username"></input>
	            <br>
	            <input name="passwordBox" type="text" placeholder="password"></input>
	            <input type="submit" value="Login">
	        </form>
	    </div>
	    <div class="column">
	        <p>
	            Play without signing in
	        </p>
	        <button id="playNow">Play Anonymously</button>
	        <p>
	            Note: anonymous players can't get high scores probably
	        </p>
	    </div>
	    <div class="column">
	        <p>
	            Create a new account
	        </p>
	        <form id="signUpForm">
	            <input name="chooseUsernameBox" type="text" value="" placeholder="username"></input>
	            <br>
	            <input name="choosePasswordBox" type="text" value="" placeholder="password"></input>
	            <input type="submit" value="Sign Up">
	        </form>
	    </div>
	</body> 
</html>