import { Button, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useContext, useEffect, useRef } from 'react'
import { PaletteContext } from '../../../App.js'
import colorController from '../../classes/colors/CollorController.js'
import GameButton from '../ui/GameButton.js'
import sequencer from '../../classes/sequencer/Sequencer.js'
import keyController from '../../classes/audio/KeyController.js'

const GameScreen = ({route}) => {
    const currentPalette = useContext(PaletteContext)
    
    useEffect(()=>{
        console.log('Rerendering Game Screen.')
    },[currentPalette])

    function startPlayback(){
        sequencer.startSequencePlayback()
        const nextNote = sequencer.playbackQueue.pop()
        console.log('Next Note: ' + nextNote)
        route.params.setPlaybackNote({note: nextNote, index: sequencer.playbackQueue.length})
    }

    function extendSequence(){
        console.log('Adding to sequence.')
        sequencer.extendSequence()
        console.log('Sequence: ' + sequencer.currentSequence)
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