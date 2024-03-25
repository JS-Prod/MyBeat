import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Pressable, View, Text, Image} from 'react-native'

import HomeScreen from './HomeScreen.js'
import LoginScreen from './LoginScreen.js'
import RegisterScreen from './RegisterScreen.js'
import StoreScreen from './StoreScreen.js'
import LeaderboardScreen from './LeaderboardScreen.js'
import SettingsScreen from './SettingsScreen.js'
import GameScreen from './GameScreen.js'

import { AppContext } from '../game-controller/AppController.js'
import { useContext } from 'react'

import forwardArrow from '../../../assets/icons/angle-right-icon.png'
import backArrow from '../../../assets/icons/angle-left-icon.png'


const AppDrawer = createDrawerNavigator()
const ValidateDrawer = createDrawerNavigator()


const CustomHeader = ({currentPalette}) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20}}>
      <Pressable onPress={() => back()} style={{flex: 1, backgroundColor: currentPalette.third, padding: 5, marginRight: 20, alignItems: 'center'}}>
        <Image source={backArrow} style={{ width: 24, height: 24 }} />
      </Pressable>
      <Pressable onPress={() => next()} style={{flex: 1, backgroundColor: currentPalette.third, padding: 5, marginLeft: 20, alignItems: 'center'}}>
        <Image source={forwardArrow} style={{ width: 24, height: 24 }} />
      </Pressable>
    </View>
)

function back(){

}

function next(){

}

const ScreenDrawer = () => {
  const appContext = useContext(AppContext)
  return (
    <NavigationContainer>
      {appContext.isLoggedIn ? 
      <AppDrawer.Navigator screenOptions={{backBehavior: 'none', 
                                          swipeEnabled: false,
                                          headerTitleAlign: 'left',
                                          headerTitleStyle:{fontSize:26},
                                          headerStyle:{backgroundColor: appContext.currentPalette.first}}}>
        <AppDrawer.Screen name='Home' component={HomeScreen} />
        <AppDrawer.Screen name='Store' component={StoreScreen} />
        <AppDrawer.Screen name='Leaderboard' 
                          component={LeaderboardScreen} 
                          options={() => ({
                            headerRight: () => (<CustomHeader  currentPalette={appContext.currentPalette}/>)
                          })}/>
        <AppDrawer.Screen name='Settings' component={SettingsScreen}/>
        <AppDrawer.Screen name='Game' component={GameScreen} options={{headerShown: false, drawerLabel: ()=>null}}/>
      </AppDrawer.Navigator> 
      :
      <ValidateDrawer.Navigator screenOptions={{backBehavior: 'none', 
                                                swipeEnabled: false,
                                                headerShown: false}}>
        <ValidateDrawer.Screen name='Login' component={LoginScreen}/>
        <ValidateDrawer.Screen name='Register' component={RegisterScreen}/>
      </ValidateDrawer.Navigator>}
    </NavigationContainer>
  )
}   

export default ScreenDrawer

