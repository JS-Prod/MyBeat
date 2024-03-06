import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './assets/src/components/screens/HomeScreen.js'
import LoginScreen from './assets/src/components/screens/LoginScreen.js'
import RegisterScreen from './assets/src/components/screens/RegisterScreen.js'
import SocialScreen from './assets/src/components/screens/SocialScreen.js'
import SettingsScreen from './assets/src/components/screens/SettingsScreen.js'

const Drawer = createDrawerNavigator()

import { useEffect, useState } from 'react'

export default function App() {
  const [paletteName, setPaletteName] = useState(null)

  useEffect(()=>{
    console.log('Rerender entire component tree.')
  },[paletteName])

  return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='Login' component={LoginScreen}/>
          <Drawer.Screen name='Register' component={RegisterScreen}/>
          <Drawer.Screen name='Home' component={HomeScreen}/>
          <Drawer.Screen name='Social' component={SocialScreen}/>
          <Drawer.Screen name='Settings' component={SettingsScreen} initialParams={{setPaletteName: setPaletteName, paletteName: paletteName}}/>
        </Drawer.Navigator>
      </NavigationContainer>
  )
}
