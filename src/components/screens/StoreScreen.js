import { StyleSheet, Text, View } from 'react-native'
import { useContext, useEffect } from 'react'
import { AppContext } from '../game-controller/AppController.js'

const StoreScreen = () => {
    const appContext = useContext(AppContext)

    useEffect(()=>{
        console.log('Rerender store screen for palette change.')
    },[appContext.currentPalette.name])

    return (
        <View style={getStyles(appContext).storeScreen}>
            <Text>This is the STORE screen.</Text>
        </View>
    )
}

const getStyles = (appContext) => {
    return StyleSheet.create({
        storeScreen:{
            width: '100%',
            height: '100%',
            backgroundColor: appContext.currentPalette.fourth,
            alignItems: 'center',
            justifyContent: 'center',
        }
    })
}


export default StoreScreen