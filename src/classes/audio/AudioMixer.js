import { Audio } from 'expo-av'
import soundLibrary from './SoundLibrary.js'

class AudioMixer {
    constructor(soundLibrary) {
        console.log('Building Audio Mixer')
        console.log('VERIFY LIBRARY: ' + JSON.stringify(soundLibrary,0,2))
        this.sounds = {}
        this.initializeSounds(soundLibrary)
    }

    async initializeSounds(soundLibrary) {
        for (const [name, sound] of Object.entries(soundLibrary)) {
            try {
                console.log('Building Audio Mixer Part: ' + name)
                const { sound: audioSound } = await Audio.Sound.createAsync(sound)
                this.sounds[name] = audioSound
            } catch (err) {
                console.error('Error Building Audio Mixer: ' + err)
            }
        }
    }

    async playSound(soundName) {
        try {
            const sound = this.sounds[soundName]
            if (sound) {
                await sound.playAsync()
                await sound.setPositionAsync(0)
            } else {
                console.error('Sound not found:', soundName)
            }
        } catch (err) {
            console.error('Error playing sound:', err)
        }
    }
}

const audioMixer = new AudioMixer(soundLibrary)
export default audioMixer