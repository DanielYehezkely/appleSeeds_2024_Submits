export default class Menu {

  constructor() {
    this.startBtn = document.getElementById('start-game-btn');
    this.targetScoreInput = document.getElementById('target-score-input');
    this.menuPage = document.getElementById('menu-page');
    this.gamePage = document.getElementById('game-page');
    this.targetScore = 0; 
  }

  startGame() {
    this.startBtn.addEventListener('click', () => {
      this.targetScore = parseInt(this.targetScoreInput.value);
      this.menuPage.style.display = 'none';
      this.gamePage.classList.remove('hide');
      console.log('Target Score:', this.targetScore);
    });
  }
}