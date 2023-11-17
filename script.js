'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'No number';
    displayMessage('No number');

    //When player wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct number');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;

    //When the guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Too high' : 'Too low';

      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');

      document.querySelector('.score').textContent = --score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high';
  //       document.querySelector('.score').textContent = --score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     //When the guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low';
  //       document.querySelector('.score').textContent = --score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  console.log('button clicked');
  //Reset score
  document.querySelector('.score').textContent = 20;

  //Reset message
  displayMessage('Start guessing...');

  //Reset background
  document.querySelector('body').style.backgroundColor = '#222';

  //Reset number width
  document.querySelector('.number').style.width = '15rem';

  //Reset number
  document.querySelector('.number').textContent = '?';

  //Reset guess input field
  document.querySelector('.guess').value = '';

  //Reset secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //Reset highscore
  document.querySelector('.highscore').textContent = 0;
});
