//define Game class
var Game = function(def){
	this.creator = def.creator;
	this.participants = def.participants;
	return;
};


function loadLeftTable(){

	//Filler Data for until database is ready
	var games = {
		"banana": new Game({"name:creator":"bb","participants":["dukakes","myself"]}),
		"gorilla": new Game({"creator":"DK","participants":["DK","Tarzan"]}),
		"chimp": new Game({"creator":"joe","participants":["joe","archibald"]}),
		"orangutang": new Game({"creator":"schmoe","participants":["schmoe","bloe"]}),
	};
	gameList = Object.keys(games);

	//get leftTable
	var target = document.getElementById("leftTable");
	var crntData;
	var crntRow;
	var l = gameList.length;//gameList.size;
	
	//create headings
	crntRow = document.createElement("tr");
	crntRow.className = "leftTableRow";//set table class for later css styling
	
	crntData = document.createElement("th");
	crntData.innerHTML = "Name";
	crntRow.appendChild(crntData);
	
	crntData = document.createElement("th");
	crntData.innerHTML = "Creator";
	crntRow.appendChild(crntData);
	
	crntData = document.createElement("th");
	crntData.innerHTML = "Participants";
	crntRow.appendChild(crntData);
	
	crntData = document.createElement("th");
	crntData.innerHTML = "Join Game";
	crntRow.appendChild(crntData);
	
	target.appendChild(crntRow);
	
	//create data
	for (i=0;i<l;i++){
		crntRow = document.createElement("tr");
		crntRow.className = "leftTableRow";//set table class for later css styling
		
		crntData = document.createElement("td");
		crntData.innerHTML = gameList[i];
		crntRow.appendChild(crntData);
		
		crntData = document.createElement("td");
		crntData.innerHTML = games[gameList[i]].creator;
		crntRow.appendChild(crntData);
		
		crntData = document.createElement("td");
		crntData.innerHTML = games[gameList[i]].participants;
		crntRow.appendChild(crntData);
		
		//create buttons
		crntData = document.createElement("td");
		crntData.className = "joinButton";
		crntData.innerHTML = "Join Game";
		crntData.onClick = function(event){
			var sendButton = $(event.target);
			console.log()
		};
		crntRow.appendChild(crntData);
		
		target.appendChild(crntRow);
	}
	return;
};

function loadRightTable(){
	var playerList = [
		"DK",
		"bb",
		"dukakes",
		"myself",
		"joe",
		"bloe",
		"schmoe"
	];
	
	var target = document.getElementById("rightTable");
	var crntData;
	var crntRow;
	var l = playerList.length;//gameList.size;
	
	crntRow = document.createElement("tr");
	crntRow.className = "rightTableRow";//set table class for later css styling
	
	crntData = document.createElement("th");
	crntData.innerHTML = "Username";
	crntRow.appendChild(crntData);
	
	target.appendChild(crntRow);
	
	for (i=0;i<l;i++){
		crntRow = document.createElement("tr");
		crntRow.className = "rightTableRow";//set table class for later css styling
		
		crntData = document.createElement("td");
		crntData.innerHTML = gameList[i];
		crntRow.appendChild(crntData);
		
		target.appendChild(crntRow);
	}
	return;
};