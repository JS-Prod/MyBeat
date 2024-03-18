import { useEffect, useState, useContext } from 'react'
import { View, StyleSheet, Text, FlatList, ScrollView } from 'react-native'
import { AppContext } from '../../game-controller/AppController'
import { LeaderboardContext } from '../../game-controller/LeaderboardController'
import ScoreSlot from './ScoreSlot.js'



const ScrollContainer = () => {
    const appContext = useContext(AppContext)
    const leaderboardContext = useContext(LeaderboardContext)

    useEffect(()=>{
        console.log('Leaderboard scores changing. Count: ' + leaderboardContext.leaderboardScores.length)
    },[leaderboardContext.leaderboardScores])
            
    //<ScrollView>, <FlatList>
    return(
        <View style={getStyles(appContext).scrollContainer}>
            <View style={getStyles(appContext).headers}>
                <Text style={getStyles(appContext).headerText}>Position</Text>
                <Text style={getStyles(appContext).headerText}>Name</Text>
                <Text style={getStyles(appContext).headerText}>Score</Text>
                <Text style={getStyles(appContext).headerText}>Round</Text>
            </View>
            <ScrollView >
                    {leaderboardContext.leaderboardScores.map(({username, score, round, position}, index)=><ScoreSlot key={index} username={username} score={score} round={round} position={position}/>)}
            </ScrollView>
        </View>
    )
}

const getStyles = (appContext) => StyleSheet.create({
    scrollContainer:{
        flex: 1,
        width: '100%',
        height: '65%',
        marginTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: appContext.currentPalette.fourth
    },
    headers:{
        marginLeft: 0,
        marginRight: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText:{
        fontWeight: '300',
        color: appContext.currentPalette.first,
        paddingBottom: 5
    }
})

export default ScrollContainer