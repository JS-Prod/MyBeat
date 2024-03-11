import React, { useState, useEffect } from "react"
import colorPalettes from "../../classes/colors/ColorPalettes"
import * as Haptics from 'expo-haptics'

export const AppContext = React.createContext()

const AppController = ({children}) => {
    const [currentPalette, setCurrentPalette] = useState(colorPalettes['complementary-beach-house'])

    useEffect(()=>{
        console.log('Current palette:', currentPalette)
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    },[currentPalette.name])

    return(
    <AppContext.Provider value={{
        currentPalette: currentPalette,
        setCurrentPalette: setCurrentPalette
    }}>
        {children}
    </AppContext.Provider>
    )
}

export default AppController