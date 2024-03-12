import { useEffect, useContext } from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { GameContext } from '../game-controller/GameController'


const MessageDisplay = () => {
    const gameContext = useContext(GameContext)

    return(
        <SafeAreaView style={styles.themePickerContainer}>
            <Text style={styles.timerText}>{gameContext.displayMessage}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    themePickerContainer:{
        width: '100%',
        justifyContent: 'center'
    },
    timerText:{
        fontSize:40,
        fontWeight: 'bold'
    }
})

export default MessageDisplay