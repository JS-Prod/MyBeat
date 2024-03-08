import { Audio } from 'expo-av'
import soundLibrary from './SoundLibrary'

class AudioMixer {
    constructor(soundLibrary){
        Object.entries(soundLibrary).forEach(async ([name, sound]) => {
            try{
                this[name] = await Audio.Sound.createAsync(sound)
            } catch (err){
                console.error('Audio Mixer Error: ' + err)
            }
        })
    }

    async playSound(soundName){
        await this[soundName].sound.playAsync()
        await this[soundName].sound.setPositionAsync(0)
    }
}

const audioMixer = new AudioMixer(soundLibrary)

export default audioMixer
