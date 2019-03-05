// !-- 1. [Watch the demo](https://youtu.be/qTc45Lox97g).

// both the computer and the player need to have their own Game sessionStorage.and
// The computer randomly selects a letter and the play has chances to select.

var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];

var computerGuess = letters[Math.floor(Math.random() * letters.length)];

console.log(computerGuess);

// Game starts with the user "releasing the key."

document.onkeyup = function(event) {
  var keyPress = event.key;
  var uguess = keyPress.toLowerCase();

  console.log(uguess);
  var lettersGuessed = document.getElementById("PlayerGuessInput");

  addLetter(keyPress);
};

// function addLetter (keyPress) {

//     var repeatGuess = lettersGuessed.some(function(item){
//         return item === keyPress;
//     });

// need a function to pull the user's PlayerGuessInput

// logic for the rules and reset.
