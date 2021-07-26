import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import TextView from '../text'

const transparent = '#B4B4B477'
const cardFill = '#ff6600'

const CardWelcome = ( props ) => {
    return (
        <View style={ cardWelcome.container }>
          <View style={ cardWelcome.image } /> 
          <TextView text='This is the welcome card' type='small' maxSize={90} />
        </View>
    )
}

const cardWelcome = StyleSheet.create({
  container : {
    width : 190,
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

export default CardWelcome