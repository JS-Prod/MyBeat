import React, { useState, useEffect } from "react"
import colorPalettes from "../../classes/colors/ColorPalettes"
import * as Haptics from 'expo-haptics'

export const AppContext = React.createContext()

const AppController = ({children}) => {
    const [currentPalette, setCurrentPalette] = useState(colorPalettes['monochromatic-burnt-blue'])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loginError, setLoginError] = useState(null)
    const [registerError, setRegisterError] = useState(null)


    useEffect(()=>{
        console.log('Current palette:', currentPalette)
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    },[currentPalette.name])

    return(
    <AppContext.Provider value={{
        currentPalette: currentPalette,
        setCurrentPalette: setCurrentPalette,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        loginError: loginError,
        setLoginError: setLoginError,
        registerError: registerError,
        setRegisterError: setRegisterError,
    }}>
        {children}
    </AppContext.Provider>
    )
}

export default AppController