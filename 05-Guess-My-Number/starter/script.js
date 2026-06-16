'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number! 🎉';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber;
let score;
let highScore = 0;

const newGame = function (again = false) {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;

  if (again) {
    //Reset all the fields
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  }
};

newGame();

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  //When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number! 🎉');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //Guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  newGame(true);
});

//////////////////////
// Code Challenge #1

/*
Implement a game reset functionality, so that the player make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler ✅
2. In the handler function, restore initial values of the score and secretnumber variables ✅
3. Restore the initial condition of the message, number, score and guess input field ✅
4. Also restore the original background color (#222) and number width (15rem)✅
*/
