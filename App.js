import GameController from './src/components/game-controller/GameController.js'
import AppController from './src/components/game-controller/AppController.js'
import LeaderboardController from './src/components/game-controller/LeaderboardController.js'
import ScreenDrawer from './ScreenDrawer.js'


//TODO
//1. Add waiting state and haptic feedback after sending requests 
//2. Impliment forgot password functionality

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