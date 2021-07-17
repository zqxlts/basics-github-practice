// Create a game where a player must correctly guess secret words to win.
// There is 1 secret word for each guess, and
// the computer randomly chooses that secret word
// from a set of 3 words: "banana", "chisel" and "faucet".
// To win the game the player must guess correctly twice in total,
// e.g. the player still wins if she guesses wrongly 1 or more times between her 2 correct guesses.
// For each guess, output all information such as
// the guessed word, the secret word, and how many correct guesses the player still needs until she wins.

var correctGuesses = 0;

function secretWord() {
  var randomiser = Math.floor(Math.random() * 3);
  var word = ["banana", "chisel", "faucet"];
  return word[randomiser];
}

var main = function (input) {
  var secret = secretWord();
  var myOutputValue = `Your guess was: ${input} <br>Secret words was: ${secret} <br> Correct guesses: ${correctGuesses}`;
  if (input != secret) {
    correctGuesses = 0;
    myOutputValue = `Your guess was wrong. <br><br>Your guess was: ${input} <br>Secret words was: ${secret} <br> Correct guesses: ${correctGuesses}`;
  }
  if (input == secret) {
    correctGuesses += 1;
    myOutputValue = `Your guess was right! <br><br>Your guess was: ${input} <br>Secret words was: ${secret} <br> Correct guesses: ${correctGuesses}`;
    if (correctGuesses == 2) {
      return myOutputValue + "<br>You won!";
    }
  }

  return myOutputValue;
};
