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
        console.log('Clicked register button')
        const fetchData = async (username, password, email) => {
            try {
                const response = await fetch('https://mybeatserver.onrender.com/account/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                        email: email
                })})   
                console.log('Response:', JSON.stringify(response))
                const data = await response.json()
                console.log('Data:', data)
                if(!response.ok) {
                    appContext.setRegisterError(data.message)
                    //error handling and feedback
                } else {

                }

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
                {appContext.registerError ? 
                <View style={getStyles(appContext).errorContainer}>
                    <Text style={getStyles(appContext).errorText}>{appContext.registerError}</Text>
                </View>
            :
                null}
                 <Pressable  style={getStyles(appContext).loginPressArea} onPress={GoToLogin}>
                    <Text style={getStyles(appContext).login}>Have an account? Login.</Text>
                </Pressable>
            </View>
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
            flex: 1,
            width: '100%',
            height: '100%',
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
            color: appContext.currentPalette.first,
        },
        loginPressArea:{
            width: '100%',
            top: '20%',
            height: 70
        },
        errorContainer:{
            justifyContent: 'center'
        },
        errorText:{
            color: 'red',
            textAlign: 'center',
            fontSize: 14,
            fontWeight: '400'
        }
    })
}


export default RegisterScreen