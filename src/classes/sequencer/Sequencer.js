import keyController from "../audio/KeyController"

class Sequencer {
    constructor(){
        this.currentSequence = []
        this.playbackQueue = []
        this.playerSequence = []
    }

    extendSequence(){
        const randomIndex = (Math.floor(Math.random() * keyController.currentKey.length) + 1) - 1
        this.currentSequence.unshift(keyController.currentKey[randomIndex])
    }

    playerInput(input){
        this.playerSequence.push(input)
        const sequenceIndex = this.playerSequence.length - 1
        if(this.currentSequence[sequenceIndex] === this.playerSequence[sequenceIndex]) return true
        else return false
    }

    clearSequence(){
        this.currentSequence.length = 0
        this.playbackQueue.length = 0
        this.playerSequence.length = 0
    }

    initPlaybackQueue(){
        this.playbackQueue = [...this.currentSequence]
    }

    popPlaybackQueue(){
        return {note: this.playbackQueue.pop(), index: this.playbackQueue.length}
    }
}

const sequencer = new Sequencer()

export default sequencer