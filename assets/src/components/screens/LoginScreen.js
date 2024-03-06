import { StyleSheet, Text, TouchableNativeFeedback, View, Button, SafeAreaView, TextInput, Pressable  } from 'react-native'
import colorController from '../../classes/colors/CollorController'

const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.loginScreen}>
            <View style={styles.blockContainer}>
                <View style={styles.block1}></View>
                <View style={styles.block2}></View>
                <View style={styles.block3}></View>
                <View style={styles.block4}></View>
                <View style={styles.block5}></View>
                <View style={styles.block6}></View>
            </View>
            <View style={styles.credentialContainer}>
                <TextInput 
                    style={styles.credentialInput}
                    autoCorrect={false}
                    placeholder='Username'
                />
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Join</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
const borderWidth = 2
const styles = StyleSheet.create({
    loginScreen:{
        width: '100%',
        height: '100%',
        backgroundColor: colorController.second,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    credentialContainer:{
        position: 'absolute',
        width: '100%',
        top: '50%'
    },
    credentialInput:{
        width: '100%',
        height: 50,
        backgroundColor: colorController.third,
        textAlign: 'center',
 
        fontSize: 16,
        fontWeight: 'bold',
    },
    button:{
        alignItems: 'center',
        width: '100%',
        height: 50,
        backgroundColor: colorController.fourth,
        justifyContent: 'flex-end',
        marginBottom: 10
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 50
    },
    blockContainer:{
        flex: 1,
        flexDirection: 'row',
        textAlign: 'center',
        height: 75,
        alignItems: 'center',
        marginBottom: 350,

    },
    block1:{
        flex: 1,
        textAlign: 'center',
        width: 75,
        height: 75,
        backgroundColor: colorController.first,
        borderWidth: borderWidth,
        borderColor: colorController.black
    },
    block2:{
        flex: 1,
        textAlign: 'center',
        width: 75,
        height: 75,
        backgroundColor: colorController.second,
        borderWidth: borderWidth,
        borderColor: colorController.black
    },
    block3:{
        flex: 1,
        textAlign: 'center',
        width: 75,
        height: 75,
        backgroundColor: colorController.third,
        borderWidth: borderWidth,
        borderColor: colorController.black
    },
    block4:{
        flex: 1,
        textAlign: 'center',
        width: 75,
        height: 75,
        backgroundColor: colorController.fourth,
        borderWidth: borderWidth,
        borderColor: colorController.black
    },
    block5:{
        flex: 1,
        textAlign: 'center',
        width: 75,
        height: 75,
        backgroundColor: colorController.fifth,
        borderWidth: borderWidth,
        borderColor: colorController.black
    },
    block6:{
        flex: 1,
        textAlign: 'center',
        width: 75,
        height: 75,
        backgroundColor: colorController.sixth,
        borderWidth: borderWidth,
        borderColor: colorController.black
    }
})

export default LoginScreen