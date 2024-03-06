import { StyleSheet, Text, View } from 'react-native'
import colorController from '../../classes/colors/CollorController'
import { PaletteContext } from '../../../../App'
import { useContext, useEffect } from 'react'

const HomeScreen = () => {
    const currentPalette = useContext(PaletteContext)

    useEffect(()=>{
        console.log('Rerendering Home Screen.')
    },[currentPalette])
    
    return (
        <View style={getStyles().homeScreen}>
            <Text>This is the HOME screen.</Text>
        </View>
    )
}

const getStyles = () => {
    return StyleSheet.create({
        homeScreen:{
            width: '100%',
            height: '100%',
            backgroundColor: colorController.first,
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
}


export default HomeScreen