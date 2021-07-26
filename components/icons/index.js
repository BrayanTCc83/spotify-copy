import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import TextView from '../text'

import Home from '../../assets/icons/home-solid.svg'
import Search from '../../assets/icons/search-solid.svg'
import Bookshelf from '../../assets/icons/bookshelf.svg'
import History from '../../assets/icons/history-solid.svg'
import Cog from '../../assets/icons/cog-solid.svg'
import HeartFill from '../../assets/icons/heart-solid.svg'
import HeartVoid from '../../assets/icons/heart-regular.svg'
import Play from '../../assets/icons/play-solid.svg'
import Pause from '../../assets/icons/pause-solid.svg'

const IconItem = ( props ) => {

    const Icon = ( style ) => {
      switch( props.icon ){
        case 'BOOKSHELF':
          return <Bookshelf {...style} /> 
        case 'SEARCH':
          return <Search {...style} />  
        case 'HISTORY':
          return <History {...style} />
        case 'COG':
          return <Cog {...style} />
        case 'PLAY':
          return <Play {...style} />
        case 'Pause':
          return <Pause {...style} />
        case 'HEART_FILL':
          return <HeartFill {...style} />
        case 'HEART_VOID':
          return <HeartVoid {...style} />
        default:
          return <Home {...style} />
      }
    }

    return(
      <TouchableOpacity onPress={ () => props.onClick ? props.onClick( props.data ) : () => {} } >
        <View style={ icons.item } >
          <Icon style = { icons.itemIcon } />
          {
            props.text ? 
            <TextView type='small' text={  props.text } /> 
            : null
          }
        </View>
      </TouchableOpacity>
    )
}

const icons = StyleSheet.create({
  item : {
    maxWidth : 60,
    height : 50,
    alignItems : 'center',
    justifyContent : 'center',
    margin : 10
  },
  itemIcon : {
    width : 30,
    height : 30,
    color : 'white'
  }
})

export default IconItem