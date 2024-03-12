import React, { useState, useEffect, useRef } from "react"

import sequencer from "../../classes/sequencer/Sequencer"
import keyController from "../../classes/audio/KeyController"

export const GameContext = React.createContext()    

const GameController = ({children}) => {
    const countdownLength = 3
    const pauseMS = 800

    const [seconds, setSeconds] = useState(countdownLength)
    const [isCountdown, setIsCountdown] = useState(false)
    const [score, setScore] = useState(0)
    const [isPlayerTurn, setIsPlayerTurn] = useState(false)
    const [canPress, setCanPress] = useState(true)
    const [playbackNote, setPlaybackNote] = useState(null)
    const [displayMessage, setDisplayMessage] = useState('')
    const [showDisplayMessage, setShowDisplayMessage] = useState(false)

    const timeoutRef = useRef(null)


    function addTime(){
        setSeconds(prev => prev + 1)
    }

    function initNewGame(){
        sequencer.clearSequence()
        keyController.selectRandomKey()
        setScore(0)
        setCanPress(false)
        setPlaybackNote(null)
        startRound()
    }

    function startRound(){
        setIsPlayerTurn(false)
        setIsCountdown(false)
        setDisplayMessage('LISTEN')
        setShowDisplayMessage(true)
        setTimeout(()=>{
            sequencer.extendSequence()
            sequencer.initPlaybackQueue()
            setPlaybackNote(sequencer.popPlaybackQueue())
        },pauseMS)
    }

    function roundSuccess(){
        setIsCountdown(false)
        setCanPress(false)
        setDisplayMessage('CORRECT')
        setShowDisplayMessage(true)
        clearTimeout(timeoutRef.current)
        setTimeout(()=>{
            setDisplayMessage('NEXT ROUND')
            setTimeout(()=>{
                startRound()
            },pauseMS)
        },pauseMS)
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
            },pauseMS)
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
                    timeoutRef.current = setTimeout(()=>{
                        setSeconds(countdownLength)
                        setIsCountdown(true)
                        setShowDisplayMessage(false)
                    },pauseMS)
                },pauseMS)
            },pauseMS)
        }
    },[isPlayerTurn])


    useEffect(()=>{
        if(playbackNote?.index <= 0){
            console.log('Final note. Set to Player turn.')
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
        endGame: endGame,
        roundSuccess: roundSuccess,
        pauseMS: pauseMS
    }}>
        {children}
    </GameContext.Provider>
    )
}

export default GameController