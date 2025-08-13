'use strict';

const hero = document.querySelector('#hero');
const container = document.querySelector('#container');
const display = document.querySelector('#display');
const roundDetails = document.createElement('div');
const button = document.createElement('button');
hero.appendChild(button);
button.textContent = 'play again';
button.classList.add('hide');
hero.insertBefore(roundDetails, container);

hero.insertBefore(roundDetails, container);

const getComuterChoice = function () {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  const computerChoice =
    randomNum === 1 ? 'rock' : randomNum === 2 ? 'paper' : 'scissors';
  return computerChoice;
};

function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  let roundCount = 0;
  container.addEventListener('click', (e) => {
    switch (e.target.id) {
      case 'rock':
        playRound(getComuterChoice(), 'rock');
        break;
      case 'paper':
        playRound(getComuterChoice(), 'paper');

        break;
      case 'scissors':
        playRound(getComuterChoice(), 'scissors');

        break;
    }
  });

  function playRound(computerChoice, humanChoice) {
    roundDetails.textContent = '';

    if (
      (computerChoice === 'rock' && humanChoice === 'scissors') ||
      (computerChoice === 'paper' && humanChoice === 'rock') ||
      (computerChoice === 'scissors' && humanChoice === 'paper')
    ) {
      computerScore++;
      roundDetails.textContent = `You Lost the round! ${computerChoice} beats ${humanChoice}`;
    } else if (computerChoice === humanChoice) {
      roundDetails.textContent = `Draw! you both chose ${humanChoice}`;
    } else {
      humanScore++;

      roundDetails.textContent = `You Won the round!
       computer chose ${computerChoice} while you chose ${humanChoice} `;
    }
    display.textContent = `${humanScore} : ${computerScore}  `;
    roundCount++;
    if (roundCount === 5) {
      container.classList.toggle('hide');
      button.classList.toggle('hide');
      button.addEventListener('click', () => {
        container.classList.toggle('hide');
        roundDetails.textContent = '';
        display.textContent = '';
        button.classList.toggle('hide');

        playGame();
      });
      if (computerScore > humanScore) {
        roundDetails.textContent = `you have lost to the cpu (${humanScore}-${computerScore}) `;
      } else if (computerScore < humanScore) {
        roundDetails.textContent = `You won (${humanScore}-${computerScore})`;
      } else {
        roundDetails.textContent = `Draw! (${humanScore}-${computerScore})`;
      }
    }
  }
}
playGame();
