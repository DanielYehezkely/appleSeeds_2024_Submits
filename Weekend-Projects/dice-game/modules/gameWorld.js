import DiceAndButtons from "./diceAndBtns.js";
import Player from "./player.js";

export default class GameWorld {
    constructor() {
        this.diceAndButtons = new DiceAndButtons();
        this.players = [];
    }

    buildGameWorld() {
        const gameContainer = document.getElementById('game-container');
        gameContainer.appendChild(this.diceAndButtons.element);

        const player1 = new Player(1, 'PLAYER 1');
        player1.container.classList.add('current-player')
        const player2 = new Player(2, 'PLAYER 2');

        this.players.push(player1, player2);

        gameContainer.appendChild(player1.container);
        gameContainer.appendChild(player2.container);
    }
}