import { View, StyleSheet, TouchableWithoutFeedback } from "react-native"
import { useContext, useEffect, useState } from "react"
import { GameContext } from "../game-controller/GameController.js"

import colorController from "../../classes/colors/CollorController.js"
import sequencer from "../../classes/sequencer/Sequencer.js"
import audioMixer from "../../classes/audio/AudioMixer.js"

const GameButton = ({note}) => {
    const gameContext = useContext(GameContext)
    const [isPressed, setIsPressed] = useState(false)

    useEffect(()=>{
        if(isPressed)console.log('Rerender press color.')
        else console.log('Rerender inactive color.')
    },[isPressed])

    useEffect(()=>{
        if(gameContext?.playbackNote?.note === note) {
            console.log(`Active playback note ${note}`)
            handlePlayback()
        }
    },[gameContext.playbackNote?.index])

    function handlePressStart(){
        if(gameContext.canPress){
            audioMixer.playSound('testClick1')
            setIsPressed(true)
        }
    }

    function handlePressEnd(){
        setIsPressed(false)
    }

    async function handlePlayback(){
        setIsPressed(true)
        audioMixer.playSound('testClick1')
        setTimeout(() => {
            setIsPressed(false)
            setTimeout(()=>{
                if(sequencer.playbackQueue.length > 0){
                    //setPlaybackNote(sequencer.popPlaybackQueue())
                    gameContext.setPlaybackNote(sequencer.popPlaybackQueue())
                } else {
                    gameContext.setIsPlayerTurn(true)
                }
            }, 400)
        }, 400);
    }

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