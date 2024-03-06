import { StyleSheet, Text, View } from 'react-native'
import colorController from '../../classes/colors/CollorController'

const RegisterScreen = () => {
    return (
        <View style={styles.registerScreen}>
            <Text>This is the REGISTER screen.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    registerScreen:{
        width: '100%',
        height: '100%',
        backgroundColor: colorController.fifth,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default RegisterScreen