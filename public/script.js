let attempts = 0;
const minNumber = 1;
const maxNumber = 100;
let secretNumber = generateRandomNumber();

function generateRandomNumber() {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

function playGame() {
  var guessInput = document.getElementById("guessInput");
  var guess = guessInput.value;

  if (isValidGuess(guess)) {
    var guessNumber = parseInt(guess);

    if (guessNumber === secretNumber) {
      alert(
        "Congratulations! You guessed the number in " + attempts + " attempts"
      );
      saveGameResult("Player won in " + attempts + " attempts.");

      attempts = 0;
      secretNumber = generateRandomNumber();
      displayResult("New number generated. Start guessing!");
    } else {
      attempts++;
      if (guessNumber < secretNumber) {
        displayResult("Try higher");
      } else {
        displayResult("Try lower");
      }
    }
  } else {
    displayResult("Please enter a valid number within the specified range.");
  }

  guessInput.value = "";
}

function isValidGuess(guess) {
  return !isNaN(guess) && guess >= 1 && guess <= 100;
}

function displayResult(message) {
  document.getElementById("result").innerHTML = message;
}

function saveGameResult(result) {
  $.ajax({
    type: "POST",
    url: "/saveGameResult",
    data: { result: result },
    success: function () {
      displayResult("Game result saved.");
    },
    error: function () {
      displayResult("Failed to save the result");
    },
  });
}
