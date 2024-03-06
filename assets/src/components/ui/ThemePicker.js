import DropDownPicker from 'react-native-dropdown-picker'
import colorPalettes from '../../classes/colors/ColorPalettes'
import colorController from '../../classes/colors/CollorController'
import { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'


const ThemePicker = ({setPaletteName, setRerender}) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(null)
    const [items, setItems] = useState([...Object.keys(colorPalettes).map((value) => {return{label: value, value: value}})])

    useEffect(()=>{
        if(value){
            colorController.setPalette(colorPalettes[value])
            setPaletteName(colorController.name)
            setRerender(colorController.name)
        } else {
            setValue(colorController.name)
        }
    },[value])

    return(
        <View style={styles.themePickerContainer}>
            <Text style={styles.headingText}>Color Theme</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    themePickerContainer:{
        width: '100%',
        justifyContent: 'center',
        position: 'absolute'
    },
    headingText:{
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center'
        
    }
})

export default ThemePicker