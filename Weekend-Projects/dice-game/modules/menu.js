import { ErrorMessage } from "./errorMessage.js";
import AudioHandler from "./audioHandle.js";

export default class Menu {
  constructor() {
    this.startBtn = document.getElementById('start-game-btn');
    this.targetScoreInput = document.getElementById('target-score-input');
    this.menuPage = document.getElementById('menu-page');
    this.gamePage = document.getElementById('game-page');
    this.targetScore = 0;
    this.error = new ErrorMessage();
    this.audioHandler = new AudioHandler();
  }

  startGame() {
    this.startBtn.addEventListener('click', () => {
      const targetScoreValue = this.targetScoreInput.valueAsNumber;

      if (isNaN(targetScoreValue) || targetScoreValue < 50 || targetScoreValue > 999) {
        this.error.showError();
      } else {
        this.targetScore = targetScoreValue;
        this.menuPage.style.display = 'none';
        this.gamePage.classList.remove('hide');
        console.log('Target Score:', this.targetScore);

        this.audioHandler.play();
      }
    });
  }
}