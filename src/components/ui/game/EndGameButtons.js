import { useContext } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { AppContext } from '../../game-controller/AppController'
import { GameContext } from '../../game-controller/GameController'
import { useNavigation } from '@react-navigation/native'


const EndGameButtons = () => {
    const appContext = useContext(AppContext)
    const gameContext = useContext(GameContext) 
    const navigation = useNavigation()

    function Retry(){
        gameContext.initNewGame()
    }

    function Back(){
        navigation.navigate('Home')
    }
    
    return(
        <View style={getStyles(appContext).buttonContainer}>
            <Pressable style={getStyles(appContext).button} onPress={Back}>
                <Text style={getStyles(appContext).buttonText}>BACK</Text>
            </Pressable>

            <Pressable style={getStyles(appContext).button} onPress={Retry}>
                <Text style={getStyles(appContext).buttonText}>RETRY</Text>
            </Pressable>
        </View>
    )
}

const getStyles = (appContext) => StyleSheet.create({
    buttonContainer:{
        flexDirection: 'row',
    },
    button: {
        width: 145,
        height: 80,
        backgroundColor: appContext.currentPalette.sixth,
        marginRight: 15,
        marginLeft: 15,
        justifyContent: 'center',
        borderRadius: 30,
    },
    buttonText:{
        fontSize: 24,
        fontWeight: '800',
        color: appContext.currentPalette.third,
        textAlign: 'center'
    }
})

export default EndGameButtons