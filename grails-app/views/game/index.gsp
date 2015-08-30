<!DOCTYPE html>
<html>
    <head>
        <title>Dummy Page</title>
        <meta charset="utf-8"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <link rel="stylesheet" href='<g:resource dir="css" file="grog.css" />' type="text/css" media="all"/>
        <script src='<g:resource dir="javascripts" file="monkey.js"/>'></script>
    </head>
    <body onload="main();">
    	<div id="top_section">
			<form id="control">
				<input type="button" value="PLAY NOW" id="playNow">
				<input type="button" value="REFRESH GAMES" id="refreshGames">
				<input type="button" value="REFRESH USERS" id="refreshUsers">
				
			</form>
			<div id='login_container'>
				<form id="login_form" <g:if test='${!!session.user}'> hidden='hidden'</g:if>>
					<label>
						Username:
						<input type="text" name="username">
					</label>
					<input type="submit" value="Login">
				</form>
				<div id="logged_in_status" <g:if test='${!session.user}'> hidden='hidden'</g:if>>
					<g:if test='${!!session.user}'>Logged in as ${session.user}</g:if>
				</div>
				<button id="logout" <g:if test='${!session.user}'> hidden='hidden'</g:if>>Logout</button>
			</div>
		</div>
		<div id="main_section">
			<div id="left">
				<form id="createGame">
					<label>
						Game name:
						<input type="text" name="gameName">
					</label>
					<label>
						Creator username:
						<input type="text" name="gameCreator">
					</label>
					<input type="submit" value="Create Game">
				</form>
				<div>
					<table id="leftTable">
						<tr>
							<th> Id: </th>
							<th> Name: </th>
							<th> Creator: </th>
							<th> Participants: </th>
							<th> Join Game: </th>
						</tr>
					</table>
				</div>
			</div>
			<div id="right">
				<form id="createUser">
					<label>
						Username:
						<input type="text" name="userName">
					</label>
					<input type="submit" value="Create User">
				</form>
				<div>
					<table id="rightTable">
						<tr>
							<th> Username: </th>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</body> 
</html>