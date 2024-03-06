import { StyleSheet, Text, View } from 'react-native'
import colorController from '../../classes/colors/CollorController'
import { PaletteContext } from '../../../../App'
import { useContext, useEffect } from 'react'

const RegisterScreen = () => {
    const currentPalette = useContext(PaletteContext)
    
    useEffect(()=>{
        console.log('Rerendering Register Screen.')
    }, [currentPalette])

    return (
        <View style={getStyles().registerScreen}>
            <Text>This is the REGISTER screen.</Text>
        </View>
    )
}

const getStyles = () => {
    return StyleSheet.create({
        registerScreen:{
            width: '100%',
            height: '100%',
            backgroundColor: colorController.fifth,
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
}


export default RegisterScreen