import { useEffect, useContext } from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { GameContext } from '../../game-controller/GameController'


const CountdownTimer = () => {
    const gameContext = useContext(GameContext)

    useEffect(()=>{

    }, [gameContext.seconds])

    return(
        <SafeAreaView style={styles.themePickerContainer}>
            <Text style={styles.timerText}>{gameContext.seconds}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    themePickerContainer:{
        width: '100%',
        justifyContent: 'center'
    },
    timerText:{
        fontSize:40,
        fontWeight: 'bold'
    }
})

export default CountdownTimer