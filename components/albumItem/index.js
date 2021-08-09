import React from 'react'
import { View, StyleSheet } from 'react-native'

const AlbumItem = ( props ) => {

    const AlbumItemStyle = StyleSheet.create({
        album : {
            height : 1000,
            width : 300,
            backgroundColor : 'white'
        }
    })

    return(
        <View style ={ AlbumItemStyle.album } ></View>
    )
}

export default AlbumItem