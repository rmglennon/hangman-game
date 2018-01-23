// create variables for game

var word = ""; // word to guess
var wrongLetters = []; //array to hold letters guessed but not in word
var correctLetters = []; // array to hold letters guessed and in word
var wins = 0; // start score on 1
var round = 1; // start on word 1
var availableRounds = 10; // total number of possible rounds
var availableGuesses = 6; // total number of possible guesses
document.querySelector("#wins").textContent = wins;
document.querySelector("#round").textContent = round;
document.querySelector("#available-guesses").textContent = availableGuesses;

// create a list of words

var wordList = {
	word1: ["watermelon"],
	word2: ["cauliflower"],
	word3: ["pumpkin"],
	word4: ["spinach"],
	word5: ["lettuce"],
	word6: ["celery"],
	word7: ["broccoli"],
	word8: ["strawberries"],
	word9: ["mushrooms"],
	word10: ["avocado"]
};


startGame();


// initialize all the variables, user interface text, choose a word, and start the game (if there are available words remaining)
function startGame() {
	document.onkeyup = function(event) {
  	var userInput = event.key;
  	checkIfLetter(userInput);


// listen for Esc key to reset the game
  if (userInput === "Escape") {
  	alert("Starting a new game.")
  	resetGame();
  }
}	
	wrongLetters = [];
	correctLetters = [];
	availableGuesses = 6;


	if (round <= availableRounds) {

		word = wordList["word" + round][0];

		// make the word display as underlines	
		for (var i = 0; i < word.length; i++) {
	    	correctLetters.push("_");
		}
		// use .join to remove commas in array
		document.querySelector("#word-area").textContent = correctLetters.join(" ");
		document.querySelector("#wrong-letters").textContent = wrongLetters.join(" ");
		document.querySelector("#wins").textContent = wins;
	  	document.querySelector("#round").textContent = round;
	  	document.querySelector("#available-guesses").textContent = availableGuesses;
	}
}

// reset the variables and UI text at end of list
function resetGame() {
    round = 1;
    word = "";
    wins = 0;
	wrongLetters = [];
	correctLetters = [];
	availableGuesses = 6;
	document.querySelector("#word-area").textContent = "";
	document.querySelector("#wrong-letters").textContent = "";
  startGame();
}


// test if the game is over through a win (all _ replaced with letters) and increase score 
// or a lost when runnning out of turns
// increase the round number and start again if less than total number of rounds
function checkIfWinner() {
  if (correctLetters.indexOf("_") === -1) {
    document.querySelector("#round-status").textContent = "You won that round with " + word + "!";
 	document.querySelector("#word-area").textContent = word;
    wins++;
    round++;

    if (round > 10) {
    	alert("Let's play again!");
    	resetGame();
    }
    else {
        startGame();	
    }

  } else if (availableGuesses === 0) {
    document.querySelector("#round-status").textContent = "You lost that round with "+ word +
    "!";
    document.querySelector("#word-area").textContent = word;
    round++;

    if (round > 10) {
    	alert("Let's play again!");
    	resetGame();
    }
    else {
        startGame();	
    }
  }
}


// test if key pressed is an English letter in lower or uppercase, and convert to lowercase
function checkIfLetter(letter) {
	var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	if (alphabet.indexOf(letter) === -1) {
		return;
	}
	else {
		letter = letter.toLowerCase();
		checkLetterInWord(letter);
	}
}


// test if letter is in the current word
function checkLetterInWord(letter) {
	// if it is an incorrect letter (-1), call function to add it to used list
  if (word.indexOf(letter) === -1) {
   	addLetterToUsedList(letter);
	}

	// if letter guessed is in word and not already in list of correct letters,
	// update correct letters with actual letters to replace the _
	// otherwise, do nothing because letter guessed is already displayed
	if ((word.indexOf(letter) >= 0) && (correctLetters.indexOf(letter) === -1)) {
		for (var i = 0; i < word.length; i++) {
    	if (word[i] === letter) {
      	correctLetters[i] = letter;
      	// update html page with correct letters, but use .join to remove commas in array
      	document.querySelector("#word-area").textContent = correctLetters.join(" ");
    	}
		} 
	} else if ((word.indexOf(letter) >= 0) && (correctLetters.indexOf(letter) >=0)) {
			return;
	}
	checkIfWinner();
}


// add guessed letter to array of wrong letters if not already in it, and subtract a guess.
function addLetterToUsedList(letter) {
	if (wrongLetters.indexOf(letter) === -1) {
		wrongLetters.push(letter);

		// update html page with wrong letters, but use .join to remove commas in array
		document.querySelector("#wrong-letters").textContent = wrongLetters.join(" ");
		availableGuesses--; 
		document.querySelector("#available-guesses").textContent = availableGuesses;
  }
  else {
		return;
	}
	checkIfWinner();
}