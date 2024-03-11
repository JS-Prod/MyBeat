import React, { useState, useEffect } from "react"

export const GameContext = React.createContext()

const GameController = ({children}) => {
    const [seconds, setSeconds] = useState(5)
    const [isCountdown, setIsCountdown] = useState(false)
    const [score, setScore] = useState(0)
    const [isGameActive, setIsGameActive] = useState(false)
    const [isPlayerTurn, setIsPlayerTurn] = useState(false)
    const [canPress, setCanPress] = useState(true)
    const [playbackNote, setPlaybackNote] = useState(null)

    function addTime(){
        setSeconds(prev => prev + 1)
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
            if(seconds <= 0){
                setIsCountdown(false)
                setSeconds('Game Over')
                console.log('GAME OVER')
            }
        }
    },[isCountdown, seconds])

    useEffect(()=>{
        console.log('Seconds:', seconds)
    },[seconds])

    useEffect(()=>{
        console.log('Playback INDEX change.', JSON.stringify(playbackNote,0,2))
    },[playbackNote?.index])

    useEffect(()=>{
        console.log('Score Changed To: ' + score)
    }, [score])

    useEffect(()=>{
        if(isGameActive) console.log('Game started.')
        else console.log('Game ended.')
    },[isGameActive])

    useEffect(()=>{
        if(isPlayerTurn) console.log('Player turn started.')
        else console.log('Player turn ended.')
    },[isPlayerTurn])

    useEffect(()=>{
        if(canPress) console.log('Pressing button enabled.')
        else console.log('Pressing buttons disabled.')
    },[canPress])

    return(
    <GameContext.Provider value={{
        score: score, 
        setScore: setScore,
        isGameActive: isGameActive,
        setIsGameActive: setIsGameActive,
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
        addTime: addTime
    }}>
        {children}
    </GameContext.Provider>
    )
}



export default GameController