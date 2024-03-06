import { View } from 'react-native'
import screenController from './assets/src/classes/screens/ScreenController'
import screenList from './assets/src/classes/screens/ScreenList'

export default function App() {
  screenController.setScreen(screenList.settings)
  return (
      <View>
        {screenController.getScreen()}
      </View>
  )
}
