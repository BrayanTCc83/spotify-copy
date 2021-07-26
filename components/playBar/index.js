import React from 'react'
import TextView from '../text'
import { View, StyleSheet } from 'react-native'
import IconItem from '../icons'
import { backgroundGray } from '../../constansts'

const PlayBar = ( props ) => {
    const playBar = StyleSheet.create({
        container : {
            width: 410,
            height : 70,
            backgroundColor : backgroundGray,
            alignItems : 'center',
            overflow : 'hidden',
            justifyContent : 'center',
            flexDirection : 'row'
        },
        songInfo : {
            width : 238,
            height : 70,
            justifyContent : 'center',
            padding : 5
        },
        image : {
            width : 70,
            height : 70,
            backgroundColor : 'white'
        }
    })
    return(
        <View style={ playBar.container } >
            <View style={ playBar.image } />
            <View style={ playBar.songInfo } >
                <TextView type='small' text='Nombre de la canción' />
                <TextView type='sub' color='gray' text='Artista' />
            </View>
            <IconItem icon='HEART_VOID' />
            <IconItem icon='PLAY' />
        </View>
    )
}
export default PlayBar