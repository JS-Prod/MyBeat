import GameController from './src/components/game-controller/GameController.js'
import AppController from './src/components/game-controller/AppController.js'
import LeaderboardController from './src/components/game-controller/LeaderboardController.js'
import ScreenDrawer from './src/components/screens/ScreenDrawer.js'
import { StatusBar } from 'expo-status-bar'


//TODO
//0. Splash screen for logo + theme
//1. Add playback speed and game speed control in settings 
//5. Integrate AD mob
//6. Drop-down plaette selecter/audio playback/haptics arent working on iOS

export default function App() {
  return (
    <AppController>
    <LeaderboardController>
    <GameController>
      <StatusBar style='light'/>     
      <ScreenDrawer/>
    </GameController>
    </LeaderboardController>
    </AppController>
  )
}