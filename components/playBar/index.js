import React from 'react'
import TextView from '../text'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import IconItem from '../icons'
import { backgroundGray } from '../../constansts'
import { useNavigation } from '@react-navigation/core'
import ROUTES from '../../router/routes'
import { useDesignContext } from '../../providers/design'

const PlayBar = ( props ) => {
    const navigation = useNavigation()
    const { width } = useDesignContext()

    const playBar = StyleSheet.create({
        container : {
            width: width,
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

    const goToSongView = () => { 
        navigation.navigate( ROUTES.PlaySong )
    }

    return(
        <TouchableOpacity style={ playBar.container } onPress={ goToSongView } >
            <View style={ playBar.image } />
            <View style={ playBar.songInfo } >
                <TextView type='small' text='Nombre de la canción' />
                <TextView type='sub' color='gray' text='Artista' />
            </View>
            <IconItem icon='HEART_VOID' />
            <IconItem icon='PLAY' />
        </TouchableOpacity>
    )
}
export default PlayBar