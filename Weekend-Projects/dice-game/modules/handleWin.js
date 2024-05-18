export default class Winner {
    constructor(menu, audioHandler) {
        this.menu = menu;
        this.audioHandler = audioHandler;
    }

    checkWinner(currentPlayerIndex) {
        const currentPlayer = this.menu.gameWorld.players[currentPlayerIndex];
        const totalScoreElement = document.getElementById(`player${currentPlayer.id}-score`);
        const targetScore = this.menu.targetScore;

        const totalScore = parseInt(totalScoreElement.textContent, 10);
        if (totalScore >= targetScore) {
            this.showWinner(currentPlayer);
            return true;
        }
        return false;
    }

    showWinner(player) {
        const gamePage = document.getElementById('game-page');
        const container = document.getElementById('game-container');
        const winner = document.createElement('div');
        container.style.display = 'none';
        winner.classList.add('winner');
        winner.textContent = `Player ${player.id} is the winner!` + '\n' + 'Returning to menu in 5 seconds.';
        gamePage.appendChild(winner);
        this.audioHandler.playWinnerSound();
        let secondsLeft = 5;
        const countdownInterval = setInterval(() => {
            secondsLeft--;
            if (secondsLeft > 0) {
                winner.textContent = `Player ${player.id} is the winner!` + '\n' + `Returning to menu in ${secondsLeft} seconds.`;
            } else {
                clearInterval(countdownInterval);
                location.reload();
            }
        }, 1000);
    }
}