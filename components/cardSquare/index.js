import React from 'react'
import { View, StyleSheet } from 'react-native'
import TextView from '../text'
import { cardFill, transparent } from '../../constansts'

const CardSquare = ( props ) => {
    return(
        <View style={ cardSquare.container }>
            {
                props.hasFrame ? 
                    <View style={ cardSquare.frameBorder }/>
                :null
            }
            <View style={ cardSquare.image } />
            <TextView type='small' text='This is the podcast author name' />
            <TextView type='sub' text='This is the artist' />
        </View>
    )
}

const cardSquare = StyleSheet.create({
  container : {
    margin : 10,
    width : 180,
    height : 240,
    overflow : 'hidden'
  },
  image : {
    width : 180,
    height : 180,
    backgroundColor : cardFill,
    zIndex : 1,
    borderRadius : 10
  },
  frameBorder : {
    position : 'absolute',
    width : 180,
    top : 0,
    left : 0,
    height : 180,
    zIndex : 2,
    backgroundColor : transparent
  }
})

export default CardSquare