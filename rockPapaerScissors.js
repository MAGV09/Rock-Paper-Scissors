'use strict';

// ========================================
// DOM ELEMENT SELECTIONS
// ========================================
const hero = document.querySelector('#hero');
const container = document.querySelector('#container');
const roundDetails = document.querySelector('.details');
const display = document.querySelector('#display');
const mainMenu = document.querySelector('#mainMenu');
const userChoiceImg = document.querySelector('.userChoiceImg');
const computerChoiceImg = document.querySelector('.computerChoiceImg');

// ========================================
// CREATE NEW DOM ELEMENTS
// ========================================
const score = document.createElement('div');
const button = document.createElement('button');
const roundCountEl = document.createElement('div');
const userImg = document.createElement('img');
const userDiv = document.createElement('div');
const computerImg = document.createElement('img');
const computerDiv = document.createElement('div');

// ========================================
// INITIAL DOM SETUP
// ========================================
// Setup user choice display
userDiv.textContent = 'Your choice';
userChoiceImg.appendChild(userImg);
userChoiceImg.appendChild(userDiv);

// Setup computer choice display
computerDiv.textContent = 'Computer choice';
computerChoiceImg.appendChild(computerImg);
computerChoiceImg.appendChild(computerDiv);

// Setup game elements
roundDetails.insertBefore(roundCountEl, display);
score.classList.add('round');
hero.appendChild(button);
button.textContent = 'play again';
button.classList.add('hide');
roundDetails.appendChild(score);

// ========================================
// EVENT LISTENERS
// ========================================
// Main menu click handler
mainMenu.addEventListener('click', () => {
  mainMenu.classList.toggle('hide');
  hero.classList.toggle('hide');
});

// Play again button handler
button.addEventListener('click', () => {
  container.classList.remove('hide');
  score.textContent = '';
  display.textContent = '';
  button.classList.add('hide');
  playGame();
});

// ========================================
// UTILITY FUNCTIONS
// ========================================
const getComuterChoice = function () {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  const computerChoice =
    randomNum === 1 ? 'rock' : randomNum === 2 ? 'paper' : 'scissors';
  return computerChoice;
};

function createImg(choice, shape) {
  let choiceType = choice === userChoiceImg ? userImg : computerImg;

  switch (shape) {
    case 'rock':
      choiceType.setAttribute(
        'src',
        'https://www.freeiconspng.com/thumbs/rock-png/big-rock-png-picture-16.jpg'
      );
      break;
    case 'paper':
      choiceType.setAttribute(
        'src',
        'https://www.shutterstock.com/image-vector/three-paper-sheets-cartoon-vector-260nw-547626136.jpg'
      );
      break;
    case 'scissors':
      choiceType.setAttribute(
        'src',
        'https://img.freepik.com/premium-photo/pair-scissors-with-black-handle-silver-handle_520665-14560.jpg?semt=ais_hybrid&w=740&q=80'
      );
      break;
  }
}

// ========================================
// MAIN GAME FUNCTION
// ========================================
function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  let roundCount = 0;
  display.textContent = `${humanScore} : ${computerScore}  `;
  roundCountEl.textContent = `Round ${roundCount}`;

  // Game button click handler
  container.addEventListener('click', (e) => {
    switch (e.target.id) {
      case 'rock':
        playRound(getComuterChoice(), 'rock');
        createImg(userChoiceImg, 'rock');
        break;
      case 'paper':
        playRound(getComuterChoice(), 'paper');
        createImg(userChoiceImg, 'paper');
        break;
      case 'scissors':
        playRound(getComuterChoice(), 'scissors');
        createImg(userChoiceImg, 'scissors');
        break;
    }
  });

  // ========================================
  // ROUND LOGIC FUNCTION
  // ========================================
  function playRound(computerChoice, humanChoice) {
    score.textContent = '';
    createImg(computerChoiceImg, computerChoice);

    // Determine round winner
    if (
      (computerChoice === 'rock' && humanChoice === 'scissors') ||
      (computerChoice === 'paper' && humanChoice === 'rock') ||
      (computerChoice === 'scissors' && humanChoice === 'paper')
    ) {
      computerScore++;
      score.textContent = `You Lost the round!`;
    } else if (computerChoice === humanChoice) {
      score.textContent = `Draw! `;
    } else {
      humanScore++;
      score.textContent = `You Won the round!`;
    }

    // Update display and round count
    display.textContent = `${humanScore} : ${computerScore}  `;
    roundCount++;
    roundCountEl.textContent = `Round ${roundCount}`;

    // Check if game is over (5 rounds)
    if (roundCount === 5) {
      container.classList.toggle('hide');
      button.classList.toggle('hide');

      // Display final game result
      if (computerScore > humanScore) {
        score.textContent = `you have lost to the cpu (${humanScore}-${computerScore}) `;
      } else if (computerScore < humanScore) {
        score.textContent = `You won (${humanScore}-${computerScore})`;
      } else {
        score.textContent = `Draw! (${humanScore}-${computerScore})`;
      }
    }
  }
}

// ========================================
// INITIALIZE GAME
// ========================================
playGame();
