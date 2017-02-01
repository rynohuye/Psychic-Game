//User types letter, appears under Your Guesses so far

//IF WRONG
//letter remains on page if guess is wrong
//guesses left goes down one out of initally 9 if letter does not match
//if user guesses wrong 9 times, games resets, losses +1

//IF CORRECT
//if user selects the same letter, wins +1, game resets

//Letters available
var computerGuesses = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Start at zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//computer sees if letter matches what it selected
var computerGuess = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];

//user gets 9 guesses
var changeGuessesStatus = function() {
//guesses left
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var newLetterGuess = function() {
  this.letterToGuess = this.computerGuesses[Math.floor(Math.random() * this.computerGuesses.length)];
};
var guessesCountDown = function() {
//commas
  document.querySelector('#sofar').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// When reset is needed
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  newLetterGuess();
  changeGuessesStatus();
  guessesCountDown();
}

newLetterGuess();
changeGuessesStatus();


document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  changeGuessesStatus();
  guessesCountDown();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                reset();
            }
        }else if(guessesLeft == 0){
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            reset();
        }
};