import { useEffect, useContext } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { AppContext } from '../../game-controller/AppController'


const EndGameButtons = () => {
    const appContext = useContext(AppContext)
    return(
        <View style={getStyles(appContext).buttonContainer}>
            <Pressable style={getStyles(appContext).button}>
                <Text style={getStyles(appContext).buttonText}>BACK</Text>
            </Pressable>

            <Pressable style={getStyles(appContext).button}>
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