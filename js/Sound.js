class Sounds {
    constructor(sound) {
        this.sound = sound
    }

    getSound() {
        return this.sound
    }

    stopSound() {
        return this.sound.pause
    }
}
let soundBG = "<audio autoplay>" +
    '<source src="sound/bg.mp3" type="audio/mpeg">' +
    '</audio>';