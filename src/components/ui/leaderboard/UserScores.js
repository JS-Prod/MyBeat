import { useEffect, useState, useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { AppContext } from '../../game-controller/AppController.js'
import { LeaderboardContext } from '../../game-controller/LeaderboardController.js'

import ScoreSlot from './ScoreSlot.js'


const UserScores = () => {
    const appContext = useContext(AppContext)
    const leaderboardContext = useContext(LeaderboardContext)

    useEffect(()=>{
    }, [leaderboardContext.userScores])

    return(
        <View style={getStyles(appContext).userScores}>
            <Text style={getStyles(appContext).title}>My Scores</Text>
            {leaderboardContext.userScores.map(({position, score, round}, index)=>(<ScoreSlot key={index} position={position} score={score} round={round}/>))}
        </View>
    )
}

const getStyles = (appContext) => StyleSheet.create({
    title:{
        paddingRight: 0,
        paddingTop: 5,
        paddingBottom: 5,
        fontSize:26,
        fontWeight: '500',
        textAlign: 'center',
        color: appContext.currentPalette.first
    },
    userScores:{
        width: '100%',
        flex: 0,
        alignItems: 'center',
        paddingLeft: 10, 
        paddingRight: 10,
        marginBottom: 5,
        backgroundColor: appContext.currentPalette.fourth
    },
})

export default UserScores