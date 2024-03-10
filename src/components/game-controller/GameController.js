import React, { useState, useEffect } from "react"

export const GameContext = React.createContext()

const GameController = ({children}) => {
    const [score, setScore] = useState(0)
    const [testString, setTestString] = useState(null)
    const [isGameActive, setIsGameActive] = useState(false)
    const [isPlayerTurn, setIsPlayerTurn] = useState(false)
    const [canPress, setCanPress] = useState(true)
    const [seconds, setSeconds] = useState(0)

    function someRandomFunction(){
        console.log('Called some random function.')
    }

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
        console.log('Test String Changed To: ' + testString)
    }, [testString])

    useEffect(()=>{
        if(canPress) console.log('Pressing button enabled.')
        else console.log('Pressing buttons disabled.')
    },[canPress])

    useEffect(()=>{
        if(seconds <= 0) console.log('GAME OVER.')
    },[seconds])

    return(
    <GameContext.Provider value={{
        score: score, 
        setScore: setScore,
        testString: testString,
        setTestString: setTestString,
        isGameActive: isGameActive,
        setIsGameActive: setIsGameActive,
        canPress: canPress,
        setCanPress: setCanPress,
        isPlayerTurn: isPlayerTurn,
        setIsPlayerTurn: setIsPlayerTurn,
        someRandomFunction: someRandomFunction
    }}>
        {children}
    </GameContext.Provider>
    )
}



export default GameController