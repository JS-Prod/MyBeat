import { View, StyleSheet, TouchableWithoutFeedback } from "react-native"
import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../game-controller/GameController.js"
import { AppContext } from "../../game-controller/AppController.js"
import * as Haptics from 'expo-haptics'

import sequencer from "../../../classes/sequencer/Sequencer.js"
import audioMixer from "../../../classes/audio/AudioMixer.js"

const GameButton = ({note}) => {
    const gameContext = useContext(GameContext)
    const appContext = useContext(AppContext)

    const [isPressed, setIsPressed] = useState(false)

    useEffect(()=>{
        if(gameContext?.playbackNote?.note === note) {
            console.log(`Active playback note ${note}`)
            handlePlayback()
        }
    },[gameContext.playbackNote?.index])

    function handlePressStart(){
        if(gameContext.canPress){
            setIsPressed(true)
            const validatorObj = sequencer.playerInput(note)
            if(validatorObj.isCorrect){
                audioMixer.playSound(note)
                gameContext.setScore(prev => prev + 10)
                gameContext.addTime()
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
                if(validatorObj.isFinal){
                    gameContext.roundSuccess()
                }
            } else {
                audioMixer.playSound('fail')
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
                gameContext.endGame()
            }
        }
    }

    function handlePressEnd(){
        setIsPressed(false)
    }

    async function handlePlayback(){
        setIsPressed(true)
        audioMixer.playSound(note)
        setTimeout(() => {
            setIsPressed(false)
            setTimeout(()=>{
                gameContext.setPlaybackNote(sequencer.popPlaybackQueue())
            },(gameContext.pauseMS/4))
        },(gameContext.pauseMS/4)*3)
    }

    return(
        <TouchableWithoutFeedback onPressIn={handlePressStart} onPressOut={handlePressEnd}>
            <View style={getStyles(isPressed, appContext).gameButton} />
        </TouchableWithoutFeedback>
    )
}

const getStyles = (isPressed, appContext) => {
    return StyleSheet.create({
        gameButton:{
            height: 100,
            width: 100, 
            backgroundColor: isPressed ? appContext.currentPalette.sixth : appContext.currentPalette.fourth,
            margin: 10,
            borderRadius: 7,
        }
    })
}

export default GameButton