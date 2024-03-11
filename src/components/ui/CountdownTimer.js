import { useEffect, useState, useContext } from 'react'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'
import { AppContext } from '../game-controller/AppController'
import { GameContext } from '../game-controller/GameController'


const CountdownTimer = () => {
    const appContext = useContext(AppContext)
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