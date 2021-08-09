import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { backgroundColor, textColor } from '../../constansts'
import IconItem from '../icons'

const SongControllers = ( props ) => {
    const [ isPlaying, setPlaying ] = useState(false)
    const [ icon, setIcon ] = useState( 'PLAY' )

    const ControllersStyle = StyleSheet.create({
        controllers : {
            flexDirection : 'row',
            alignItems : 'center',
            margin : 10
        },
        centralIconContainer : {
            width : 60,
            height : 60,
            justifyContent: 'center',
            alignItems : 'center',
            borderRadius : 50,
            borderWidth : 1,
            borderColor : textColor,
            backgroundColor : isPlaying ? backgroundColor : textColor 
        },
        centralIcon : {
            color : isPlaying ? textColor : backgroundColor
        },
        circle : {
            borderRadius : 100,
            borderWidth : 1,
            borderColor : textColor
        }
    })

    const changePlaying = () => {
        setPlaying( !isPlaying )
        changeIcon()
    }

    const changeIcon = () => {
        setIcon( isPlaying ? 'PAUSE' : 'PLAY' )
    }

    return (
        <View style= { ControllersStyle.controllers } >
            <IconItem icon='HEART_VOID' />
            <IconItem icon='STEP' rotate={ 180 } />
            <View style={ ControllersStyle.centralIconContainer } >
                <IconItem icon={ icon } iconStyle = { ControllersStyle.centralIcon } onClick={ changePlaying } />
            </View>
            <IconItem icon='STEP' />
            <IconItem icon='MINUS' iconStyle={ ControllersStyle.circle } />
        </View>
    )
}

export default SongControllers