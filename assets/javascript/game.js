var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuess = [];
var computerChoice;

<<<<<<< HEAD

Play();

function Play() {
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var randomLetter = alphabet[Math.floor(Math.random() * 26)];
	var computerChoice = randomLetter;
=======

Play();

function Play() {
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var randomLetter = alphabet[Math.floor(Math.random() * 26)];
	var computerChoice = randomLetter;

	checkIfCorrect();

	function checkIfCorrect() {

		document.onkeyup = function (event) {

			var userChoice = String.fromCharCode(event.keyCode).toLowerCase();

			if (event.keyCode < 65 || event.keyCode > 90) {

				// stops user from guessing a letter twice and stops the guesses counter from being deducted for a previous guess
			} else if (userGuess.indexOf(userChoice) >= 0) {
>>>>>>> 8f52b88831e0301d441692c6319a5d36fc9b4e4a

	checkIfCorrect();

<<<<<<< HEAD
	function checkIfCorrect() {

		document.onkeyup = function (event) {

			var userChoice = String.fromCharCode(event.keyCode).toLowerCase();

			if (event.keyCode < 65 || event.keyCode > 90) {

				// stops user from guessing a letter twice and stops the guesses counter from being deducted for a previous guess
			} else if (userGuess.indexOf(userChoice) >= 0) {

				// if correct
			} else if (userChoice === computerChoice) {
				alert("You win! Play Again?");

				wins = wins + 1;
				document.getElementById("your-wins").innerHTML = wins;

				resetGame();


				// if incorrect
			} else {
				guessesLeft = guessesLeft - 1;

				document.getElementById("guesses-left").innerHTML = guessesLeft;
				userGuess.push(userChoice);

				document.getElementById("your-guesses").innerHTML = userGuess;

				noGuessesLeft();
			}
		}
	}

		function resetGame() {
			guessesLeft = 9;
			userGuess = [];
			document.getElementById("guesses-left").innerHTML = guessesLeft;
			document.getElementById("your-guesses").innerHTML = userGuess;
			theGame();

		}

		function noGuessesLeft() {
			if (guessesLeft === 0) {
				alert("You lose! Play Again?");
				losses = losses + 1
				document.getElementById("your-losses").innerHTML = losses;

				resetGame();

			} else {
				checkIfCorrect();
			}
=======
				// if correct
			} else if (userChoice === computerChoice) {

				wins = wins + 1;
				document.getElementById("your-wins").innerHTML = wins;

				resetGame();


				// if incorrect
			} else {
				guessesLeft = guessesLeft - 1;

				document.getElementById("guesses-left").innerHTML = guessesLeft;
				userGuess.push(userChoice);

				document.getElementById("your-guesses").innerHTML = userGuess;

				noGuessesLeft();
			}
		}
	}

	function resetGame() {
		guessesLeft = 9;
		userGuess = [];
		document.getElementById("guesses-left").innerHTML = guessesLeft;
		document.getElementById("your-guesses").innerHTML = userGuess;
		theGame();

	}

	function noGuessesLeft() {
		if (guessesLeft === 0) {
			alert("You lose! Play Again?");
			losses = losses + 1
			document.getElementById("your-losses").innerHTML = losses;

			resetGame();

		} else {
			checkIfCorrect();
		}

	}
>>>>>>> 8f52b88831e0301d441692c6319a5d36fc9b4e4a

		}

<<<<<<< HEAD
	}

=======
>>>>>>> 8f52b88831e0301d441692c6319a5d36fc9b4e4a
