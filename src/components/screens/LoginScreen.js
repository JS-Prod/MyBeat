import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView  } from 'react-native'
import { useEffect, useContext, useState } from 'react'
import { AppContext } from '../game-controller/AppController.js'
import { useNavigation } from '@react-navigation/native'


const LoginScreen = () => {
    const appContext = useContext(AppContext)
    const navigator = useNavigation()

    const [usernameText, setUsernameText] = useState('')
    const [passwordText, setPasswordText] = useState('')

    const [activeRequest, setActiveRequest] = useState(false)

    function UpdatePasswordText(text){
        setPasswordText(text)
    }

    function UpdateUsernameText(text){
        setUsernameText(text)
    }

    function GoToRegister(){
        navigator.navigate('Register')
    }

    async function SubmitLogin(){
        if(!activeRequest){
            setActiveRequest(true)
            const fetchData = async (username, password) => {
                try {
                    const response = await fetch('https://mybeatserver.onrender.com/account/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json' 
                        },
                        body: JSON.stringify({
                            username: username,
                            password: password
                    })})
                    console.log('Response Check:', JSON.stringify(response,0,2))
                    if(!response.ok) {
                        //handle invalid login attempts
                        const data = await response.json()
                        appContext.setLoginError(data.message)
                    } else {
                        const data = await response.json()
                        console.log('Data:', data)
                        appContext.setIsLoggedIn(true)
                    }
                } catch (err) {
                    console.error('Error sending login submission:', err)
                } finally {
                    setActiveRequest(false)
                }
            }
            await fetchData(usernameText, passwordText)
        }
    }

    useEffect(()=>{
        console.log('Rerender login screen for palette change.')
    },[appContext.currentPalette.name])

    return (
        <SafeAreaView style={getStyles(appContext).loginScreen}>
            <Text style={getStyles(appContext).gameTitle}>MyBeat</Text>
            <View style={getStyles(appContext).credentialContainer}>
                <TextInput 
                    style={getStyles(appContext).credentialInput}
                    autoCorrect={false}
                    placeholder='Username/Email'
                    value={usernameText}
                    onChangeText={UpdateUsernameText}
                />
                 <TextInput 
                    style={getStyles(appContext).credentialInput}
                    autoCorrect={false}
                    placeholder='Password'
                    value={passwordText}
                    onChangeText={UpdatePasswordText}
                    secureTextEntry
                />
                <Pressable style={getStyles(appContext).button} onPress={SubmitLogin}>
                    <Text style={getStyles(appContext).buttonText}>Login</Text>
                </Pressable>
                <View style={getStyles(appContext).forgotPasswordPressArea}>
                    <Text style={getStyles(appContext).forgotPasswordText}>Forgot Password?</Text>
                </View>
                {appContext.loginError ? 
                <View style={getStyles(appContext).errorContainer}>
                    <Text style={getStyles(appContext).errorText}>{appContext.loginError}</Text>
                </View>
            :
                null}
                            
            <Pressable style={getStyles(appContext).createAccountPressArea} onPress={GoToRegister}>
                <Text style={getStyles(appContext).createAccountText}>Create Account</Text>
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
            backgroundColor: appContext.currentPalette.sixth,
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 100
        },
        gameTitle:{
            position: 'absolute',
            top: '20%',
            fontSize: 70,
            color: appContext.currentPalette.third
        },
        credentialContainer:{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '50%'
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
        createAccountText:{
            textAlign: 'center',
            color: appContext.currentPalette.first,
        },
        createAccountPressArea:{
            width: '100%',
            top: '19%',
            height: 70
        },
        forgotPasswordText:{
            color: appContext.currentPalette.first,
            textAlign: 'center',
            paddingTop: 16,
        },
        forgotPasswordPressArea:{
            width: '100%',
            height: 75
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

export default LoginScreen