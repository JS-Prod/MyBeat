import React, { useState, useEffect } from "react"
import colorPalettes from "../../classes/colors/ColorPalettes"
import * as Haptics from 'expo-haptics'

export const AppContext = React.createContext()

const AppController = ({children}) => {

    const [currentPalette, setCurrentPalette] = useState(colorPalettes['monochromatic-burnt-blue'])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [hasActiveRequest, setHasActiveRequest] = useState(false)
    const [loginError, setLoginError] = useState(null)
    const [registerError, setRegisterError] = useState(null)
    const [showResetModal, setShowResetModal] = useState(false)

    useEffect(()=>{
        console.log('Current palette:', currentPalette)
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    },[currentPalette.name])

    useEffect(()=>{
        if(hasActiveRequest) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
            setLoginError(null)
            setRegisterError(null)
        }
    },[hasActiveRequest])

    return(
    <AppContext.Provider value={{
        currentPalette: currentPalette,
        setCurrentPalette: setCurrentPalette,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        hasActiveRequest: hasActiveRequest,
        setHasActiveRequest: setHasActiveRequest,
        loginError: loginError,
        setLoginError: setLoginError,
        registerError: registerError,
        setRegisterError: setRegisterError,
        showResetModal: showResetModal,
        setShowResetModal: setShowResetModal,
    }}>
        {children}
    </AppContext.Provider>
    )
}

export default AppController