import React, { useState, useContext } from 'react'
import { View, Text, TextInput, Button, Modal, ActivityIndicator, Pressable } from 'react-native'
import { AppContext } from '../../game-controller/AppController.js'

const ForgotPasswordnModal = () => {
  const appContext = useContext(AppContext)

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorText, setErrorText] = useState(null)

  function OnClose(){
    appContext.setShowResetModal(false)
    setEmail('')
    setLoading(false)
    setSuccess(false)
  }

  const sendPasswordResetEmail = async () => {
    setLoading(true)
    try {
      const response = await fetch(`https://mybeatserver.onrender.com/account/reset`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email:email})
      })
      const data = await response.json()
      if(data.result){
        setErrorText(null)
        setEmail('')
        setSuccess(true)
      } else {
        setEmail('')
        setErrorText(data.message)
      }
    } catch (error) {
      console.error('Error sending password reset email:', error)
    }
    setLoading(false)
  }


  const CloseButton = () => {
    return(
      <Pressable style={{
        width: 250,
        height: 40,
        backgroundColor: appContext.currentPalette.sixth,
        justifyContent: 'center',
        borderWidth: 1,
        marginTop: 5,}} onPress={OnClose}>
        <Text style={{textAlign: 'center', fontSize:18, fontWeight: '700', color: appContext.currentPalette.third}}>Close</Text>
      </Pressable>
    )
  }
  const SubmitButton = () => {
    return(
      <Pressable style={{
        width: 250,
        height: 40,
        backgroundColor: appContext.currentPalette.fourth,
        justifyContent: 'center',
        borderWidth: 1,
        marginTop: 5,}} onPress={sendPasswordResetEmail}>
        <Text style={{textAlign: 'center', fontSize:18, fontWeight: '700', color: appContext.currentPalette.third}}>Send Password Reset Email</Text>
      </Pressable>
    )
  }

  return (
    <Modal visible={appContext.showResetModal} animationType="slide" transparent>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: appContext.currentPalette.first, padding: 20, borderRadius: 10, alignItems: 'center' }}>
          <Text style={{color:appContext.currentPalette.sixth}}>Enter your email:</Text>
          <TextInput
            style={{ borderWidth: 1, backgroundColor: appContext.currentPalette.third, borderColor: appContext.currentPalette.fifth, padding: 10, marginVertical: 10, width: 200 }}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="Email"
          />
          {loading ? (
            // <ActivityIndicator size="small" color="blue" />
            <ActivityIndicator size="small" color={appContext.currentPalette.sixth} />
          ) : success ? (
            <>
              <Text style={{paddingBottom:10, color:appContext.currentPalette.sixth}}>Email sent successfully!</Text>
              <CloseButton/>
            </>
          ) : (
            <>
              {errorText ? <Text style={{paddingBottom:10, color: 'red'}}>{errorText}</Text> : null}
              <SubmitButton/>
              <CloseButton/>
            </>
          )}
        </View>
      </View>
    </Modal>
  )
}

export default ForgotPasswordnModal