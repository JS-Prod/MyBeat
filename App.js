import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native'

import HomeScreen from './src/components/screens/HomeScreen.js'
import LoginScreen from './src/components/screens/LoginScreen.js'
import RegisterScreen from './src/components/screens/RegisterScreen.js'
import SocialScreen from './src/components/screens/SocialScreen.js'
import SettingsScreen from './src/components/screens/SettingsScreen.js'
import GameScreen from './src/components/screens/GameScreen.js'

import audioMixer from './src/classes/audio/AudioMixer.js'

//TODO: 
//Login/Register => Home/Play/Settings/Leaderboard
//ValidatorContext
//GameOverCompoennt
//GameTimer
//SequenceController
//ScoreController


const Drawer = createDrawerNavigator()
export const PaletteContext = React.createContext()
export const PlaybackContext = React.createContext()
export const PlaybackIndexContext = React.createContext()

export default function App() {
  const [paletteName, setPaletteName] = useState(null)
  const [playbackNote, setPlaybackNote] = useState(null)

  useEffect(()=>{
    console.log('Rerender entire component tree.')
    audioMixer.playSound('testClick1')
  },[paletteName])

  useEffect(()=>{
    console.log('Playback Note: ' + JSON.stringify(playbackNote,0,2))
  },[playbackNote?.index])

  //Cordova, Evan Bacon

  return (
      <NavigationContainer>
        <PaletteContext.Provider value={paletteName}>
        <PlaybackContext.Provider value={playbackNote?.note}>
        <PlaybackIndexContext.Provider value={playbackNote?.index}>
            <Drawer.Navigator screenOptions={{backBehavior: 'none', swipeEnabled: false}}>
              <Drawer.Screen name='Login' component={LoginScreen}/>
              <Drawer.Screen name='Register' component={RegisterScreen}/>
              <Drawer.Screen name='Home' component={HomeScreen}/>
              <Drawer.Screen name='Game' component={GameScreen} initialParams={{setPlaybackNote: setPlaybackNote}} options={{headerShown: false, swipeEnabled: false}}/>
              <Drawer.Screen name='Social' component={SocialScreen}/>
              <Drawer.Screen name='Settings' component={SettingsScreen} initialParams={{setPaletteName: setPaletteName}}/>
            </Drawer.Navigator>
        </PlaybackIndexContext.Provider>
        </PlaybackContext.Provider>
        </PaletteContext.Provider>
      </NavigationContainer>
  )
}
