import Menu from "./menu.js";
import AudioHandler from "./audioHandle.js";

export default class Game {
  constructor() {
    this.menu = new Menu();
    this.audioHandler = new AudioHandler();
    this.currentPlayerIndex = 0;
    this.startGame();
  }

  startGame() {
    this.menu.startGameClick(() => {
      this.restartGame();
      this.rollDice();
      this.hold();
    });
  }

  restartGame() {
    const newGameBtn = document.getElementById('new-game-btn');
    newGameBtn.addEventListener('click', () => {
      location.reload();
    });

  }

  rollDice() {
    const rollDiceBtn = document.getElementById('roll-dice-btn');
    rollDiceBtn.addEventListener('click', () => {
      this.audioHandler.playDiceSound();
      const [dice1Value, dice2Value] = this.menu.gameWorld.diceAndButtons.rollDices();
      this.updateCurrentScore(dice1Value + dice2Value);
    });

  }

  updateCurrentScore(diceSum) {
    const currentPlayer = this.menu.gameWorld.players[this.currentPlayerIndex];
    const currentScoreElement = document.getElementById(`current-score-${currentPlayer.id}`);
    const currentScore = parseInt(currentScoreElement.textContent, 10);
    currentPlayer.updateCurrentScoreUI(currentScore + diceSum);
  }

  hold() {

    const holdBtn = document.getElementById('hold-btn');
    holdBtn.addEventListener('click', () => {
      const currentPlayer = this.menu.gameWorld.players[this.currentPlayerIndex];
      const currentScoreElement = document.getElementById(`current-score-${currentPlayer.id}`);
      const totalScoreElement = document.getElementById(`player${currentPlayer.id}-score`);
      const currentScore = parseInt(currentScoreElement.textContent, 10);
      const totalScore = parseInt(totalScoreElement.textContent, 10);

      totalScoreElement.textContent = (totalScore + currentScore).toString();
      currentScoreElement.textContent = '0';

      this.checkWinner();

      currentPlayer.container.classList.remove('current-player');
      this.currentPlayerIndex = (this.currentPlayerIndex + 1) % 2;
      const nextPlayer = this.menu.gameWorld.players[this.currentPlayerIndex];
      nextPlayer.container.classList.add('current-player');

    });
  }

  checkWinner() {
    const currentPlayer = this.menu.gameWorld.players[this.currentPlayerIndex];
    const totalScoreElement = document.getElementById(`player${currentPlayer.id}-score`);
    const targetScore = this.menu.targetScore;

    const totalScore = parseInt(totalScoreElement.textContent, 10);
    if (totalScore >= targetScore) {
      this.showWinner(currentPlayer);
    }
  }

  showWinner(player) {
    const gamePage = document.getElementById('game-page');
    const container = document.getElementById('game-container');
    const winner = document.createElement('div');
    container.style.display = 'none';
    winner.classList.add('winner');
    winner.textContent = `Player ${player.id} is the winner !` + '\n' + 'Returning to menu in 5 seconds.';
    gamePage.appendChild(winner);
    this.audioHandler.playWinnerSound();
    let secondsLeft = 5;
    const countdownInterval = setInterval(() => {
      secondsLeft--;
      if (secondsLeft > 0) {
        winner.textContent = `Player ${player.id} is the winner !` + '\n' + `Returning to menu in ${secondsLeft} seconds.`;
      } else {
        clearInterval(countdownInterval);
        location.reload();
      }
    }, 1000);
  }
}