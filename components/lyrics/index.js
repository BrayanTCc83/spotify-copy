import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import TextView from '../text'
import { textColor } from '../../constansts'

const Lyrics = ( props ) => {
    return(
        <View style={ lyrics.container } >
            <TextView type='h3' text='Lyrics' />
            <Text style={ lyrics.text } children='These are the lyrics from song' />
        </View>
    )
}

const lyrics = StyleSheet.create({
    container : {
      width : 350,
      height : 450,
      backgroundColor : 'blue',
      borderRadius : 20,
      padding : 10
    },
    text : {
      fontSize : 28,
      color : textColor,
      fontWeight : 'bold'
    }
})

export default Lyrics