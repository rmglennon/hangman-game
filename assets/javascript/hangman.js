// create a list of words

var wordList = {
	word1: ["butternut"],
	word2: ["vegetarian"],
	word3: ["kabocha"],
	word4: ["maple syrup"]
};

var lettersUsed = []; //array to hold letters guessed but not in word

var lettersUsedInWord = [] // array to hold letters guessed and in word

var score = 0; // start score on 1

var round = 1; // start on word 1

var totalRounds = 4; // total number of possible rounds (based on number of words)

var totalPossibleGuesses = 6; // total number of possible guesses (6 based on drawing actual hangman)

startBrandNewGame();

function startBrandNewGame() {
	if (document.onkeyup) {
		score = 0;
		round = 1;
		totalPossibleGuesses = 6;
		console.log("you pressed any key");
		return;
	// if any key is pressed

	//set score to 0
	//choose a word
	// chooseWord(start);
	}
}

function playAgain(score) {
	// start = previous game

	while (round <= totalRounds) {


	totalPossibleGuesses = 6;
	chooseWord(round);
		}
}

// this is hard-coded, need to figure out how to get object array index
// always the 0 index because it is the first/only word in array
function chooseWord(round) {
	 var word = wordList["word" + round][0];
	 return word;
}

// console.log(wordList.word2[0]);

// check key - right now, hard-coded to word1[0] entry.
document.onkeyup = function(event) {
    var userInput = event.key;
   	checkIfLetter(userInput);
}

// test if letter is in the current word
// if it it not (-1), decrease guesses left
// if it is and is not already in the list, add it.
function checkLetterInWord(letter, word) {
   	if (word.indexOf(letter) === -1) {
   		console.log("checkLetterInWordif1 ran, not in word");

   		addLetterToUsedList(letter);

	}
	// if (word.indexOf(letter) >= 0) {
	// 	console.log("checkLetterInWord if2 ran, hooray");
	// 	if (lettersUsedInWord.indexOf(letter) === -1) {
	// 		lettersUsedInWord.push(letter);
	// 		console.log(lettersUsedInWord);
	// 	}

	// if  letter is in word and not found in list of used letters in the word
	// else if letter is in word  and in list, do nothing
		if ((word.indexOf(letter) >= 0) && (lettersUsedInWord.indexOf(letter) === -1)) {
		console.log("checkLetterInWord if2 ran, hooray");
			lettersUsedInWord.push(letter);
			console.log(lettersUsedInWord);
			// needs to display it in the underlines

		} else if ((word.indexOf(letter) >= 0) && (lettersUsedInWord.indexOf(letter) >=0)) {
			return;
			// do nothing because letter guessed and alreday displayed
}
		// else	{
		// round++;
		// score++;
		// console.log("round #: " + round + "score: " + score);
		// }


		// need to add && condition for letter in word entered twice
		// need to increment score
		// need to choose new word

}

function endRound() {
	if (totalPossibleGuesses === 0) {
		console.log("game over, you ran out of guesses")
		//startBrandNewGame();
	}
}


//  var checkLetter = wordList.word1[0];

//    	if (checkLetter.indexOf(userInput) === -1) {
//    		// addLetterToUsedList(userInput);


// 	}
// 	if (checkLetter.indexOf(userInput) >= 0) {
// 		console.log("hooray");
// 	}
// }

// test if key pressed is an English letter, lower or uppercase
function checkIfLetter(letter) {
	var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	if (alphabet.indexOf(letter) === -1) {
		console.log("checkIfLetter ran; you didn't enter a letter");
		return;
	}
	else {
		console.log("checkIfLetter else ran")
		letter = letter.toLowerCase();
		// need to figure out how to pass word if function needs it
		checkLetterInWord(letter, (wordList.word1[0]));
	}
}

// adds guessed letter to array of letters guessed if not already in array.
// may want to rewrite to if (!lettersused...) to make the action on the if; could add return statement otherwise
//subtract a guess if a new letter that is not already in list of guessed letters not in the word
function addLetterToUsedList(letter) {
	if (lettersUsed.includes(letter)) {
		console.log("addLetterToUsedList if ran, already in list");
		//return;
	}
	else {
		lettersUsed.push(letter);
		console.log("addLetterToUsedList else ran, added letter to list: " + lettersUsed);
		totalPossibleGuesses--; 
   		console.log("total guesses left: " + totalPossibleGuesses);
	}
}

// function iterateAlphabet()
// 	{
// 	   var alphabet = "abcdefghijklmnopqrstuvwxyz";
// 	   for(var i = 0; i < alphabet.length; i++)
// 	   {
// 	      var nextChar = alphabet.charAt(i);
// 	      alert(nextChar);
// 	   }
// 	}


// iterateAlphabet();