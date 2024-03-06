import colorPalettes from './ColorPalettes.js'

class ColorController{
    constructor(){
        this.name = null 
        this.first = null
        this.second = null
        this.third = null
        this.fourth = null
        this.fifth = null
        this.sixth = null
        this.black = null
        this.white = null
    }

    getPalette(){
        return this
    }

    setPalette(palette){
        this.name = palette.name 
        this.first = palette.first
        this.second = palette.second
        this.third = palette.third
        this.fourth = palette.fourth
        this.fifth = palette.fifth
        this.sixth = palette.sixth
        this.black = palette.black
        this.white = palette.white
    }

}

const colorController = new ColorController()
colorController.setPalette(colorPalettes['complementary-beach-house'])

export default colorController