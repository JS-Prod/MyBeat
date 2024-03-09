import { View, StyleSheet, TouchableWithoutFeedback } from "react-native"
import colorController from "../../classes/colors/CollorController.js"
import audioMixer from "../../classes/audio/AudioMixer.js"
import keyController from "../../classes/audio/KeyController.js"
import { useEffect, useState } from "react"
import timer from "../../classes/timer/Timer.js"

const GameButton = ({index}) => {
    const [isPressed, setIsPressed] = useState(false)

    function handlePressStart(){
        setIsPressed(true)
        console.log('Playing Sound: ' + keyController.getNoteAtChromaticIndex(index))
        audioMixer.playSound('testClick1')
        timer.startTimer()
    }

    function handlePressEnd(){
        setIsPressed(false)
        timer.stopTimer()
    }

    useEffect(()=>{
        console.log('Pressed State Change.')
    },[isPressed])

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