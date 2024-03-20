import GameController from './src/components/game-controller/GameController.js'
import AppController from './src/components/game-controller/AppController.js'
import LeaderboardController from './src/components/game-controller/LeaderboardController.js'
import ScreenDrawer from './src/components/screens/ScreenDrawer.js'
import { StatusBar } from 'expo-status-bar'


//TODO
//2. Impliment forgot password functionality
//3. Verify and debug Login/Register flow
//4. Set up and debug leaderboard api requests
//5. Integrate AD mob
//6. Drop-down plaette selecter doesnt work on iOS
//99. Deal with mobile keyboard displace position:aboslute, bottom:0 componetns

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