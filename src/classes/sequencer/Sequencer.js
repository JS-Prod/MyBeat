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
        this.playerSequence.length = 0
    }

    playerInput(input){
        this.playerSequence.push(input)

        let isFinal = false
        if(this.playerSequence.length === this.currentSequence.length){
            isFinal = true
        }

        const sequenceIndex = this.playerSequence.length - 1
        const inverseIndex = this.currentSequence.length - this.playerSequence.length

        if(this.currentSequence[inverseIndex] === this.playerSequence[sequenceIndex]) return {isCorrect:true, isFinal: isFinal}
        else return {isCorrect:false, isFinal: isFinal}
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