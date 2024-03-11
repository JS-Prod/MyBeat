import { StyleSheet, Text, View } from 'react-native'
import { useContext, useEffect } from 'react'
import { AppContext } from '../game-controller/AppController.js'


const HomeScreen = () => {
    const appContext = useContext(AppContext)

    useEffect(()=>{
        console.log('Rerender home screen for palette change.')
    },[appContext.currentPalette.name])

    return (
        <View style={getStyles(appContext).homeScreen}>
            <Text>This is the HOME screen.</Text>
        </View>
    )
}

const getStyles = (appContext) => {
    return StyleSheet.create({
        homeScreen:{
            width: '100%',
            height: '100%',
            backgroundColor: appContext.currentPalette.first,
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
}


export default HomeScreen