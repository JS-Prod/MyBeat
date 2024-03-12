import { useEffect, useContext } from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { GameContext } from '../game-controller/GameController'


const ScoreDisplay = () => {
    const gameContext = useContext(GameContext)

    useEffect(()=>{
    }, [gameContext.score])

    return(
        <SafeAreaView style={styles.scoreDisplay}>
            <Text style={styles.scoreText}>SCORE: {gameContext.score}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scoreDisplay:{
        width: '100%',
        justifyContent: 'center'
    },
    scoreText:{
        fontSize:40,
        fontWeight: 'bold'
    }
})

export default ScoreDisplay