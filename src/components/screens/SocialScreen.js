import { StyleSheet, Text, View } from 'react-native'
import { useContext, useEffect } from 'react'
import { AppContext } from '../game-controller/AppController.js'


const SocialScreen = () => {
    const appContext = useContext(AppContext)

    useEffect(()=>{
        console.log('Rerender social screen for palette change.')
    },[appContext.currentPalette.name])
    
    return (
        <View style={getStyles(appContext).socialScreen}>
            <Text>This is the SOCIAL screen.</Text>
        </View>
    )
}

const getStyles = (appContext) => {
    return StyleSheet.create({
        socialScreen:{
            width: '100%',
            height: '100%',
            backgroundColor: appContext.currentPalette.fifth,
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
}

export default SocialScreen