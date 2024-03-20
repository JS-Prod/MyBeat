import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView  } from 'react-native'
import { useEffect, useContext, useState } from 'react'
import { AppContext } from '../game-controller/AppController.js'
import { LeaderboardContext } from '../game-controller/LeaderboardController.js'
import { useNavigation } from '@react-navigation/native'

import ForgotPasswordModal from '../ui/modals/ForgotPasswordModal.js'

const LoginScreen = () => {
    const appContext = useContext(AppContext)
    const leaderboardContext = useContext(LeaderboardContext)

    const navigator = useNavigation()

    const [usernameText, setUsernameText] = useState('')
    const [passwordText, setPasswordText] = useState('')

    const [loginDynamicText, setLoginDynamicText] = useState('Login')

    function UpdatePasswordText(text){
        setPasswordText(text)
    }

    function UpdateUsernameText(text){
        setUsernameText(text)
    }

    function OpenPasswordResetModal(){
        console.log('Pressing open button.')
        appContext.setShowResetModal(true)
    }

    async function SubmitLogin(){
        if(!appContext.hasActiveRequest){
            appContext.setHasActiveRequest(true)
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
                    const data = await response.json()
                    console.log('Data:', data)
                    if(!response.ok) {
                        //handle invalid login attempts
                        appContext.setLoginError(data.message)
                    } else {
                        appContext.setIsLoggedIn(true)
                        leaderboardContext.setUserScores(data.scores)
                    }
                } catch (err) {
                    console.error('Error sending login submission:', err)
                } finally {
                    appContext.setHasActiveRequest(false)
                }
            }
            await fetchData(usernameText, passwordText)
        }
    }

    useEffect(()=>{
        console.log('Rerender login screen for palette change.')
    },[appContext.currentPalette.name])

    useEffect(()=>{
        if(appContext.hasActiveRequest){
            let interval = null
            setLoginDynamicText('Waiting')
            interval = setInterval(()=>{
                setLoginDynamicText(prev => prev + '.')
            },500)
            return () => {
                clearInterval(interval)
            }
        } else {
            setLoginDynamicText('Login')
        }
    },[appContext.hasActiveRequest])

    useEffect(()=>{
        if(loginDynamicText.length > 11) setLoginDynamicText('Waiting')
    },[loginDynamicText.length])

    return (
        <SafeAreaView style={getStyles(appContext).loginScreen}>
            <View style={getStyles(appContext).loginScreen}>
                <Text style={getStyles(appContext).gameTitle}>MyBeat</Text>
            </View>
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
                    <Text style={getStyles(appContext).buttonText}>{loginDynamicText}</Text>
                </Pressable>
                <Pressable style={getStyles(appContext).forgotPasswordPressArea} onPress={OpenPasswordResetModal}>
                    <Text style={getStyles(appContext).forgotPasswordText}>Forgot Password?</Text>
                </Pressable>

                <ForgotPasswordModal />

                <View style={getStyles(appContext).errorContainer}>
                    {appContext.loginError ? 
                        <Text style={getStyles(appContext).errorText}>{appContext.loginError}</Text>
                        :
                        null
                    }                       
                </View>
                <Pressable style={getStyles(appContext).footerPressArea} onPress={()=>{navigator.navigate('Register')}}>
                    <Text style={getStyles(appContext).footerText}>Create Account</Text>
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
            justifyContent: 'flex-end',
        },
        gameTitle:{
            top: '30%',
            fontSize: 70,
            color: appContext.currentPalette.third,
            textAlign: 'center'
        },
        credentialContainer:{
            width: '100%',
            height: '100%',
            top: '40%',
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
            color: appContext.currentPalette.third,
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
            lineHeight: 50
        },
        forgotPasswordText:{
            color: appContext.currentPalette.first,
            textAlign: 'center',
            paddingTop: 16,
        },
        forgotPasswordPressArea:{
            width: '100%',
            height: 50,
        },
        errorContainer:{
            flexDirection: 'row',
            flex: 0.5,
            justifyContent: 'center',
        },
        errorText:{
            textAlign: 'center',
            textAlignVertical: 'center',
            fontSize: 16,
            fontWeight: '400',
            color: 'red'
        },
        footerText:{
            textAlign: 'center',
            paddingTop: 30,
            color: appContext.currentPalette.first,
        },
        footerPressArea:{
            flex: 1,
            width: '100%',
        },
    })
}

export default LoginScreen