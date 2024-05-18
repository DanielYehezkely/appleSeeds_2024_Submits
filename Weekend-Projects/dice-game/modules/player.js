export default class Player {
  constructor(id, name) {
    this.id = id;
    this.container = document.createElement('section');
    this.container.id = `player-${id}-container`;
    this.container.classList.add('player-container');

    this.createScoreBox(id, name);
    this.createCurrentBox(id);
  }

  createScoreBox(id, name) {
    this.scoreBox = document.createElement('div');
    this.scoreBox.id = `player${id}-score-box`;
    this.scoreBox.classList.add('player-score-box');

    this.nameElement = document.createElement('h1');
    this.nameElement.id = `player${id}-name`;
    this.nameElement.classList.add('player-name');
    this.nameElement.textContent = name;

    this.scoreElement = document.createElement('div');
    this.scoreElement.id = `player${id}-score`;
    this.scoreElement.classList.add('player-score');
    this.scoreElement.textContent = '0';

    this.scoreBox.appendChild(this.nameElement);
    this.scoreBox.appendChild(this.scoreElement);
    this.container.appendChild(this.scoreBox);
  }

  createCurrentBox(id) {
    this.current = document.createElement('div');
    this.current.id = `player${id}-current`;
    this.current.classList.add('player-current-box');

    this.currentHeadline = document.createElement('div');
    this.currentHeadline.classList.add('current-headline');
    this.currentHeadline.textContent = 'CURRENT';

    this.currentScore = document.createElement('div');
    this.currentScore.id = `current-score-${id}`;
    this.currentScore.classList.add('current-score');
    this.currentScore.textContent = '0';

    this.current.appendChild(this.currentHeadline);
    this.current.appendChild(this.currentScore);
    this.container.appendChild(this.current);
  }

  updateCurrentScoreUI(newScore) {
    const currentScoreElement = document.getElementById(`current-score-${this.id}`);
    currentScoreElement.textContent = newScore.toString();
  }

  updateScore(score) {
    this.scoreElement.textContent = score.toString();
  }
}