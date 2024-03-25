import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../game-controller/AppController.js'
import { LeaderboardContext } from '../game-controller/LeaderboardController.js'
import { useIsFocused } from '@react-navigation/native'
import UserScores from '../ui/leaderboard/UserScores.js'
import ScrollContainer from '../ui/leaderboard/ScrollContainer.js'


const SocialScreen = () => {
    const appContext = useContext(AppContext)
    const leaderboardContext = useContext(LeaderboardContext)
    const isFocused = useIsFocused()

    const [isLoading, setIsLoading] = useState(false)
    
    
    useEffect(()=>{
        console.log('Rerender leaderboard for palette change.')
    },[appContext.currentPalette.name])

    useEffect(()=>{
        if(isFocused) leaderboardContext.RefreshLeaderboard()
    }, [isFocused])

    useEffect(()=>{
        if(leaderboardContext.hasActiveRequest) setIsLoading(true)
        else setIsLoading(false)
    }, [leaderboardContext.hasActiveRequest])
    
    return (
        <View style={getStyles(appContext).leaderboard}>
            <ScrollContainer/>
            {isLoading ? <ActivityIndicator size={'large'} color={appContext.currentPalette.second}/> : null}
            <UserScores/>
        </View>
    )
}

const getStyles = (appContext) => {
    return StyleSheet.create({
        leaderboard:{
            height: '100%',
            backgroundColor: appContext.currentPalette.fourth,
        },
        headers:{
            marginLeft: 25,
            marginRight: 25,
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        title:{
            marginTop: 50,
            fontSize:32,
            textAlign: 'center',
            fontWeight: '300'
        }
    })
}

export default SocialScreen