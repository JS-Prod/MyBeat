import { StyleSheet, Text, View } from 'react-native'
import { useContext, useEffect } from 'react'
import { AppContext } from '../game-controller/AppController.js'
import { LeaderboardContext } from '../game-controller/LeaderboardController.js'
import UserScores from '../ui/leaderboard/UserScores.js'
import ScrollContainer from '../ui/leaderboard/ScrollContainer.js'


const SocialScreen = () => {
    const appContext = useContext(AppContext)
    const leaderboardContext = useContext(LeaderboardContext)

    useEffect(()=>{
        console.log('Rerender leaderboard for palette change.')
    },[appContext.currentPalette.name])
    
    return (
        <View style={getStyles(appContext).leaderboard}>
            {/* <Text style={getStyles(appContext).title}>Leaderboard</Text> */}
            {/* <View style={getStyles(appContext).headers}>
                <Text>Position</Text>
                <Text>Name</Text>
                <Text>Score</Text>
                <Text>Round</Text>
            </View> */}
            <ScrollContainer/>
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