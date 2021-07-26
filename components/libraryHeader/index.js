import React from 'react'
import { View, StyleSheet } from 'react-native'
import Button from '../button'
import { shadowColor } from '../../constansts'

const LibraryHeader = () => {

    const libraryHeader = StyleSheet.create({
      container : {
        width : 410,
        height : 120,
        shadowColor : shadowColor, 
        shadowRadius : 3,
        shadowOffset : {
          height : 3, 
          width : 3
        }
      }
    })

    return(
        <View style ={ libraryHeader.container } >
            <Button text='Playlist' />
            <Button text='Artist' />
        </View>
    )    
}

export default LibraryHeader