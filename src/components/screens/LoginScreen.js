import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable  } from 'react-native'
import { useEffect, useContext } from 'react'
import { AppContext } from '../game-controller/AppController.js'

const LoginScreen = () => {
    const appContext = useContext(AppContext)

    useEffect(()=>{
        console.log('Rerender login screen for palette change.')
    },[appContext.currentPalette.name])

    return (
        <SafeAreaView style={getStyles(appContext).loginScreen}>
            <View style={getStyles(appContext).credentialContainer}>
                <TextInput 
                    style={getStyles(appContext).credentialInput}
                    autoCorrect={false}
                    placeholder='Username'
                />
                <Pressable style={getStyles(appContext).button}>
                    <Text style={getStyles(appContext).buttonText}>Join</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const getStyles = (appContext) => {
    return StyleSheet.create({
        loginScreen:{
            width: '100%',
            height: '100%',
            backgroundColor: appContext.currentPalette.second,
            alignItems: 'center',
            justifyContent: 'flex-end'
        },
        credentialContainer:{
            position: 'absolute',
            width: '100%',
            top: '50%'
        },
        credentialInput:{
            width: '100%',
            height: 50,
            backgroundColor: appContext.currentPalette.third,
            textAlign: 'center',
     
            fontSize: 16,
            fontWeight: 'bold',
        },
        button:{
            alignItems: 'center',
            width: '100%',
            height: 50,
            backgroundColor: appContext.currentPalette.fourth,
            justifyContent: 'flex-end',
            marginBottom: 10
        },
        buttonText:{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
            lineHeight: 50
        },
    })
}

export default LoginScreen