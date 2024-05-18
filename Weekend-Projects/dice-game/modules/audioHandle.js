export default class AudioHandler {
    constructor() {
        this.audio = document.createElement('audio');
        this.audio.id = 'background-music';
        this.audio.src = './audio/Game-Main-Theme.mp3';
        this.audio.preload = 'auto';
        this.audio.volume = 0.2;
        document.body.appendChild(this.audio);

        this.diceSound = document.createElement('audio');
        this.diceSound.id = 'dice-sound';
        this.diceSound.src = './audio/dice-142528.mp3';
        this.diceSound.preload = 'auto';
        document.body.appendChild(this.diceSound);
    }

    play() {
        this.audio.play();
    }

    playDiceSound() {
        this.diceSound.play();
    }
}