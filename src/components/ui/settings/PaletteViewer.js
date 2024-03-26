import { View, StyleSheet } from "react-native"
import { useContext } from "react"
import { AppContext } from "../../game-controller/AppController.js"

const PaletteViewer = () => {
    const appContext = useContext(AppContext)

    return(
    <View style={getStyles(appContext).blockContainer}>
        <View style={getStyles(appContext).block1}></View>
        <View style={getStyles(appContext).block2}></View>
        <View style={getStyles(appContext).block3}></View>
        <View style={getStyles(appContext).block4}></View>
        <View style={getStyles(appContext).block5}></View>
        <View style={getStyles(appContext).block6}></View>
    </View>
    )
}

const getStyles = (appContext) => {
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
            backgroundColor: appContext.currentPalette.first,
            borderWidth: borderWidth,
            borderColor: appContext.currentPalette.black
        },
        block2:{
            flex: 1,
            textAlign: 'center',
            width: 75,
            height: 75,
            backgroundColor: appContext.currentPalette.second,
            borderWidth: borderWidth,
            borderColor: appContext.currentPalette.black
        },
        block3:{
            flex: 1,
            textAlign: 'center',
            width: 75,
            height: 75,
            backgroundColor: appContext.currentPalette.third,
            borderWidth: borderWidth,
            borderColor: appContext.currentPalette.black
        },
        block4:{
            flex: 1,
            textAlign: 'center',
            width: 75,
            height: 75,
            backgroundColor: appContext.currentPalette.fourth,
            borderWidth: borderWidth,
            borderColor: appContext.currentPalette.black
        },
        block5:{
            flex: 1,
            textAlign: 'center',
            width: 75,
            height: 75,
            backgroundColor: appContext.currentPalette.fifth,
            borderWidth: borderWidth,
            borderColor: appContext.currentPalette.black
        },
        block6:{
            flex: 1,
            textAlign: 'center',
            width: 75,
            height: 75,
            backgroundColor: appContext.currentPalette.sixth,
            borderWidth: borderWidth,
            borderColor: appContext.currentPalette.black
        }
    })
}

export default PaletteViewer