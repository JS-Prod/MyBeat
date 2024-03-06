import LoginScreen from "../../components/screens/LoginScreen.js"
import RegisterScreen from "../../components/screens/RegisterScreen.js"
import HomeScreen from "../../components/screens/HomeScreen.js"
import SocialScreen from "../../components/screens/SocialScreen.js"

const screenList = {
    login: LoginScreen(),
    register: RegisterScreen(),
    home: HomeScreen(),
    social: SocialScreen()
}

export default screenList