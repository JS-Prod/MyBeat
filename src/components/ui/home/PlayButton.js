import { useEffect, useState, useContext } from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import { AppContext } from '../../game-controller/AppController'
import { useNavigation } from '@react-navigation/native'



const PlayButton = () => {
    const appContext = useContext(AppContext)
    const navigation = useNavigation()


    function PlayGame(){
        console.log('Pressed')
        navigation.navigate('Game');
    }

    return(
        <Pressable style={getStyles(appContext).playBox} onPress={PlayGame}>
            <Text style={getStyles(appContext).playText}>Play</Text>
        </Pressable>
    )
}

const getStyles = (appContext) => StyleSheet.create({
    playBox:{
        height: 100,
        width: 200,
        backgroundColor: appContext.currentPalette.sixth,
        justifyContent: 'center'
    },
    playText:{
        fontSize: 42,
        fontWeight: '400',
        color: appContext.currentPalette.third,
        textAlign: 'center',
    }
})

export default PlayButton