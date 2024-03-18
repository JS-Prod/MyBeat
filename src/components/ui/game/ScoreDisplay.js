import { useEffect, useContext } from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { GameContext } from '../../game-controller/GameController'
import { AppContext } from '../../game-controller/AppController'


const ScoreDisplay = ({isAlone}) => {
    const gameContext = useContext(GameContext)
    const appContext = useContext(AppContext)

    useEffect(()=>{
    }, [gameContext.score])

    return(
        <SafeAreaView style={getStyles(appContext, isAlone).scoreDisplay}>
            <Text style={getStyles(appContext, isAlone).scoreText}>SCORE: {gameContext.score}</Text>
        </SafeAreaView>
    )
}

const getStyles = (appContext, isAlone) => StyleSheet.create({
    scoreDisplay:{
        marginBottom:  isAlone ? 45 : 15,
        justifyContent: 'center'
    },
    scoreText:{
        fontSize: 40,
        fontWeight: 'bold',
        color: appContext.currentPalette.sixth
    }
})

export default ScoreDisplay