import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Audio } from 'expo-av'
import logoSound from '../../../assets/audio-files/WirmiAudioLogo.mp3'

const LogoScreen = () => {
    const navigator = useNavigation()
    const [logoText, setLogoText] = useState ('')
    const pause = 1000

    useEffect(()=>{
        const sound = async () => {
            const { sound: audioSound } = await Audio.Sound.createAsync(logoSound)
            audioSound.playAsync()
        }
        sound()
        setTimeout(()=>{
            navigator.navigate('Login')
        }, 5500)
        setLogoText(prev => prev + 'W')
        setTimeout(()=>{
            setLogoText(prev => prev + 'i')
            setTimeout(()=>{
                setLogoText(prev => prev + 'r')
                setTimeout(()=>{
                    setLogoText(prev => prev + 'm')
                    setTimeout(()=>{
                        setLogoText(prev => prev + 'i')
                    },pause)
                },pause)
            },pause)
        },pause)
    },[])

    return (
        <View style={getStyles().logoScreen}>
            <Text style={getStyles().logoText}>{logoText}</Text>
        </View>
    )
}

const getStyles = () => {
    return StyleSheet.create({
        logoScreen:{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        },
        logoText:{
            fontSize:70,
            fontWeight:'500'
        }
    })
}

export default LogoScreen