import { StyleSheet, Text, View } from 'react-native'
import colorController from '../../classes/colors/CollorController.js'
import { useContext, useEffect } from 'react'
import { PaletteContext } from '../../../App.js'

const SocialScreen = () => {
    const currentPalette = useContext(PaletteContext)
    useEffect(()=>{
        console.log('Rerendering Social Screen.')
    },[currentPalette])
    
    return (
        <View style={getStyles().socialScreen}>
            <Text>This is the SOCIAL screen.</Text>
        </View>
    )
}

const getStyles = () => {
    return StyleSheet.create({
        socialScreen:{
            width: '100%',
            height: '100%',
            backgroundColor: colorController.sixth,
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
}

export default SocialScreen