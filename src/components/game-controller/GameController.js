import React, { useState, useEffect, useRef, useContext } from "react"
import { LeaderboardContext } from "./LeaderboardController"
import { AppContext } from "./AppController"
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
    const [roundsCompleted, setRoundsCompleted] = useState(0)

    const timeoutRef = useRef(null)

    const leaderboardContext = useContext(LeaderboardContext)
    const appContext = useContext(AppContext)

    function addTime(){
        setSeconds(prev => prev + 1)
    }

    function initNewGame(){
        setCanPress(false)
        sequencer.clearSequence()
        keyController.selectRandomKey()
        setScore(0)
        setRoundsCompleted(0)
        setPlaybackNote(null)
        startRound()
    }

    function startRound(){
        setIsPlayerTurn(false)
        setIsCountdown(false)
        setDisplayMessage('LISTEN')
        setShowDisplayMessage(true)
        timeoutRef.current = setTimeout(()=>{
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
        setRoundsCompleted(prev => prev +1)
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(()=>{
            setDisplayMessage('NEXT ROUND')
            timeoutRef.current = setTimeout(()=>{
                startRound()
            },pauseMS)
        },pauseMS)
    }

    function endGame(){
        setIsCountdown(false)
        setCanPress(false)
        clearTimeout(timeoutRef.current)    
        setDisplayMessage('GAME OVER')
        setShowDisplayMessage(true)
        if(score > 0){
            for(let i = 0; i < leaderboardContext.userScores.length; i++){
                console.log('I:',i)
                if(score > leaderboardContext.userScores[i].score || leaderboardContext.userScores.length < 5){
                    setDisplayMessage('NEW HIGHSCORE')
                    leaderboardContext.PostHighscore(appContext.username, score, roundsCompleted)
                    break
                } 
            }
            if(leaderboardContext.userScores.length === 0){
                setDisplayMessage('NEW HIGHSCORE')
                leaderboardContext.PostHighscore(appContext.username, score, roundsCompleted)
            }
        }
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
            timeoutRef.current = setTimeout(()=>{
                setDisplayMessage('READY')
                timeoutRef.current = setTimeout(()=>{
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
            setIsPlayerTurn(true)
        } 
    },[playbackNote?.index])

    return(
    <GameContext.Provider value={{
        score: score, 
        setScore: setScore,
        roundsCompleted: roundsCompleted,
        setRoundsCompleted: setRoundsCompleted,
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