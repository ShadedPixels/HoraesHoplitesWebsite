<!DOCTYPE html>
<html>
	<head>
		<title>Dummy Page</title>
		<meta charset="utf-8"/>
		<link rel="stylesheet" href='<g:resource dir="css" file="temp_seans_placeholder.css" />' type="text/css" media="all"/>
 		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
 		<script src='<g:resource dir="javascripts" file="temp_seans_filler.js"/>'></script>
	</head>
	<body>
	<h1>Database Access Mockup</h1>
	<div class="column">
		<p>
			Enter a username and password
		</p>
		<input id="usernameBox" type="text" value="" placeholder="username"></input>
		<br>
		<input id="passwordBox" type="text" value="" placeholder="password"></input>
		</body>
		<button onclick="login();">Login</button>
	</div>
	<div class="column">
		<p>
			Play without signing in
		</p>
		<button onclick="playNow();">Play Anonymously</button>
		<p>
			Note: anonymous players can't get high scores probably
		</p>
	</div>
	<div class="column">
		<p>
			Create a new account
		</p>
		<button onclick="signup();">Sign Up</button>
	</div>

</html>