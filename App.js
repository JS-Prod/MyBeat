import { View } from 'react-native'
import screenController from './assets/src/classes/screens/ScreenController'

export default function App() {
  return (
      <View>
        {screenController.getScreen()}
      </View>
  )
}
