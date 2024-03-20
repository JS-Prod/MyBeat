import React, { useState, useEffect } from "react"

export const LeaderboardContext = React.createContext()

const LeaderboardController = ({children}) => {
    const userState = [{username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4},
                       // {username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4}
    ] 
    const testState = [{username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4},
                        {username: 'baggyJ', score: 100, round: 4}
    ] 

    const [userScores, setUserScores] = useState(userState)
    const [leaderboardScores, setLeaderboardScores] = useState(testState)

    useEffect(()=>{
        console.log('USER SCORES:', userScores)
    },[userScores.length])

    return(
    <LeaderboardContext.Provider value={{
        userScores: userScores,
        setUserScores: setUserScores,
        leaderboardScores: leaderboardScores,
        setLeaderboardScores: setLeaderboardScores
    }}>
        {children}
    </LeaderboardContext.Provider>
    )
}

export default LeaderboardController