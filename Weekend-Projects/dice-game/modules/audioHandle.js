export default class AudioHandler {
    constructor() {
        this.audio = document.createElement('audio');
        this.audio.id = 'background-music';
        this.audio.src = './audio/Game-Main-Theme.mp3';
        this.audio.preload = 'auto';
        this.audio.volume = 0.2;
        document.body.appendChild(this.audio);
    }

    play() {
        this.audio.play();
    }

    // pause() {
    //     this.audio.pause();
    // }

    // stop() {
    //     this.pause();
    //     this.audio.currentTime = 0;
    // }

    // setVolume(volume) {
    //     this.audio.volume = volume;
    // }

}