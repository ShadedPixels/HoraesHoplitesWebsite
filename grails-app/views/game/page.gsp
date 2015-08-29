<!DOCTYPE html>
<html>
	<head>
		<title>Page!</title>
		<meta charset="utf-8"/>
		<link rel="stylesheet" href="grog.css" type="text/css" media="all"/>
		<script src="monkey.js"></script>
	</head>
	<body>
		<div>
			<form id=playNow>
				<input type="submit" value="PLAY NOW">
			</form>
		</div>
		<div>
			<div id="left">
				<form id="createGame">
					<input type="text" name="gameName">
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
		<script >loadLeftTable();</script>
		<script >loadRightTable();</script>
	</body>
</html>