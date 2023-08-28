class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        return this.guessNum = Math.round((this.min + (this.max - this.min) / 2))
    }

    lower() {
        this.max = this.guessNum
    }

    greater() {
        this.min = this.guessNum
    }
}

module.exports = GuessingGame;
