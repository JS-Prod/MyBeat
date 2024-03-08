import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { useContext, useEffect } from 'react'
import { PaletteContext } from '../../../App.js'
import colorController from '../../classes/colors/CollorController.js'
import GameButton from '../ui/GameButton.js'

function screenTestPress(){
    console.log('Game Screen Test Press.')
}

const GameScreen = () => {
    const currentPalette = useContext(PaletteContext)

    useEffect(()=>{
        console.log('Rerendering Home Screen.')
    },[currentPalette])

    const numRows = 3
    const numColumns = 4

    const buttons = []

    for (let i = 0; i < numRows; i++) {
        const row = []
        for (let j = 0; j < numColumns; j++) {
            const index = i * numColumns + j
            row.push(<GameButton key={index} index={index}/>)
        }
        buttons.push(
            <View key={i} >
                {row}
            </View>
        )
    }

    return (
        // <TouchableWithoutFeedback>
            <View style={getStyles().gameScreen}>
                {buttons}
            </View>
        //</TouchableWithoutFeedback>
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