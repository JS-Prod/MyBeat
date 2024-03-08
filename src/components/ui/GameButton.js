import { View, StyleSheet, TouchableWithoutFeedback } from "react-native"
import colorController from "../../classes/colors/CollorController.js"

function pressButton(index){
    console.log('Pressing Button: ' + index)
}
const GameButton = ({index}) => {
    return(
        <TouchableWithoutFeedback onPress={()=>pressButton(index)}>
            <View style={getStyles().gameButton} />
        </TouchableWithoutFeedback>
    )
}

const getStyles = () => {
    return StyleSheet.create({
        gameButton:{
            height: 100,
            width: 100, 
            backgroundColor: colorController.fourth,
            margin: 10
        }
    })
}

export default GameButton