class ColorPalette{
    constructor(name, first, second, third, fourth, fifth, sixth){
        this.name = name
        this.first = first
        this.second = second
        this.third = third
        this.fourth = fourth
        this.fifth = fifth
        this.sixth = sixth
        this.white = '#FFFFFF'
        this.black = '#000000'
    }
}

const colorPalettes = {
    'bold-autum': new ColorPalette('bold-autum', '#E63B00', '#E68A00', '#E56500', '#E81502', '#E6A90E', '#E87B27'),
    'complementary-beach-house': new ColorPalette('complementary-beach-house', '#B3D8E8', '#A89783', '#E8CFB2', '#668693', '#695237', '#17323E'),
    'complementary-poison-grass': new ColorPalette('complementary-poison-grass', '#DBBFD5', '#769E6C', '#C8DBC3', '#85427A', '#527F47', '#664461'),
    'pastel-warm-tan': new ColorPalette('pastel-warm-tan', '#E6A77A', '#E6C67A', '#E6B97A', '#E8977D', '#E5D687', '#E8CCA2'),
    'pastel-teal-blue': new ColorPalette('pastel-teal-blue', '#7AE6DC', '#7AAAE6', '#7ACCE6', '#7DE8BA', '#7A88E6', '#A3D9E9'),
    'pastel-pale-green': new ColorPalette('pastel-pale-green', '#C8E6C3', '#C3E6D7', '#C4E6CC', '#D9E8C8', '#CCE6E3', '#B5E8C1'),
    'pastel-purple': new ColorPalette('pastel-purple', '#C6C3E8', '#DEC3E8', '#D2C3E9', '#C7D0EB', '#E8D1E6', '#CDB9EB'),
    'square-dirty-royal': new ColorPalette('square-dirty-royal', '#CAA2DB', '#A2D6DB', '#DCBBA3', '#CDDBA4', '#867162', '#4F335C'),
    'monochromatic-burnt-cherry': new ColorPalette('monochromatic-burnt-cherry', '#BE8D89', '#935752', '#E8D5D3', '#692E29', '#3E120E', '#420500'),
    'monochromatic-burnt-blue': new ColorPalette('monochromatic-burnt-blue', '#89ADBE', '#527E93', '#D3E1E8', '#295469', '#0E2F3E', '#002D42'),
    'monochromatic-olive': new ColorPalette('monochromatic-olive', '#B9BE89', '#8E9352', '#E6E8D3', '#636929','#393D0E', '#3E4303'),
    'monochromatic-green-blue': new ColorPalette('monochromatic-green-blue', '#89BEAD', '#52937E', '#D3E8E1', '#296954', '#0E3E2F', '#00432E'),
}

export default colorPalettes