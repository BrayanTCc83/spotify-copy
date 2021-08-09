import React from 'react'
import { View, StyleSheet } from 'react-native'
import TextView from '../text'
import { cardFill, transparent } from '../../constansts'
import { useDesignContext } from '../../providers/design'

const CardSquare = ( props ) => {
  const { width } = useDesignContext()
  const cardWidth = ( width - 50 ) /2

  const cardSquare = StyleSheet.create({
    container : {
      margin : 10,
      width :  cardWidth,
      height : 240,
      overflow : 'hidden'
    },
    image : {
      width : cardWidth,
      height : cardWidth,
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

  return(
      <View style={ cardSquare.container }>
          {
              props.hasFrame ? 
                  <View style={ cardSquare.frameBorder }/>
              :null
          }
          <View style={ cardSquare.image } />
          <TextView type='small' text='This is the podcast author name' />
          <TextView type='sub' text='This is the artist' color='gray' />
      </View>
  )
}

export default CardSquare