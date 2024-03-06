import screenList from "./ScreenList"

class ScreenController{
    constructor(){
        this.currentScreen = screenList.login
    }

    getScreen(){
        return this.currentScreen
    }

    setScreen(screen){
        this.currentScreen = screen
    }
}

const screenController = new ScreenController()
screenController.setScreen(screenList.login)
export default screenController
