import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from './src/components/screens/HomeScreen.js'
import LoginScreen from './src/components/screens/LoginScreen.js'
import RegisterScreen from './src/components/screens/RegisterScreen.js'
import StoreScreen from './src/components/screens/StoreScreen.js'
import LeaderboardScreen from './src/components/screens/LeaderboardScreen.js'
import SettingsScreen from './src/components/screens/SettingsScreen.js'
import GameScreen from './src/components/screens/GameScreen.js'

import { AppContext } from './src/components/game-controller/AppController.js'
import { useContext } from 'react'

const AppDrawer = createDrawerNavigator()
const ValidateDrawer = createDrawerNavigator()

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
                <AppDrawer.Screen name='Leaderboard' component={LeaderboardScreen}/>
                <AppDrawer.Screen name='Settings' component={SettingsScreen}/>
                <AppDrawer.Screen name='Game' component={GameScreen} options={{headerShown: false, drawerLabel: ()=>null}}/>
            </AppDrawer.Navigator> 
              :
            <ValidateDrawer.Navigator screenOptions={{backBehavior: 'none', 
                                                        swipeEnabled: false,
                                                        headerShown: false}}>
                <ValidateDrawer.Screen name='Login' component={LoginScreen}/>
                <ValidateDrawer.Screen name='Register' component={RegisterScreen}/>
            </ValidateDrawer.Navigator> }
        </NavigationContainer>
    )
}   

export default ScreenDrawer

