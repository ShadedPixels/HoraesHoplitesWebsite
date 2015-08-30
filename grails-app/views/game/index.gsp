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
    	<div>
			<form id=Control>
				<input type="button" value="PLAY NOW" id="playNow">
				<input type="button" value="REFRESH GAMES" id="refreshGames">
				<input type="button" value="REFRESH USERS" id="refreshUsers">
				
			</form>
		</div>
		<div>
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