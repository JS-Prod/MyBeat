import { useEffect, useContext } from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { GameContext } from '../../game-controller/GameController'
import { AppContext } from '../../game-controller/AppController'


const MessageDisplay = () => {
    const gameContext = useContext(GameContext)
    const appContext = useContext(AppContext)
    return(
        <SafeAreaView style={getStyles(appContext).messageContainer}>
            <Text style={getStyles(appContext).messageText}>{gameContext.displayMessage}</Text>
        </SafeAreaView>
    )
}

const getStyles = (appContext) => StyleSheet.create({
    messageContainer:{
        width: '100%',
        justifyContent: 'center'
    },
    messageText:{
        fontSize:40,
        fontWeight: 'bold',
        color: appContext.currentPalette.sixth
    }
})

export default MessageDisplay