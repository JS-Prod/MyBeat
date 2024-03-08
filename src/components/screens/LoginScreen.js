import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable  } from 'react-native'
import colorController from '../../classes/colors/CollorController.js'
import { useEffect, useContext } from 'react'
import { PaletteContext } from '../../../App.js'

const LoginScreen = () => {
    const currentPalette = useContext(PaletteContext)

    useEffect(()=>{
        console.log('Rerendering Login Screen.')
    },[currentPalette])

    return (
        <SafeAreaView style={getStyles().loginScreen}>
            <View style={getStyles().credentialContainer}>
                <TextInput 
                    style={getStyles().credentialInput}
                    autoCorrect={false}
                    placeholder='Username'
                />
                <Pressable style={getStyles().button}>
                    <Text style={getStyles().buttonText}>Join</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const getStyles = () => {
    return StyleSheet.create({
        loginScreen:{
            width: '100%',
            height: '100%',
            backgroundColor: colorController.second,
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
            backgroundColor: colorController.third,
            textAlign: 'center',
     
            fontSize: 16,
            fontWeight: 'bold',
        },
        button:{
            alignItems: 'center',
            width: '100%',
            height: 50,
            backgroundColor: colorController.fourth,
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