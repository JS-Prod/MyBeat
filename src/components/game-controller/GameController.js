import React, { useState, useEffect } from "react"

import sequencer from "../../classes/sequencer/Sequencer"
import keyController from "../../classes/audio/KeyController"

export const GameContext = React.createContext()    

const GameController = ({children}) => {
    const [seconds, setSeconds] = useState(5)
    const [isCountdown, setIsCountdown] = useState(false)
    const [score, setScore] = useState(0)
    const [isPlayerTurn, setIsPlayerTurn] = useState(false)
    const [canPress, setCanPress] = useState(true)
    const [playbackNote, setPlaybackNote] = useState(null)
    const [displayMessage, setDisplayMessage] = useState('')
    const [showDisplayMessage, setShowDisplayMessage] = useState(false)

    function addTime(){
        setSeconds(prev => prev + 1)
    }

    function initNewGame(){
        sequencer.clearSequence()
        keyController.selectRandomKey()
        setScore(0)
        setPlaybackNote(null)
        startRound()
    }

    function startRound(){
        setDisplayMessage('LISTEN')
        setShowDisplayMessage(true)
        setCanPress(false)
        setIsCountdown(false)
        setIsPlayerTurn(false)
        setTimeout(()=>{
            console.log('Starting Playback Queue')
            sequencer.extendSequence()
            sequencer.initPlaybackQueue()
            setPlaybackNote(sequencer.popPlaybackQueue())
        },1000)
    }

    function roundSuccess(){
        setDisplayMessage('CORRECT')
        setShowDisplayMessage(true)
        setTimeout(()=>{
            setDisplayMessage('NEXT ROUND')
            setTimeout(()=>{
                startRound()
            },1000)
        },1000)
    }

    function endGame(){
        setIsCountdown(false)
        setSeconds(0)
        setCanPress(false)
        setDisplayMessage('GAME OVER')
        setShowDisplayMessage(true)
    }

    useEffect(()=>{
        let interval = null
        if(isCountdown){
            interval = setInterval(()=>{
                setSeconds(prev => prev - 1)
            }, 1000)
        }
        return () => {
            clearInterval(interval)
            if(seconds <= 0 && isCountdown){
                endGame()
            }
        }
    },[isCountdown, seconds])


    useEffect(()=>{
        if(isPlayerTurn) {
            setTimeout(()=>{
                setDisplayMessage('READY')
                setTimeout(()=>{
                    setDisplayMessage('GO')
                    setCanPress(true)
                    setTimeout(()=>{
                        setSeconds(5)
                        setShowDisplayMessage(false)
                        setIsCountdown(true)
                    },1000)
                },1000)
            },1000)
        } 
    },[isPlayerTurn])


    useEffect(()=>{
        if(playbackNote?.index <= 0){
            setIsPlayerTurn(true)
        } 
    },[playbackNote?.index])

    return(
    <GameContext.Provider value={{
        score: score, 
        setScore: setScore,
        canPress: canPress,
        setCanPress: setCanPress,
        isPlayerTurn: isPlayerTurn,
        setIsPlayerTurn: setIsPlayerTurn,
        isCountdown: isCountdown,
        setIsCountdown: setIsCountdown,
        playbackNote: playbackNote,
        setPlaybackNote: setPlaybackNote,
        seconds: seconds,
        setSeconds: setSeconds,
        addTime: addTime,
        displayMessage: displayMessage,
        setDisplayMessage: setDisplayMessage,
        showDisplayMessage: showDisplayMessage,
        setShowDisplayMessage: setShowDisplayMessage,
        initNewGame: initNewGame,
        startRound: startRound,
        endGame: endGame,
        roundSuccess: roundSuccess
    }}>
        {children}
    </GameContext.Provider>
    )
}



export default GameController