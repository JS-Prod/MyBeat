import { View } from 'react-native'
import HomeScreen from './src/components/screens/HomeScreen'
import SocialScreen from './src/components/screens/SocialScreen'
import screenController from './src/classes/screens/ScreenController'

export default function App() {
  return (
      <View>
        {screenController.getScreen()}
      </View>
  )
}
