import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable  } from 'react-native'
import { useEffect, useState } from 'react'
import colorController from '../../classes/colors/CollorController'
import ThemePicker from '../ui/ThemePicker'
import PaletteViewer from '../ui/PaletteViewer'

const SettingsScreen = () => {
    const [paletteName, setPaletteName] = useState(colorController.name)

    useEffect(()=>{
        console.log('Rerender setting screen.')
    }, [paletteName])

    return (
        <SafeAreaView style={getStyles().settingsScreen}>
            <ThemePicker setPaletteName={setPaletteName}/>
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