import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React, { useEffect, useState } from 'react'

import HomeScreen from './src/components/screens/HomeScreen.js'
import LoginScreen from './src/components/screens/LoginScreen.js'
import RegisterScreen from './src/components/screens/RegisterScreen.js'
import SocialScreen from './src/components/screens/SocialScreen.js'
import SettingsScreen from './src/components/screens/SettingsScreen.js'

import audioMixer from './src/classes/audio/AudioMixer.js'
import { Button } from 'react-native'


const Drawer = createDrawerNavigator()
export const PaletteContext = React.createContext()

export default function App() {
  const [paletteName, setPaletteName] = useState(null)

  useEffect(()=>{
    console.log('Rerender entire component tree.')
  },[paletteName])

  //Cordova, Evan Bacon

  return (
      <NavigationContainer>
        <PaletteContext.Provider value={paletteName}>
          <Drawer.Navigator>
            <Drawer.Screen name='Login' component={LoginScreen}/>
            <Drawer.Screen name='Register' component={RegisterScreen}/>
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name='Social' component={SocialScreen}/>
            <Drawer.Screen name='Settings' component={SettingsScreen} initialParams={{setPaletteName: setPaletteName}}/>
          </Drawer.Navigator>
          <Button title='button' onPress={()=>{
            console.log('CLICKED BUTTON 1')
            audioMixer.playSound('testClick1')
            }}/>
          <Button title='button' onPress={()=>{
            console.log('CLICKED BUTTON 2')
            audioMixer.playSound('testClick2')
            }}/>
        </PaletteContext.Provider>
      </NavigationContainer>
  )
}
