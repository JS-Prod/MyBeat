import React, { useContext, useEffect } from 'react'
import { Button, StyleSheet, View, SafeAreaView } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { AppContext } from '../game-controller/AppController.js'
import { GameContext } from '../game-controller/GameController.js'
import GameButton from '../ui/GameButton.js'
import keyController from '../../classes/audio/KeyController.js'

import CountdownTimer from '../ui/CountdownTimer.js'
import MessageDisplay from '../ui/MessageDisplay.js'
import ScoreDisplay from '../ui/ScoreDisplay.js'


const GameScreen = () => {
    const appContext = useContext(AppContext)
    const gameContext = useContext(GameContext)
    const isFocused = useIsFocused()
    
    useEffect(()=>{
        console.log('Rerender game screen for palette change.')
    },[appContext.currentPalette.name])

    useEffect(()=>{
        if(isFocused){
            console.log('GAME SCREEN FOCUSED.')
            gameContext.initNewGame()
        }
        else console.log('GAME SCREEN UNFOCUSED.')
    },[isFocused])

    const numRows = 3
    const numColumns = 4
    const buttons = []

    for (let i = 0; i < numRows; i++) {
        const row = []
        for (let j = 0; j < numColumns; j++) {
            const index = i * numColumns + j
            row.push(<GameButton key={index} note={keyController.chromatic[index]}/>)
        }
        buttons.push(
            <View key={i} >
                {row}
            </View>
        )
    }

    return (
        <SafeAreaView style={getStyles(appContext).gameScreen}>
            <View style={getStyles(appContext).timer}>
                {gameContext.showDisplayMessage ? (<MessageDisplay />) : (<CountdownTimer />)}
            </View>
            {buttons}
            <View style={getStyles(appContext).score}>
                <ScoreDisplay/>
            </View>
        </SafeAreaView>
    )
}

const getStyles = (appContext) => {
    return StyleSheet.create({
        gameScreen:{
            flex: 1,
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            backgroundColor: appContext.currentPalette.first,
            alignItems: 'center',
            justifyContent: 'center'
        },
        score:{
            position: 'absolute',
            bottom: '10%'
        },
        container:{
            flex: 1,
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            margin: 20
        },
        timer:{
            position: 'absolute',
            height: '75%'
        }
    })
}

export default GameScreen