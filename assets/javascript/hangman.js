// create a list of words

var wordList = {
	word1: ["butternut"],
	word2: ["vegetarian"],
	word3: ["kabocha"],
	word4: ["maplesyrup"]
};

var word = ""; //needs to be from a function
var wrongLetters = []; //array to hold letters guessed but not in word
var correctLetters = []; // array to hold letters guessed and in word
var wins = 0; // start score on 1
var round = 1; // start on word 1
var availableRounds = 4; // total number of possible rounds (based on number of words)
var availableGuesses = 6; // total number of possible guesses (6 based on drawing actual hangman)

// var removeCommas = document.querySelector(.remove-commas);



// start the game
startGame();


// initiate all the variables, user interface text, and start the game (if there are available words remaining)
function startGame() {
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
	else {
		alert("do you want to play again?");
	}
}


// reset the variables and UI text
function resetGame() {
	word = "";
	wrongLetters = [];
	correctLetters = [];
	availableGuesses = 6
	document.querySelector("#word-area").textContent = "";
	document.querySelector("#wrong-letters").textContent = "";
  startGame();
}


// handle the key event
// call the first function to test the key and test if winner
document.onkeyup = function(event) {
  var userInput = event.key;
  checkIfLetter(userInput);
  checkIfWinner();
}


// test if the game is over through a win (all _ replaced with letters) and increase score 
// or a lost when runnning out of turns
// increase the round number to start again
function checkIfWinner() {
  if (correctLetters.indexOf("_") === -1) {
    console.log("you win!")
    wins++;
    round++;
    resetGame();
  } else if (availableGuesses === 0) {
    console.log("game over, mate");
    round++;
    resetGame();
  }
}


// test if key pressed is an English letter in lower or uppercase, and convert to lowercase
function checkIfLetter(letter) {
	var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	if (alphabet.indexOf(letter) === -1) {
		console.log("checkIfLetter ran; you didn't enter a letter");
		return;
	}
	else {
		console.log("checkIfLetter else ran")
		letter = letter.toLowerCase();
		checkLetterInWord(letter);
	}
}


// test if letter is in the current word
function checkLetterInWord(letter) {
	// if it is an incorrect letter (-1), call function to add it to used list
  if (word.indexOf(letter) === -1) {
   	console.log("checkLetterInWordif1 ran, not in word");
   	addLetterToUsedList(letter);
	}

	// if letter guessed is in word and not already in list of correct letters,
	// update correct letters with actual letters to replace the _
	// otherwise, do nothing because letter guessed is already displayed
	if ((word.indexOf(letter) >= 0) && (correctLetters.indexOf(letter) === -1)) {
		console.log("checkLetterInWord if2 ran, hooray");
		for (var i = 0; i < word.length; i++) {
    	if (word[i] === letter) {
      	correctLetters[i] = letter;
      	console.log(correctLetters);
      	// update html page with correct letters, but use .join to remove commas in array
      	document.querySelector("#word-area").textContent = correctLetters.join(" ");
    	}
		} 
	} else if ((word.indexOf(letter) >= 0) && (correctLetters.indexOf(letter) >=0)) {
			return;
	}
}


// add guessed letter to array of wrong letters if not already in it, and subtract a guess.
function addLetterToUsedList(letter) {
	if (wrongLetters.indexOf(letter) === -1) {
		wrongLetters.push(letter);
		console.log("addLetterToUsedList else ran, added letter to list: " + wrongLetters);

		// update html page with wrong letters, but use .join to remove commas in array
		document.querySelector("#wrong-letters").textContent = wrongLetters.join(" ");
		availableGuesses--; 
		document.querySelector("#available-guesses").textContent = availableGuesses;
   	console.log("total guesses left: " + availableGuesses);
  }
  else {
		console.log("addLetterToUsedList if ran, already in list");
		return;
	}
}