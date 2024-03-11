import React, { useContext, useEffect } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { AppContext } from '../game-controller/AppController.js'
import { GameContext } from '../game-controller/GameController.js'
import GameButton from '../ui/GameButton.js'
import sequencer from '../../classes/sequencer/Sequencer.js'
import keyController from '../../classes/audio/KeyController.js'


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
        }
        else console.log('GAME SCREEN UNFOCUSED.')
    },[isFocused])

    function startPlayback(){
        sequencer.initPlaybackQueue()
        gameContext.setPlaybackNote(sequencer.popPlaybackQueue())
    }

    function extendSequence(){
        sequencer.extendSequence()
    }

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
        <View style={getStyles(appContext).gameScreen}>
            {buttons}
            <View style={{flex: 1}}>
                <Button title='Add to Sequence' onPress={extendSequence}/>
                <Button title='Start Playback' onPress={startPlayback}/>
            </View>
        </View>
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
        }
    })
}


export default GameScreen