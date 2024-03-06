import { StyleSheet, Text, View } from 'react-native'
import colorController from '../../classes/colors/CollorController'

const SocialScreen = () => {
    return (
        <View style={styles.socialScreen}>
            <Text>This is the SOCIAL screen.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    socialScreen:{
        width: '100%',
        height: '100%',
        backgroundColor: colorController.sixth,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SocialScreen