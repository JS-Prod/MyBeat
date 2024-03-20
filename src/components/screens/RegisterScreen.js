import { StyleSheet, Text, TextInput, Pressable, View, SafeAreaView } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../game-controller/AppController'
import { useNavigation } from '@react-navigation/native'

const RegisterScreen = () => {
    const appContext = useContext(AppContext)
    const navigator = useNavigation()

    const [usernameText, setUsernameText] = useState('')
    const [passwordText, setPasswordText] = useState('')
    const [emailText, setEmailText] = useState('')


    const [registerDynamicText, setRegisterDynamicText] = useState('Register')

    function UpdatePasswordText(text){
        setPasswordText(text)
    }

    function UpdateUsernameText(text){
        setUsernameText(text)
    }

    function UpdateEmailText(text){
        setEmailText(text)
    }

    async function SubmitRegistration(){
        if(!appContext.hasActiveRequest){
            appContext.setHasActiveRequest(true)
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
                    const data = await response.json()
                    console.log('Data:', data)
                    if(!response.ok) {
                        //handle invalid login attempts
                        appContext.setRegisterError(data.message)
                    } else {

                    }
                } catch (err) {
                    console.error('Error sending registration submission:', err)
                } finally {
                    appContext.setHasActiveRequest(false)
                }
            }
            await fetchData(usernameText, passwordText, emailText)
        }
    }

    useEffect(()=>{
        console.log('Rerender login screen for palette change.')
    },[appContext.currentPalette.name])

    useEffect(()=>{
        if(appContext.hasActiveRequest){
            let interval = null
            setRegisterDynamicText('Waiting')
            interval = setInterval(()=>{
                setRegisterDynamicText(prev => prev + '.')
            },500)
            return () => {
                clearInterval(interval)
            }
        } else {
            setRegisterDynamicText('Register')
        }
    },[appContext.hasActiveRequest])

    useEffect(()=>{
        if(registerDynamicText.length > 10) setRegisterDynamicText('Waiting')
    },[registerDynamicText.length])

    return (
        <SafeAreaView style={getStyles(appContext).loginScreen}>
            <Text style={getStyles(appContext).gameTitle}>Register</Text>
            <View style={getStyles(appContext).credentialContainer}>
                <TextInput 
                    style={getStyles(appContext).credentialInput}
                    autoCorrect={false}
                    placeholder='Username'
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
                <TextInput 
                    style={getStyles(appContext).credentialInput}
                    autoCorrect={false}
                    placeholder='Email'
                    value={emailText}
                    onChangeText={UpdateEmailText}
                />
                <Pressable style={getStyles(appContext).button} onPress={SubmitRegistration}>
                    <Text style={getStyles(appContext).buttonText}>{registerDynamicText}</Text>
                </Pressable>
                <View style={getStyles(appContext).errorContainer}>
                    {appContext.registerError ? 
                        <Text style={getStyles(appContext).errorText}>{appContext.registerError}</Text>
                        :
                        null
                    }                       
                </View>
                <Pressable style={getStyles(appContext).footerPressArea} onPress={()=>{navigator.navigate('Login')}}>
                    <Text style={getStyles(appContext).footerText}>Already have an account?</Text>
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
            paddingTop: 16,
            color: appContext.currentPalette.first,
        },
        footerPressArea:{
            flex: 1,
            width: '100%',
        },
    })
}

export default RegisterScreen