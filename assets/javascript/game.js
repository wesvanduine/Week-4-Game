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

/*function to call a random number */
function randomValue(min, max) {
	return Math.floor(Math.random() * (max-min +1)) + min;
}

function startGame(){
	
	// reset current score to 0
	currentScore = 0;

	// set target score to random number between 19-120
	targetScore = randomValue(19,120); 

	// set a random number between 1-12 for each crystal
	crystalGreen = randomValue(1,12);
	crystalPurple = randomValue(1,12); 
	crystalBlue = randomValue(1,12);
	crystalYellow = randomValue(1,12); 

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
		currentScore =  currentScore + crystalGreen;
		console.log(currentScore);
		//change the html to refelect the current score
		$("#currentScore").html(currentScore);
		
		//run the checkWin Function
		checkWin();
	}
	function addPurple(){
		currentScore = currentScore + crystalPurple;
		console.log(currentScore);
		//change the html to refelect the current score
		$("#currentScore").html(currentScore);
		
		//run the checkWin Function
		checkWin();
	}
	function addBlue(){
		currentScore =  currentScore + crystalBlue;
		console.log(currentScore);
		//change the html to refelect the current score
		$("#currentScore").html(currentScore);
		
		//run the checkWin Function
		checkWin();
	}
	function addYellow(){
		currentScore =  currentScore + crystalYellow;
		console.log(currentScore);
		//change the html to refelect the current score
		$("#currentScore").html(currentScore);

		//run the checkWin Function
		checkWin();
	}

	//check if user won or lost and reset the game
	function checkWin(){
		
		if (currentScore > targetScore) {
			alert("You lost!");
			losses ++;

			//change html to reflect losses
			$("#lossCount").html(losses);

			//restarts the game
			startGame();
		}

		else if (currentScore === targetScore){
			alert("You Won!");
			wins ++;

			//change html to reflect losses
			$("#winCount").html(wins);

			//restarts the game
			startGame();


		}
	}
	
	
/*===============GAME LOGIC================*/
//Starts Game
startGame();

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

