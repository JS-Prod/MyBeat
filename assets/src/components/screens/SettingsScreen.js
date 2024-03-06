import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable  } from 'react-native'
import { useEffect, useState, useContext} from 'react'
import colorController from '../../classes/colors/CollorController'
import ThemePicker from '../ui/ThemePicker'
import PaletteViewer from '../ui/PaletteViewer'
import { PaletteContext } from '../../../../App'

const SettingsScreen = ({route}) => {
    const currentPalette = useContext(PaletteContext)

    useEffect(()=>{
        console.log('Rerender setting screen.')
    }, [currentPalette])

    return (
        <SafeAreaView style={getStyles().settingsScreen}>
            <ThemePicker setPaletteName={route.params.setPaletteName}/>
            <PaletteViewer/>
        </SafeAreaView>
    )
}

const getStyles = () => {
    return StyleSheet.create({
        settingsScreen:{
            width: '100%',
            height: '100%',
            backgroundColor: colorController.second,
            justifyContent: 'center'
        }
    })
}

export default SettingsScreen