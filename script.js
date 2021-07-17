// Create a game where a player must correctly guess secret words to win.
// There is 1 secret word for each guess, and
// the computer randomly chooses that secret word
// from a set of 3 words: "banana", "chisel" and "faucet".
// To win the game the player must guess correctly twice in total,
// e.g. the player still wins if she guesses wrongly 1 or more times between her 2 correct guesses.
// For each guess, output all information such as
// the guessed word, the secret word, and how many correct guesses the player still needs until she wins.

// Secret Word Twice in a Row

// Secret Word X in a Row
// Update Secret Word such that the number of times
// the player needs to guess correctly in a row changes between rounds.
// We define "round" as all gameplay until a player wins.
// The number of times the player needs to guess correctly is a number from 2 to 4,
// randomly chosen at the start of the round.
// When the player wins, the computer updates the number of times
// the player needs to guess correctly in a row for the upcoming round.

// initialise correct guess count
var correctGuesses = 0;

// randomise secret word
function secretWord() {
  var randomiser = Math.floor(Math.random() * 3);
  var word = ["banana", "chisel", "faucet"];
  return word[randomiser];
}

var main = function (input) {
  // if correct guesses is reset
  if (correctGuesses == 0) {
    // randomise how many times to guess right to win
    var inARow = Math.floor(Math.random() * 4) + 1;
  }
  // a var to contain the secret word
  var secret = secretWord();
  var myOutputValue = `Your guess was: ${input} <br>Secret words was: ${secret} <br> Correct guesses: ${+correctGuesses}`;
  // if input is not the same as the secret word
  if (input != secret) {
    // correct guesses resets
    correctGuesses = 0;
    myOutputValue = `Your guess was wrong. <br><br>Your guess was: ${input} <br>Secret words was: ${secret} <br> Number of right guesses to win reset.`;
  }
  // if input is the same as the secret word
  if (input == secret) {
    // +1 to correct guess
    correctGuesses += 1;
    myOutputValue = `Your guess was right! <br><br>Your guess was: ${input} <br>Secret words was: ${secret} <br> Number of right guesses to win: ${
      +inARow - +correctGuesses
    }`;
    // if correct guess count same as randomised
    if (correctGuesses == inARow) {
      // player wins
      return myOutputValue + "<br>You won!";
    }
  }

  return myOutputValue;
};
