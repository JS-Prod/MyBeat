import { Button, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { PaletteContext } from '../../../App.js'
import colorController from '../../classes/colors/CollorController.js'
import GameButton from '../ui/GameButton.js'
import sequencer from '../../classes/sequencer/Sequencer.js'
import keyController from '../../classes/audio/KeyController.js'

import { GameContext } from '../game-controller/GameController.js'



const GameScreen = ({route}) => {
    const currentPalette = useContext(PaletteContext)
    const gameContext = useContext(GameContext)
    const isFocused = useIsFocused()
    
    useEffect(()=>{
    },[currentPalette])

    useEffect(()=>{
        if(isFocused){
            console.log('GAME SCREEN FOCUSED.')
            gameContext.someRandomFunction()
        }
        else console.log('GAME SCREEN UNFOCUSED.')
    },[isFocused])

    function startPlayback(){
        sequencer.startSequencePlayback()
        const nextNote = sequencer.playbackQueue.pop()
        route.params.setPlaybackNote({note: nextNote, index: sequencer.playbackQueue.length})
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
            row.push(<GameButton key={index} index={index} note={keyController.chromatic[index]} setPlaybackNote={route.params.setPlaybackNote} />)
        }
        buttons.push(
            <View key={i} >
                {row}
            </View>
        )
    }

    return (
        <View style={getStyles().gameScreen}>
            {buttons}
            <View style={{flex: 1}}>
                <Button title='Add to Sequence' onPress={extendSequence}/>
                <Button title='Start Playback' onPress={startPlayback}/>
            </View>
        </View>
    )
}

const getStyles = () => {
    return StyleSheet.create({
        gameScreen:{
            flex: 1,
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            backgroundColor: colorController.first,
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
}


export default GameScreen