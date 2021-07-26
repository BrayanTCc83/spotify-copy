import React from 'react'
import { View, StyleSheet } from 'react-native'
import TextView from '../text'
import { cardFill } from '../../constansts'

const CardArtist = ( props ) => {
    return(
        <View style={ cardArtist.container }>
            <View style={ cardArtist.image } />
            <TextView type='small' text='Artist' />
        </View>
    )
}

const cardArtist = StyleSheet.create({
  container :{
    margin : 5,
    width : 130,
    height : 160,
    justifyContent : 'center',
    alignItems : 'center'
  },
  image : {
    width : 130,
    height : 130,
    backgroundColor : cardFill,
    borderRadius : 75
  }
})

export default CardArtist