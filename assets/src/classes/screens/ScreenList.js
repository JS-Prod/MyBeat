import LoginScreen from "../../components/screens/LoginScreen.js"
import RegisterScreen from "../../components/screens/RegisterScreen.js"
import HomeScreen from "../../components/screens/HomeScreen.js"
import SocialScreen from "../../components/screens/SocialScreen.js"
import SettingsScreen from "../../components/screens/SettingsScreen.js"

const screenList = {
    login: LoginScreen,
    register: RegisterScreen,
    home: HomeScreen,
    social: SocialScreen,
    settings: SettingsScreen
}

export default screenList