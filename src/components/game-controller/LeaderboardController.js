import React, { useState, useEffect, useContext } from "react"
import { AppContext } from "./AppController"


export const LeaderboardContext = React.createContext()

const LeaderboardController = ({children}) => {
    
    const [userScores, setUserScores] = useState([])
    const [leaderboardScores, setLeaderboardScores] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [hasActiveRequest, setHasActiveRequest] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)

    const appContext = useContext(AppContext)

    const activeRequest = false

    async function PostHighscore(username, score, round){
        if(!activeRequest){
            setHasActiveRequest(true)
            const fetchData = async () => {
                try {
                    const response = await fetch('https://mybeatserver.onrender.com/score/post', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json' 
                        },
                        body: JSON.stringify({
                            username: username,
                            score: score,
                            round: round
                    })})
                    const data = await response.json()
                    console.log('Data:', data)
                    if(!response.ok) {
                        //handle invalid login attempts
                        console.log('Problem posting highscore.')
                    } else {
                        console.log('Highscore posted successfully.')
                        await RefreshLeaderboard()
                    }
                } catch (err) {
                    console.error('Error posting highscore:', err)
                }  finally {
                    setHasActiveRequest(false)
                }
            }
            await fetchData()
        }
    }
    async function RefreshLeaderboard(){
        const fetchData = async () => {
            try {
                setHasActiveRequest(true)
                const userScoreResponse = await fetch(`https://mybeatserver.onrender.com/score/pull?username=${appContext.username}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json' 
                    },
                })
                const leaderboardResponse = await fetch(`https://mybeatserver.onrender.com/score/leaderboard?pageNumber=${currentPage}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json' 
                    },
                })                
                const userData = await userScoreResponse.json()
                const leaderboardData = await leaderboardResponse.json()
                if(!userScoreResponse.ok || !leaderboardResponse.ok) {
                    console.log('Leaderboard or Player Score grab unsuccessful.')
                } else {
                    console.log('Refresh data pull successful')
                    setUserScores(userData.scoreArray)
                    setLeaderboardScores(leaderboardData.scoreArray)
                    setIsRefreshing(true)
                }
            } catch (err) {
                console.error('Error refreshing leaderboard:', err)
            } finally {
                setHasActiveRequest(false)
            }
        }
        await fetchData()
    }

    useEffect(()=>{
        if(isRefreshing){
            for(let i = 0; i < leaderboardScores.length; i++){
                leaderboardScores[i]['position'] = '#' + (i + 1)
            }
            setIsRefreshing(false)
        }
    },[isRefreshing])

    return(
    <LeaderboardContext.Provider value={{
        userScores: userScores,
        setUserScores: setUserScores,
        leaderboardScores: leaderboardScores,
        setLeaderboardScores: setLeaderboardScores,
        PostHighscore: PostHighscore,
        RefreshLeaderboard: RefreshLeaderboard, 
        setIsRefreshing: setIsRefreshing,
        hasActiveRequest: hasActiveRequest
    }}>
        {children}
    </LeaderboardContext.Provider>
    )
}

export default LeaderboardController