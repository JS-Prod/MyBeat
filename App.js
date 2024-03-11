import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from './src/components/screens/HomeScreen.js'
import LoginScreen from './src/components/screens/LoginScreen.js'
import RegisterScreen from './src/components/screens/RegisterScreen.js'
import SocialScreen from './src/components/screens/SocialScreen.js'
import SettingsScreen from './src/components/screens/SettingsScreen.js'
import GameScreen from './src/components/screens/GameScreen.js'

import GameController from './src/components/game-controller/GameController.js'
import AppController from './src/components/game-controller/AppController.js'

const Drawer = createDrawerNavigator()

export default function App() {
  //Cordova, Evan Bacon
  return (
      <NavigationContainer>
        <AppController>
        <GameController>
            <Drawer.Navigator screenOptions={{backBehavior: 'none', swipeEnabled: false}}>
              <Drawer.Screen name='Login' component={LoginScreen}/>
              <Drawer.Screen name='Register' component={RegisterScreen}/>
              <Drawer.Screen name='Home' component={HomeScreen}/>
              <Drawer.Screen name='Game' component={GameScreen} options={{headerShown: false, swipeEnabled: false}}/>
              <Drawer.Screen name='Social' component={SocialScreen}/>
              <Drawer.Screen name='Settings' component={SettingsScreen}/>
            </Drawer.Navigator>
        </GameController>
        </AppController>
      </NavigationContainer>
  )
}