import HomeScreen from "../../components/screens/HomeScreen.js"
import SocialScreen from "../../components/screens/SocialScreen.js"
import LoginScreen from "../../components/screens/LoginScreen.js"

class ScreenController{
    constructor(){
        this.currentScreen = LoginScreen()
    }

    getScreen(){
        return this.currentScreen
    }

    setScreen(screen){
        this.currentScreen = screen
    }
}

const screenController = new ScreenController()

export default screenController
