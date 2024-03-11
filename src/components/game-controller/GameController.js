import React, { useState, useEffect } from "react"

export const GameContext = React.createContext()

const GameController = ({children}) => {
    const [seconds, setSeconds] = useState(0)
    const [score, setScore] = useState(0)
    const [isGameActive, setIsGameActive] = useState(false)
    const [isPlayerTurn, setIsPlayerTurn] = useState(false)
    const [canPress, setCanPress] = useState(true)

    const [playbackNote, setPlaybackNote] = useState(null)

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

    useEffect(()=>{
        console.log('Seconds remaining: ' + seconds)
        if(seconds <= 0) console.log('GAME OVER.')
    },[seconds])

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
        playbackNote: playbackNote,
        setPlaybackNote: setPlaybackNote,
    }}>
        {children}
    </GameContext.Provider>
    )
}



export default GameController