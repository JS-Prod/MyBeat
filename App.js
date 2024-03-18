import GameController from './src/components/game-controller/GameController.js'
import AppController from './src/components/game-controller/AppController.js'
import LeaderboardController from './src/components/game-controller/LeaderboardController.js'
import ScreenDrawer from './ScreenDrawer.js'


//TODO
//(D)1. Navigation flow with buttons for Home > Game > Leaderboard > Settings.
//(D)2. Design the Login > Register screens and navigation flow.
//(D)3. Set up Login/Register fetch architecture 
//4. Host backend server and configure with env variables
//5. Verify and debug Login/Register flow
//6. Set up and debug leaderboard api requests
//7. Set up password reset
//8. Integrate AD mob

export default function App() {
  return (
        <AppController>
        <LeaderboardController>
        <GameController>
            <ScreenDrawer />
        </GameController>
        </LeaderboardController>
        </AppController>
  )
}