import { StyleSheet, SafeAreaView } from 'react-native'
import { useEffect, useContext} from 'react'
import { AppContext } from '../game-controller/AppController.js'

import ThemePicker from '../ui/settings/ThemePicker.js'
import PaletteViewer from '../ui/settings/PaletteViewer.js'

const SettingsScreen = () => {
   const appContext = useContext(AppContext)

    useEffect(()=>{
        console.log('Rerender setting screen for palette change.')
    },[appContext.currentPalette.name])

    return (
        <SafeAreaView style={getStyles(appContext).settingsScreen}>
            <ThemePicker/>
            <PaletteViewer/>
        </SafeAreaView>
    )
}

const getStyles = (appContext) => {
    return StyleSheet.create({
        settingsScreen:{
            width: '100%',
            height: '100%',
            backgroundColor: appContext.currentPalette.fourth,
            justifyContent: 'center'
        }
    })
}

export default SettingsScreen