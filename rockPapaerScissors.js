'use strict';

let round = 0;
const getComuterChoice = function () {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  const computerChoice =
    randomNum === 1 ? 'rock' : randomNum === 2 ? 'paper' : 'scissors';
  return computerChoice;
};
getComuterChoice();

const getHumanChoice = function () {
  const humanChoice = prompt('Please Enter your Choice').toLowerCase();
  return humanChoice;
};

let computerSelection = getComuterChoice;
let humanSelection = getHumanChoice;

function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  const playRound = function (computerChoice, humanChoice) {
    if (
      (computerChoice === 'rock' && humanChoice === 'scissors') ||
      (computerChoice === 'paper' && humanChoice === 'rock') ||
      (computerChoice === 'scissors' && humanChoice === 'paper')
    ) {
      computerScore++;
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    } else {
      humanScore++;
      console.log(`You Won the round!`);
      console.log(
        `computer chose ${computerChoice} while you chose ${humanChoice}`
      );
    }
  };
  for (let i = 0; i < 5; i++) {
    playRound(computerSelection(), humanSelection());
  }
  if(computerScore> humanScore){
    console.log(`you have lost to the cpu (${humanScore} -${computerScore}) `);
  }
  else{
    console.log(`You won (${humanScore}-${computerScore})`);
  }
}
playGame();
