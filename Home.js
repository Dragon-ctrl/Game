const choices = [
    {
        name: 'rock',
        beats: 'sissors'
    },
    {
        name: 'paper',
        beats: 'rock'
    },
    {
        name: 'sissors',
        beats: 'paper'
    }
];

let playerScore = 0;
let botScore = 0;

function playerPlay(playerChoice) {
    const botChoice = getRandomChoice();
    const result = getResult(playerChoice, botChoice);
    updateScore(result);
    updateUI(playerChoice, botChoice, result);
}

function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(playerChoice, botChoice) {
    if (playerChoice === botChoice.name) {
        return 'draw';
    } else if (botChoice.beats === playerChoice) {
        return 'lose';
    } else {
        return 'win';
    }
}

function updateScore(result) {
    if (result === 'win') {
        playerScore += 1;
    } else if (result === 'lose') {
        botScore += 1;
    }
}

function updateUI(playerChoice, botChoice, result) {
    const playerChoiceElement = document.querySelectorAll('.player-choice img')[choices.findIndex(choice => choice.name === playerChoice)];
    const botChoiceElement = document.querySelectorAll('.bot-choice img')[choices.findIndex(choice => choice.name === botChoice.name)];
    const resultElement = document.querySelector('#result');
    const playerScoreElement = document.querySelector('#player-score');
    const botScoreElement = document.querySelector('#bot-score');

    playerChoiceElement.style.boxShadow = '0 0 0 4px #4caf50';
    botChoiceElement.style.boxShadow = '0 0 0 4px #f44336';

    if (result === 'win') {
        resultElement.textContent = 'You win!';
    } else if (result === 'lose') {
        resultElement.textContent = 'You lose!';
    } else {
        resultElement.textContent = 'Draw!';
    }

    playerScoreElement.textContent = playerScore;
    botScoreElement.textContent = botScore;
}

function resetGame() {
    playerScore = 0;
    botScore = 0;
    const playerChoiceElements = document.querySelectorAll('.player-choice img');
    const botChoiceElements = document.querySelectorAll('.bot-choice img');
    const resultElement = document.querySelector('#result');
    const playerScoreElement = document.querySelector('#player-score');
    const botScoreElement = document.querySelector('#bot-score');

    playerChoiceElements.forEach(img => img.style.boxShadow = '');
    botChoiceElements.forEach(img => img.style.boxShadow = '');
    resultElement.textContent = '';
    playerScoreElement.textContent = playerScore;
    botScoreElement.textContent = botScore;
}

function toggleMode() {
    const body = document.querySelector('body');
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
}
