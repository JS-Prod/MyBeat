import { StyleSheet, Text, TextInput, Pressable, View } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../game-controller/AppController'
import { useNavigation } from '@react-navigation/native'


const RegisterScreen = () => {
    const appContext = useContext(AppContext)
    const navigator = useNavigation()

    const [usernameText, setUsernameText] = useState('')
    const [passwordText, setPasswordText] = useState('')
    const [emailText, setEmailText] = useState('')

    function UpdateUsernameText(text){
        setUsernameText(text)
    }

    function UpdatePasswordText(text){
        setPasswordText(text)
    }

    function UpdateEmailText(text){
        setEmailText(text)
    }
    
    useEffect(()=>{
        console.log('Rerender register screen for palette change.')
    }, [appContext.currentPalette.name])

    function GoToLogin(){
        navigator.navigate('Login')
    }

    async function SubmitRegistration(){
        const fetchData = async (username, password, email) => {
            try {
                const response  = await fetch('some-valid-url')
                if(!response.ok) throw new Error('Submit register request not ok.')

                const data = await response.json()
                console.log('Data:', data)
            } catch (err) {
                console.error('Error sending register submission:', err)
            }
        }
        await fetchData(usernameText, passwordText, emailText)
    }

    return (
        <View style={getStyles(appContext).registerScreen}>
            <Text style={getStyles(appContext).title}>Register</Text>
            <View style={getStyles(appContext).credentialContainer}>
                <TextInput 
                    style={getStyles(appContext).credentialInput}
                    autoCorrect={false}
                    placeholder='Username'
                    value={usernameText}
                    onChangeText={UpdateUsernameText}
                />
                <TextInput 
                    secureTextEntry
                    style={getStyles(appContext).credentialInput}
                    autoCorrect={false}
                    placeholder='Password'
                    value={passwordText}
                    onChangeText={UpdatePasswordText}
                />
                 <TextInput 
                    style={getStyles(appContext).credentialInput}
                    autoCorrect={false}
                    placeholder='Email'
                    value={emailText}
                    onChangeText={UpdateEmailText}
                />
                <Pressable style={getStyles(appContext).button} onPress={SubmitRegistration}>
                    <Text style={getStyles(appContext).buttonText}>Register</Text>
                </Pressable>
            </View>
            <Pressable  style={getStyles(appContext).loginPressArea} onPress={GoToLogin}>
                <Text style={getStyles(appContext).login}>Have an account? Login.</Text>
            </Pressable>
        </View>
    )
}

const getStyles = (appContext) => {
    return StyleSheet.create({
        registerScreen:{
            width: '100%',
            height: '100%',
            backgroundColor: appContext.currentPalette.sixth,
            alignItems: 'center',
            justifyContent: 'center'
        },
        credentialContainer:{
            position: 'absolute',
            width: '100%',
            top: '40%'
        },
        credentialInput:{
            width: '100%',
            height: 50,
            backgroundColor: appContext.currentPalette.third,
            textAlign: 'center',
            borderWidth: 1,
            marginTop: 10,
            marginBottom: 10,
     
            fontSize: 16,
            fontWeight: 'bold',
        },
        button:{
            alignItems: 'center',
            width: '100%',
            height: 50,
            backgroundColor: appContext.currentPalette.fourth,
            justifyContent: 'flex-end',
            marginBottom: 10,
            borderWidth: 1,
            marginTop:10,
            marginBottom:10,
        },
        buttonText:{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
            lineHeight: 50
        },
        title:{
            position: 'absolute',
            fontSize: 70,
            top: '20%',
            color: appContext.currentPalette.third
        },
        login:{
            textAlign: 'center',
            paddingTop: 35,
            color: appContext.currentPalette.first,
        },
        loginPressArea:{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 75
        }
    })
}


export default RegisterScreen