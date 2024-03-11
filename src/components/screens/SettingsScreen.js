import { StyleSheet, SafeAreaView } from 'react-native'
import { useEffect, useContext} from 'react'
import { AppContext } from '../game-controller/AppController.js'

import ThemePicker from '../ui/ThemePicker'
import PaletteViewer from '../ui/PaletteViewer'

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
            backgroundColor: appContext.currentPalette.second,
            justifyContent: 'center'
        }
    })
}

export default SettingsScreen