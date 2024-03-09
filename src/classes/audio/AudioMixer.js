import { Audio } from 'expo-av'
import soundLibrary from './SoundLibrary.js'

class AudioMixer {
    constructor(soundLibrary){
        console.log('Building Audio Mixer')
        Object.entries(soundLibrary).forEach(async ([name, sound]) => {
            try{
                console.log('Building Audio Mixer Part: ' + name)
                this[name] = await Audio.Sound.createAsync(sound)
            } catch (err){
                console.error('Audio Mixer Error: ' + err)
            }
        })
    }

    async playSound(soundName){
        try{
            await this[soundName].sound.playAsync()
            await this[soundName].sound.setPositionAsync(0)
        } catch (err) {
            console.log('Error playing sound: ' + err)
        }
    }
}

const audioMixer = new AudioMixer(soundLibrary)

export default audioMixer
