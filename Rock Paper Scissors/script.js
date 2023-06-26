//**********************************************************************************
// written by Ben Jones
//
// Student boilerplate to make a OOP Rock Paper Scissors
// - OOP - Const data type - Passing data into methods
//
// Written 22/6/2023
// License: https://github.com/TempeHS/2024SDD-WebJS-Ben.Jones/blob/main/LICENSE
//**********************************************************************************



let playerScore;
let computerScore;

function gameLoop (playerClicked) {
	const randomNumber = generateRandomNumber()
	// convert random number to a choice so you can both equality check and use in the ouput string it should be stored in a const 
	
	
	
	const computerChoice = randomNumber //for debug only
	equalityCheck (playerClicked, computerChoice);
}

function generateRandomNumber () {
	const result = Math.floor((Math.random() * 3) + 1);
	return result;
}


function equalityCheck (playerChoice, computerChoice){
	// perform an equality check, update scores and output a string using concatenation that gives user feedback 


	alert (playerChoice);  //for debug only
	alert(computerChoice); //for debug only
	if (playerChoice == "Rock") {
		againstRock();
	} else {
		if (playerChoice == "Paper") {
			againstPaper();
		} else {
			if (playerChoice == "Scissors") {
				againstScissors();
			}
		}
	}
	
	let playerTip = 0;
	document.getElementById("playerScoreContent").innerHTML = playerScore;
	document.getElementById("computerScoreContent").innerHTML = computerScore;
	document.getElementById("tipContent").innerHTML = playerTip;
}
function againstRock() {
	if (randomNumber = 1) { //1 = Rock
		alert("Hi");
		playerTip = "Tie";
	} else {
		if (randomNumber = 2) { // 2 = Paper
			alert("Hi");
			computerScore = computerScore + 1;
			playerTip = "Computer Wins";
		} else {
			if (randomNumber = 3) { // 3 = Scissors
				alert("Hi");
				playerScore = playerScore + 1;
				playerTip = "Player Wins";
			}
		}
	}
}

function againstPaper() {
	alert("hi");
}

function againstScissors() {
		alert("hi");
}