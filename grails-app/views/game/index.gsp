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
			<form id=playNow>
				<input type="submit" value="PLAY NOW">
			</form>
		</div>
		<div>
			<div id="left">
				<form id="createGame">
					<input type="text" name="gameName">
					<input type="text" name="gameCreator">
					<input type="submit" value="Create Game">
				</form>
				<div>
					<table id="leftTable">
					</table>
				</div>
			</div>
			<div id="right">
				<form id="createUser">
					<input type="text" name="userName">
					<input type="submit" value="Create User">
				</form>
				<div>
					<table id="rightTable">
					</table>
				</div>
			</div>
		</div>
	</body> 
</html>