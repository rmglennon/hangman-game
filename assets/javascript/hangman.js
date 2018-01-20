// create a list of words

var wordList = {
	word1: ["butternut"],
	word2: ["vegetarian"]
};

var lettersUsed = [];

// score of 0, number of questions

var score = 0;

var wordListIndex = 0;

function startNewGame() {
	// if any key is pressed

	//set score to 0
	//choose a word
	score = 0;

}

function chooseWord() {

}

// console.log(wordList.word2[0]);

// check key - right now, hard-coded to word1[0] entry.
document.onkeyup = function(event) {
    var userInput = event.key;

 var checkLetter = wordList.word1[0];
    // console.log(checkLetter);
   	if (checkLetter.indexOf(userInput) === -1) {
   		addLetterToUsedList(userInput);

	}
	if (checkLetter.indexOf(userInput) >= 0) {
		console.log("hooray");
	}
}

// test if key pressed is an English letter
function checkIfLetter(letter) {
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	if alphabet.includes(letter) {
		console.log("you entered a key");
		return letter;
	}
	else {
		return;
	}
}

// adds guessed letter to array of letters already guessed if not already in array.
// may want to rewrite to if (!lettersused...) to make the action on the if; could add return statement otherwise
function addLetterToUsedList(letter) {
	if (lettersUsed.includes(letter)) {
		console.log("already in list");
		//return;
	}
	else {
		lettersUsed.push(letter);
		console.log("added letter to list: " + lettersUsed);
	}
}

function iterateAlphabet()
	{
	   var alphabet = "abcdefghijklmnopqrstuvwxyz";
	   for(var i = 0; i < alphabet.length; i++)
	   {
	      var nextChar = alphabet.charAt(i);
	      alert(nextChar);
	   }
	}


// iterateAlphabet();