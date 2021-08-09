import React from 'react'
import { View, StyleSheet } from 'react-native'
import BaseScreen from '../Base'
import Lyrics from '../../components/lyrics'
import IconItem from '../../components/icons'
import SongControllers from '../../components/controllers'
import TextView from '../../components/text'
import { useNavigation } from '@react-navigation/core'

const PlaySongScreen = ( props ) => {
    const navigation = useNavigation()

    const PlaySongStyle = StyleSheet.create({
        header : {
            width: 400,
            flexDirection : 'row',
            paddingVertical : 15
        },
        subHeader : {
            width: 300,
            alignItems : 'center'
        },
        image : {
            width : 300,
            height: 300,
            backgroundColor : 'white'
        },
        info : {
            margin : 5,
            width: 400,
            paddingHorizontal : 20
        }
    })

    return(
        <BaseScreen>
            <View style={ PlaySongStyle.header } >
                <IconItem icon='BACK' rotate ={ 270 } onClick={ ()=>navigation.goBack() } />
                <View style={ PlaySongStyle.subHeader } >
                    <TextView text='REPRODUCIENDO CANCION DESDE' type='small' noMargin />
                    <TextView text='ARTIST' noMargin />
                </View>
                <IconItem icon='ELLIPSIS' />
            </View>
            <View style={ PlaySongStyle.image } />
            <View style = { PlaySongStyle.info } >
                <TextView text='Nombre de la canción' type='h1' noMargin />
                <TextView text='Artista' color='gray' type='h2' noMargin />
            </View>
            <SongControllers/>
            <Lyrics/>
        </BaseScreen>
    )
}

export default PlaySongScreen