import { View, StyleSheet } from "react-native"
import colorController from "../../classes/colors/CollorController.js"

const PaletteViewer = () => {
    return(
    <View style={getStyles().blockContainer}>
        <View style={getStyles().block1}></View>
        <View style={getStyles().block2}></View>
        <View style={getStyles().block3}></View>
        <View style={getStyles().block4}></View>
        <View style={getStyles().block5}></View>
        <View style={getStyles().block6}></View>
    </View>
    )
}

const getStyles = () => {
    const borderWidth = 2
    return StyleSheet.create({
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
}

export default PaletteViewer