import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React, { useEffect, useState } from 'react'

import HomeScreen from './src/components/screens/HomeScreen.js'
import LoginScreen from './src/components/screens/LoginScreen.js'
import RegisterScreen from './src/components/screens/RegisterScreen.js'
import SocialScreen from './src/components/screens/SocialScreen.js'
import SettingsScreen from './src/components/screens/SettingsScreen.js'
import GameScreen from './src/components/screens/GameScreen.js'

import GameController from './src/components/game-controller/GameController.js'

//TODO: 
//Login/Register => Home/Play/Settings/Leaderboard
//ValidatorContext
//GameOverCompoennt
//GameTimer
//SequenceController
//ScoreController


const Drawer = createDrawerNavigator()
export const PaletteContext = React.createContext()

import audioMixer from './src/classes/audio/AudioMixer.js'

export default function App() {
  const [paletteName, setPaletteName] = useState(null)

  useEffect(()=>{
    console.log('Rerender entire component tree.')
    audioMixer.playSound('testClick1')
  },[paletteName])

  //Cordova, Evan Bacon

  return (
      <NavigationContainer>
        <GameController>
        <PaletteContext.Provider value={paletteName}>
            <Drawer.Navigator screenOptions={{backBehavior: 'none', swipeEnabled: false}}>
              <Drawer.Screen name='Login' component={LoginScreen}/>
              <Drawer.Screen name='Register' component={RegisterScreen}/>
              <Drawer.Screen name='Home' component={HomeScreen}/>
              <Drawer.Screen name='Game' component={GameScreen} options={{headerShown: false, swipeEnabled: false}}/>
              <Drawer.Screen name='Social' component={SocialScreen}/>
              <Drawer.Screen name='Settings' component={SettingsScreen} initialParams={{setPaletteName: setPaletteName}}/>
            </Drawer.Navigator>
        </PaletteContext.Provider>
        </GameController>
      </NavigationContainer>
  )
}
