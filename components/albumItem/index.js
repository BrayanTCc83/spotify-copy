import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useDesignContext } from '../../providers/design'
import CardLibraryArtist from '../cardLibraryArtist'
import { useNavigation } from '@react-navigation/core'
import ROUTES from '../../router/routes'

const AlbumItem = ( props ) => {
    const { width } = useDesignContext()
    const Navigation = useNavigation()

    const AlbumItemStyle = StyleSheet.create({
        album : {
            width : width - 20
        }
    })

    const goToAlbum = () => {
        props.onPress ? props.onPress( props.url ) : Navigation.navigate( ROUTES.Album, props )
    }

    return(
        <View style ={ AlbumItemStyle.album } >
            <CardLibraryArtist mode={0} {...props} onPress={ goToAlbum } />
        </View>
    )
}

export default AlbumItem