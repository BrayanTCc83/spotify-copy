import React from 'react'
import { View, StyleSheet } from 'react-native'
import { backgroundColor, cardFill, shadowColor } from '../../constansts'
import Button from '../button'
import IconItem from '../icons'
import TextView from '../text'

const LibraryHeader = () => {

    const libraryHeader = StyleSheet.create({
      container : {
        width : 410,
        height : 120,
        padding : 10,
        backgroundColor : backgroundColor,
        borderBottomColor : shadowColor,
        borderBottomWidth : 2,
        borderBottomStartRadius : 2
      },
      section : {
        flexDirection : 'row'
      },
      image : {
        width : 50,
        height : 50,
        backgroundColor : cardFill,
        margin : 5,
        borderRadius : 30
      }
    })

    return(
        <View style ={ libraryHeader.container } >
          <View style = { libraryHeader.section } >
            <View style ={ libraryHeader.image } />
            <TextView text='Tu librería' type='h1' maxSize = {220} />
            <IconItem icon='SEARCH' />
            <IconItem icon='PLUS' />
          </View>
          <View style = { libraryHeader.section } >
            <Button text='Playlist' />
            <Button text='Artist' />
          </View>
        </View>
    )
}

export default LibraryHeader