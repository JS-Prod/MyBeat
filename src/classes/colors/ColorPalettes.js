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
    'analogous-bold-autum': new ColorPalette('analogous-bold-autum', '#C76648', '#C79246', '#C77236', '#C75850', '#C7A248', '#C79978'),
    'analogous-warm-browns': new ColorPalette('analogous-warm-browns', '#C4938F', '#C4A791', '#C5C2C1', '#C4879C', '#C4AF8F', '#C47960'),
    'analogous-pastel-purple': new ColorPalette('analogous-pastel-purple', '#A39BC7', '#C09DC7', '#C1BAC8', '#939BC7', '#C79BBB', '#996BC7'),
    'complementary-beach-house': new ColorPalette('complementary-beach-house', '#B3D8E8', '#A89783', '#E8CFB2', '#668693', '#695237', '#17323E'),
    'complementary-poison-grass': new ColorPalette('complementary-poison-grass', '#DBBFD5', '#769E6C', '#C8DBC3', '#85427A', '#527F47', '#664461'),
    'compound-blue-dreary': new ColorPalette('compound-blue-dreary', '#A7B3C7', '#BEC7A5', '#ABA6C7', '#C7C3A5', '#4F4972', '#223047'),
    'monochromatic-burnt-cherry': new ColorPalette('monochromatic-burnt-cherry', '#BE8D89', '#935752', '#E8D5D3', '#692E29', '#3E120E', '#420500'),
    'monochromatic-burnt-blue': new ColorPalette('monochromatic-burnt-blue', '#89ADBE', '#527E93', '#D3E1E8', '#295469', '#0E2F3E', '#002D42'),
    'monochromatic-olive': new ColorPalette('monochromatic-olive', '#B9BE89', '#8E9352', '#E6E8D3', '#636929','#393D0E', '#3E4303'),
    'monochromatic-green-blue': new ColorPalette('monochromatic-green-blue', '#89BEAD', '#52937E', '#D3E8E1', '#296954', '#0E3E2F', '#00432E'),
    'pastel-warm-tan': new ColorPalette('pastel-warm-tan', '#E6A77A', '#E6C67A', '#E6B97A', '#E8977D', '#E5D687', '#E8CCA2'),
    'pastel-teal-blue': new ColorPalette('pastel-teal-blue', '#7AE6DC', '#7AAAE6', '#7ACCE6', '#7DE8BA', '#7A88E6', '#A3D9E9'),
    'pastel-pale-green': new ColorPalette('pastel-pale-green', '#C8E6C3', '#C3E6D7', '#C4E6CC', '#D9E8C8', '#CCE6E3', '#B5E8C1'),
    'split-complimentary-purple-moss': new ColorPalette('split-complimentary-purple-moss', '#D69CCA', '#B192D6', '#C1D6A0', '#41571D', '#571E4B', '#381D57'),
    'square-dirty-royal': new ColorPalette('square-dirty-royal', '#CAA2DB', '#A2D6DB', '#DCBBA3', '#CDDBA4', '#867162', '#4F335C'),
    'square-urban-pastel': new ColorPalette('square-urban-pastel', '#B7B6D1', '#B6D1C1', '#D1B7B5', '#D1CDB6', '#825855', '#424163'),
    'triad-vibrant-neutral': new ColorPalette('triad-vibrant-neutral', '#C49DC1', '#9DC4C0', '#C5BD9D', '#6F684A', '#472C45', '#595959'),
  
}

export default colorPalettes