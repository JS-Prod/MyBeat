const chromaticScale = ['c','c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b']
const majPattern = [2, 2, 1, 2, 2, 2, 1]


function getMajorScaleNotes(index){
    const noteArray = [chromaticScale[index]]
    let currentIndex = index
    for(let i = 0; i < majPattern.length; i++){
        currentIndex += majPattern[i]
        if (currentIndex > 11) currentIndex -= 12
        noteArray.push(chromaticScale[currentIndex])
    }
    return noteArray
}
class MajorScales{
    constructor(){
        for(let i = 0; i < chromaticScale.length; i++){
            this[chromaticScale[i]] = getMajorScaleNotes(i)
        }
    }
}

class KeyController{
    constructor(){
        this.currentKey = null
        this.chromatic = chromaticScale
        this.major = new MajorScales()
    }

    selectRandomKey(){
        const randomIndex = (Math.floor(Math.random() * 12) + 1) - 1
        this.currentKey = this.major[Object.keys(this.major)[randomIndex]]
    }

    getNoteAtChromaticIndex(index){
        return chromaticScale[index]
    }
}

const keyController = new KeyController()

keyController.selectRandomKey()

export default keyController