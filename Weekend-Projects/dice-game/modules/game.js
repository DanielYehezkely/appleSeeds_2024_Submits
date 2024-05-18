import Menu from "./menu.js";
import AudioHandler from "./audioHandle.js";
import Winner from "./handleWin.js";

export default class Game {
  constructor() {
    this.menu = new Menu();
    this.audioHandler = new AudioHandler();
    this.winner = new Winner(this.menu, this.audioHandler);
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

      if (!this.winner.checkWinner(this.currentPlayerIndex)) {
        currentPlayer.container.classList.remove('current-player');
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % 2;
        const nextPlayer = this.menu.gameWorld.players[this.currentPlayerIndex];
        nextPlayer.container.classList.add('current-player');
      }
    });
  }
}