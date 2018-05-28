// Computer chooses a random letter

// Userpicks a letter using document.onkeyup

// All variables //
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuess = [];
var computerChoice;

//to initiate the game
theGame();

function theGame() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var randomLetter = alphabet[Math.floor(Math.random() * 26)];
    var computerChoice = randomLetter;

    // If correct guess:

    // If userGuess equals computerChoice the win counter goes up +1

    // If userGuess equals computerChoice guessesLeft resets to 9

    // If userGuess equals computerChoice yourGuesses resets

    checkIfCorrect();

    function checkIfCorrect() {

        document.onkeyup = function (event) {

            //makes user's guess an alphanumeric key and makes guess lowercase
            var userChoice = String.fromCharCode(event.keyCode).toLowerCase();


            //if statement to prevent user from choosing a key that's not part of
            //the alphabet. a = unicode 65, z = unicode 90.
            if (event.keyCode < 65 || event.keyCode > 90) {
                alert("Invalid Entry");

                //if the user guesses correctly
            } else if (userGuess === computerChoice) {
                console.log("You win."); //test
                wins = wins + 1;


                resetGame();


                // If incorrect guess:

                // If userGuess does not equal computerChoice guessesLeft goes down -1

                // If userGuess does not equal computerChoice guessesSoFar shows the letter guessed

            } else {
                guessesLeft = guessesLeft - 1;

                document.getElementById("guesses-left").innerHTML = guessesLeft;
                yourGuess.push(userGuess); //append user's choice to array yourGuess


                document.getElementById("your-guesses").innerHTML = userGuess;


                noGuessesLeft();
            }
        }
    }

    function resetGame() {
        guessesLeft = 9;
        userGuess = [];
        document.getElementById("guesses-left").innerHTML = guessesLeft;
        document.getElementById("your-guesses").innerHTML = yourGuess;
        theGame(); //restart the game with new computerChoice.

    }

    function noGuessesLeft() {
        if (guessesLeft === 0) {
            losses = losses + 1
            document.getElementById("your-losses").innerHTML = losses;

            resetGame();

        } else {

            checkIfCorrect();
        }

    }

}


