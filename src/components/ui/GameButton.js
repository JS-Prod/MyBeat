import { View, StyleSheet, TouchableWithoutFeedback } from "react-native"
import colorController from "../../classes/colors/CollorController.js"
import audioMixer from "../../classes/audio/AudioMixer.js"
import keyController from "../../classes/audio/KeyController.js"
import { useContext, useEffect, useState } from "react"
import timer from "../../classes/timer/Timer.js"
import sequencer from "../../classes/sequencer/Sequencer.js"
import { PlaybackContext, PlaybackIndexContext } from "../../../App.js"


const GameButton = ({setPlaybackNote, index, note}) => {
    const [isPressed, setIsPressed] = useState(false)
    const playbackContext = useContext(PlaybackContext)
    const playbackIndex = useContext(PlaybackIndexContext)

    function handlePressStart(){
        setIsPressed(true)
        console.log('Playing Sound: ' + keyController.getNoteAtChromaticIndex(index))
        audioMixer.playSound('testClick1')
    }

    function handlePressEnd(){
        setIsPressed(false)
    }

    async function handlePlayback(){
        console.log('Handling Remote Playback')
        setIsPressed(true)
        audioMixer.playSound('testClick1')
        setTimeout(() => {
            setIsPressed(false)
            console.log('Remote Playback Ended')
            console.log('Sequencer Queue: ' + sequencer.playbackQueue)
            if(sequencer.playbackQueue.length > 0){
                const nextNote = sequencer.playbackQueue.pop()
                console.log('Next Note: ' + nextNote)
                setPlaybackNote({note: nextNote, index: sequencer.playbackQueue.length})
            }
        }, 500);
    }

    useEffect(()=>{
        console.log('Pressed State Change.')
    },[isPressed])

    useEffect(()=>{
        if(playbackContext === note){
            console.log('BUTTON MATCH FOUND')
            handlePlayback()
        }
    },[playbackIndex])

    return(
        <TouchableWithoutFeedback onPressIn={handlePressStart} onPressOut={handlePressEnd}>
            <View style={getStyles(isPressed).gameButton} />
        </TouchableWithoutFeedback>
    )
}

const getStyles = (isPressed) => {
    return StyleSheet.create({
        gameButton:{
            height: 100,
            width: 100, 
            backgroundColor: isPressed ? colorController.sixth : colorController.fourth,
            margin: 10
        }
    })
}

export default GameButton