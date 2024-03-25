import React, { useContext } from 'react'
import { View, Text, Modal, Pressable } from 'react-native'
import { AppContext } from '../../game-controller/AppController.js'

const SuccessfulRegistrationModal = () => {
  const appContext = useContext(AppContext)

  function OnClose(){
    appContext.setShowSuccessModal(false)
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

  return (
    <Modal visible={appContext.showSuccessModal} animationType="fade" transparent>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: appContext.currentPalette.first, padding: 20, borderRadius: 10, alignItems: 'center' }}>
          <Text style={{color:appContext.currentPalette.sixth, fontSize:24, fontWeight: '500'}}>Registration Successful!</Text>
          <Text style={{color:appContext.currentPalette.sixth, fontSize:16, fontWeight: '300'}}>Verify your email to log in.</Text>
          <CloseButton/>
        </View>
      </View>
    </Modal>
  )
}

export default SuccessfulRegistrationModal