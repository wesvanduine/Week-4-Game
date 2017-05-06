/*==============VARIABLES=====================================*/

/*Crystals*/
var crystalGreen= 0;
var crystalPurple= 0;
var crystalBlue= 0;
var crystalYellow= 0;

/*Scores (current & target)*/
var targetScore= 0;
var currentScore= 0;


/*Wins & Loses*/
var wins= 0;
var losses= 0;



/*===============FUNCTIONS==============*/
function startGame(){
	// reset current score to 0
	var currentScore = 0;

	// set target score to random number between 19-120
	targetScore = Math.floor(Math.random() * (120-19 + 1)) + 19; 

	// set a random number between 1-12 for each crystal
	crystalGreen = Math.floor(Math.random() * (12-1 + 1)) +1;
	crystalPurple = Math.floor(Math.random() * (12-1 + 1)) +1;
	crystalBlue = Math.floor(Math.random() * (12-1 + 1)) +1;
	crystalYellow = Math.floor(Math.random() * (12-1 + 1)) +1;

	//Testing
	console.log("-----------------------------------");
	console.log("target score: " + targetScore);
	console.log("Green Crystal: " + crystalGreen);
	console.log("Purple Crystal: " + crystalPurple);
	console.log("Blue Crystal: " + crystalBlue);
	console.log("Yellow Crystal: " + crystalYellow);
	console.log("------------------------------------")

	//change html
	$("#targetScore").html(targetScore);
	$("#currentScore").html(currentScore);

	};

	//when crystal is clicked add value 
	function addGreen(){
		currentScore = crystalGreen += currentScore;
		console.log(currentScore);
	}
	function addPurple(){
		currentScore = crystalPurple += currentScore;
		console.log(currentScore);
	}
	function addBlue(){
		currentScore = crystalBlue += currentScore;
		console.log(currentScore);
	}
	function addYellow(){
		currentScore = crystalYellow += currentScore;
		console.log(currentScore);
	}
	
	

		//Testing console

		

/*===============GAME LOGIC================*/
$("#green").click(function(){
	addGreen();

})

$("#purple").click(function(){
	addPurple();
})

$("#blue").click(function(){
	addBlue();
})

$("#yellow").click(function(){
	addYellow();
})

//Starts Game
startGame();