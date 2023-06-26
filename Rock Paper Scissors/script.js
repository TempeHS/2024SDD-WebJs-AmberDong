//**********************************************************************************
// written by Ben Jones
//
// Student boilerplate to make a OOP Rock Paper Scissors
// - OOP - Const data type - Passing data into methods
//
// Written 22/6/2023
// License: https://github.com/TempeHS/2024SDD-WebJS-Ben.Jones/blob/main/LICENSE
//**********************************************************************************



let playerScore = 0;
let computerScore = 0;

function gameLoop (playerClicked) {
	const randomNumber = generateRandomNumber()
	// convert random number to a choice so you can both equality check and use in the ouput string it should be stored in a const 
	equalityCheck (playerClicked, randomNumber);
}

function generateRandomNumber () {
	const result = Math.floor((Math.random() * 3) + 1);
	return result;
}


function equalityCheck(playerChoice, randomNumber) {
	// perform an equality check, update scores and output a string using concatenation that gives user feedback 
	let playerTip;

	if (randomNumber == 1) { 
		if (playerChoice == "Rock") {
			playerTip = "Player Choice: Rock, Computer Choice: Rock, Results: Its a Tie";
		} else {
			if (playerChoice == "Paper") {
				playerScore++;
				playerTip = "Player Choice: Paper, Computer Choice: Rock, Results: Player Wins";
			} else {
				if (playerChoice == "Scissors") {
					computerScore++;
					playerTip = "Player Choice: Scissors, Computer Choice: Rock, Results: Computer Wins";
				}
			}
		}
	}

	if (randomNumber == 2) {
		if (playerChoice == "Rock") {
			computerScore++;
			playerTip = "Player Choice: Rock, Computer Choice: Paper, Results: Computer Wins";
		} else {
			if (playerChoice == "Paper") {
				playerTip = "Player Choice: Paper, Computer Choice: Paper, Results: It's a Tie";
			} else {
				if (playerChoice == "Scissors") {
					playerScore++;
					playerTip = "Player Choice: Scissors, Computer Choice: Paper, Results: Player Wins";
				}
			}
		}
	}
	if (randomNumber == 3) {
		if (playerChoice == "Rock") {
			playerScore++;
			playerTip = "Player Choice: Rock, Computer Choice: Scissors, Results: Player Wins";
		} else {
			if (playerChoice == "Paper") {
				computerScore++;
				playerTip = "Player Choice: Paper, Computer Choice: Scissors, Results: Computer Wins";
			} else {
				if (playerChoice == "Scissors") {
					playerTip = "Player Choice: Scissors, Computer Choice: Scissors, Results: It's a Tie";
				}
			}
		}
	}

	document.getElementById("playerScoreContent").innerHTML = playerScore;
	document.getElementById("computerScoreContent").innerHTML = computerScore;
	document.getElementById("tipContent").innerHTML = playerTip;
	}