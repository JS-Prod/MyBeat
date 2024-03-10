import { View, StyleSheet, TouchableWithoutFeedback } from "react-native"
import { useContext, useEffect, useState } from "react"
import { PlaybackContext, PlaybackIndexContext } from "../../../App.js"
import { GameContext } from "../game-controller/GameController.js"

import colorController from "../../classes/colors/CollorController.js"
import sequencer from "../../classes/sequencer/Sequencer.js"

import audioMixer from "../../classes/audio/AudioMixer.js"

const GameButton = ({setPlaybackNote, index, note}) => {
    const [isPressed, setIsPressed] = useState(false)
    const playbackContext = useContext(PlaybackContext)
    const playbackIndex = useContext(PlaybackIndexContext)
    const gameContext = useContext(GameContext)


    function handlePressStart(){
        if(gameContext.canPress){
            audioMixer.playSound('testClick1')
            setIsPressed(true)
            gameContext.setScore(prev => prev + 10)
            gameContext.setTestString('Hello World.')
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
                    const nextNote = sequencer.playbackQueue.pop()
                    setPlaybackNote({note: nextNote, index: sequencer.playbackQueue.length})
                } else {
                    gameContext.setIsPlayerTurn(true)
                }
            }, 400)
        }, 400);
    }

    useEffect(()=>{
    },[isPressed])

    useEffect(()=>{
        if(playbackContext === note){handlePlayback()}
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