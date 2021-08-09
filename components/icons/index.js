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
import Plus from '../../assets/icons/plus-solid.svg'
import Exchange from '../../assets/icons/exchange-alt-solid.svg'
import Border from '../../assets/icons/border-all-solid.svg'
import List from '../../assets/icons/list-solid.svg'
import Step from '../../assets/icons/step-forward-solid.svg'
import Minus from '../../assets/icons/minus-solid.svg'
import Back from '../../assets/icons/angle-left-solid.svg'
import Ellipsis from '../../assets/icons/ellipsis-v-solid.svg'

const IconItem = ( props ) => {

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
      color : 'white',
      transform : [{
        rotate : props.rotate ? `${props.rotate}deg` : '0deg'
      }],
      ...props.iconStyle
    }
  })

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
      case 'PAUSE':
        return <Pause {...style} />
      case 'HEART_FILL':
        return <HeartFill {...style} />
      case 'HEART_VOID':
        return <HeartVoid {...style} />
      case 'PLUS':
        return <Plus {...style} /> 
      case 'EXCHANGE':
        return <Exchange {...style} /> 
      case 'BORDER':
        return <Border {...style} /> 
      case 'LIST':
        return <List {...style} /> 
      case 'STEP':
        return <Step {...style} /> 
      case 'MINUS':
        return <Minus {...style} /> 
      case 'BACK':
        return <Back {...style} /> 
      case 'ELLIPSIS':
        return <Ellipsis {...style} /> 
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
export default IconItem