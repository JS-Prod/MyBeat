import keyController from "../audio/KeyController"
import GameScreen from "../../components/screens/GameScreen"

class Sequencer {
    constructor(){
        this.currentSequence = []
        this.playbackQueue = []
        this.playerSequence = []
    }
    extendSequence(){
        const randomIndex = (Math.floor(Math.random() * keyController.currentKey.length) + 1) - 1
        this.currentSequence.push(keyController.currentKey[randomIndex])
        this.startSequencePlayback()
    }

    playerInput(input){
        this.playerSequence.push(input)
        const sequenceIndex = this.playerSequence.length - 1
        if(this.currentSequence[sequenceIndex] === this.playerSequence[sequenceIndex]) return true
        else return false
    }

    clearSequence(){
        this.currentSequence.length = 0
        this.playerSequence.length = 0
    }

    async startSequencePlayback(){
        this.playbackQueue = [...this.currentSequence]
        console.log('Playback Queue: ' + this.playbackQueue)
        console.log('Starting Sequence Playback.')
    }
}

const sequencer = new Sequencer()

export default sequencer