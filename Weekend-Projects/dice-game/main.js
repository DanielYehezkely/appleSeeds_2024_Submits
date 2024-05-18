import Menu from "./modules/menu.js";
import Game from "./modules/game.js";

const menu = new Menu();
menu.startGame();

const game = new Game();
game.restartGame();
