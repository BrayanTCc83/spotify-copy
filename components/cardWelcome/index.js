import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useDesignContext } from '../../providers/design'
import { transparent, cardFill } from '../../constansts'
import TextView from '../text'

const CardWelcome = ( props ) => {
  const { width } = useDesignContext()
  const cardWidth = ( width - 30 ) / 2

  const cardWelcome = StyleSheet.create({
    container : {
      width :  cardWidth,
      height : 80,
      backgroundColor : transparent,
      borderRadius : 10,
      margin : 5,
      display : 'flex', 
      flexDirection : 'row',
      alignItems : 'center',
      overflow : 'hidden'
    },
    image : {
      width : 80,
      height: 80,
      backgroundColor : cardFill,
      borderTopLeftRadius : 10,
      borderBottomLeftRadius : 10
    }
  })

  return (
      <View style={ cardWelcome.container }>
        <View style={ cardWelcome.image } /> 
        <TextView text='This is the welcome card' type='small' maxSize={ cardWidth - 80 } />
      </View>
  )
}

export default CardWelcome