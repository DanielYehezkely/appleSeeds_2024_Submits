export default class DiceAndButtons {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('dices-and-btns');
    this.createButtons();
    this.createDices();
  }
  createButtons() {
    this.newGameBtn = this.createButton('new-game-btn', 'NEW GAME', 'fa-solid fa-rotate-right');
    this.rollDiceBtn = this.createButton('roll-dice-btn', 'ROLL DICE', 'fa-solid fa-dice fa-beat');
    this.holdBtn = this.createButton('hold-btn', 'HOLD', 'fa fa-hand-paper');

    this.element.append(this.newGameBtn, this.rollDiceBtn, this.holdBtn);
  }

  createButton(id, text, iconClass) {
    const button = document.createElement('button');
    button.id = id;
    button.classList.add('btn');

    const icon = document.createElement('i');
    icon.className = iconClass;

    button.append(icon);
    button.append(` ${text}`);

    return button;
  }

  createDices() {
    this.dice1 = this.createDice('./assets/dice-1.png');
    this.dice2 = this.createDice('./assets/dice-1.png');

    this.element.append(this.dice1, this.dice2);
  }

  createDice(src) {
    const dice = document.createElement('img');
    dice.classList.add('dice');
    dice.src = src;
    dice.alt = 'Dice';
    return dice;
  }

  rollDices() {
    const dice1Value = Math.floor(Math.random() * 6) + 1;
    const dice2Value = Math.floor(Math.random() * 6) + 1;

    this.dice1.src = `./assets/dice-${dice1Value}.png`;
    this.dice2.src = `./assets/dice-${dice2Value}.png`;

    return [dice1Value, dice2Value];
  }
}