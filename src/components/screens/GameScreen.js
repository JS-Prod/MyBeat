import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { AppContext } from '../game-controller/AppController.js'
import { GameContext } from '../game-controller/GameController.js'
import keyController from '../../classes/audio/KeyController.js'

import GameButton from '../ui/game/GameButton.js'
import CountdownTimer from '../ui/game/CountdownTimer.js'
import MessageDisplay from '../ui/game/MessageDisplay.js'
import ScoreDisplay from '../ui/game/ScoreDisplay.js'
import EndGameButtons from '../ui/game/EndGameButtons.js'


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
            <View style={getStyles(appContext).timerSection}>
                {gameContext.showDisplayMessage ? (<MessageDisplay />) : (<CountdownTimer />)}
            </View>
            <View style={getStyles(appContext).buttonSection}>
                {buttons}
            </View>
            <View style={getStyles(appContext).scoreSection}>
                {/* <ScoreDisplay/> */}
                {gameContext.displayMessage === 'GAME OVER' || gameContext.displayMessage === 'NEW HIGHSCORE' ? <ScoreDisplay isAlone={false}/> : <ScoreDisplay isAlone={true}/>}
                {gameContext.displayMessage === 'GAME OVER' || gameContext.displayMessage === 'NEW HIGHSCORE' ? <EndGameButtons/> : null}
            </View>
        </SafeAreaView>
    )
}

const getStyles = (appContext) => {
    return StyleSheet.create({
        gameScreen:{
            height: '100%',
            backgroundColor: appContext.currentPalette.first,
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 25 
        },
        buttonSection:{
            flexDirection: 'row',
        },
        scoreSection:{
            position: 'absolute',
            bottom: '5%',
            alignItems: 'center'
        },
        timerSection:{
            position: 'absolute',
            height: '82%'
        }
    })
}

export default GameScreen