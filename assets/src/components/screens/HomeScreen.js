import { StyleSheet, Text, View } from 'react-native'
import colorController from '../../classes/colors/CollorController'

const HomeScreen = () => {
    return (
        <View style={getStyles().homeScreen}>
            <Text>This is the HOME screen.</Text>
        </View>
    )
}

const getStyles = () => {
    return StyleSheet.create({
        homeScreen:{
            width: '100%',
            height: '100%',
            backgroundColor: colorController.first,
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
}


export default HomeScreen