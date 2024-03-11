import { StyleSheet, Text, View } from 'react-native'
import { useContext, useEffect } from 'react'
import { AppContext } from '../game-controller/AppController'

const RegisterScreen = () => {
    const appContext = useContext(AppContext)
    
    useEffect(()=>{
        console.log('Rerender register screen for palette change.')
    }, [appContext.currentPalette.name])

    return (
        <View style={getStyles(appContext).registerScreen}>
            <Text>This is the REGISTER screen.</Text>
        </View>
    )
}

const getStyles = (appContext) => {
    return StyleSheet.create({
        registerScreen:{
            width: '100%',
            height: '100%',
            backgroundColor: appContext.currentPalette.fifth,
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
}


export default RegisterScreen