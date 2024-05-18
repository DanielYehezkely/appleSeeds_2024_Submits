
export default class Game {
    constructor() {
        this.newGameBtn = document.getElementById('new-game-btn');
        this.restartGame();
    }
    
    restartGame() {
        this.newGameBtn.addEventListener('click', () => {
            location.reload();
        })
    }
}