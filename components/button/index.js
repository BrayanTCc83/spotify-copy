import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { textColor } from '../../constansts'
import TextView from '../text'

const Button = ( props ) =>{

    const buttons = StyleSheet.create({
      button : {
        width : 80,
        height : 30,
        borderRadius : 30,
        borderColor : textColor,
        borderWidth : 1,
        justifyContent : 'center',
        alignItems : 'center',
        margin : 5
      }
    })

    return(
        <TouchableOpacity style ={ buttons.button } >
            <TextView type='small' text = { props.text ? props.text : '' } />
        </TouchableOpacity>
    )
}

export default Button