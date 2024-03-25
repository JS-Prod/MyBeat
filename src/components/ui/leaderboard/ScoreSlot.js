import { useEffect, useState, useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { AppContext } from '../../game-controller/AppController'


const ScoreSlot = ({username, score, round, position='#...'}) => {
    const appContext = useContext(AppContext)

    return(
        <View style={getStyles(appContext, username ? username : null).scoreSlot}>
            <Text style={getStyles(appContext, username ? username : null).child}>{position}</Text>
            { username ? <Text style={getStyles(appContext, username ? username : null).child}>{username}</Text> : null}
            <Text style={getStyles(appContext, username ? username : null).child}>{score}</Text>
            <Text style={getStyles(appContext, username ? username : null).child}>{round}</Text>
        </View>
    )
}

const getStyles = (appContext, username=null) => StyleSheet.create({
    scoreSlot:{
        width: '100%',
        alignItems: 'center',
        height: 40,
        flexDirection: 'row',
        borderWidth: 1,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 2.5,
        marginTop: 2.5,
        backgroundColor: username ? appContext.currentPalette.third : appContext.currentPalette.sixth,
        justifyContent: 'space-between'
    },
    child:{
       fontSize: 19,
       fontWeight: '400',
       color: !username ? appContext.currentPalette.third : appContext.currentPalette.sixth,
    }
})

export default ScoreSlot