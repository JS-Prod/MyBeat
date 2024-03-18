import { StyleSheet, Text, View } from 'react-native'
import { useContext, useEffect } from 'react'
import { AppContext } from '../game-controller/AppController.js'
import PlayButton from '../ui/home/PlayButton.js'


const HomeScreen = () => {
    const appContext = useContext(AppContext)

    useEffect(()=>{
        console.log('Rerender home screen for palette change.')
    },[appContext.currentPalette.name])

    return (
        <View style={getStyles(appContext).homeScreen}>
            <PlayButton/>
        </View>
    )
}

const getStyles = (appContext) => {
    return StyleSheet.create({
        homeScreen:{
            width: '100%',
            height: '100%',
            backgroundColor: appContext.currentPalette.fourth,
            alignItems: 'center',
            justifyContent: 'center',
        }
    })
}


export default HomeScreen