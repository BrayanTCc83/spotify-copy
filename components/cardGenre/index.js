import React from 'react'
import { View, StyleSheet } from 'react-native'
import { transparent, cardFill } from '../../constansts'
import TextView from '../text'

const CardGenre = ( props ) => {
    const cardGenre = StyleSheet.create({
        container : {
            width : 190,
            height : 80,
            backgroundColor : transparent,
            borderRadius : 10,
            margin : 5,
            display : 'flex',
            flexDirection : 'row',
            alignContent : 'flex-start',
            padding : 5,
            overflow : 'hidden'
        },
        image : {
            position : 'absolute',
            width : 70,
            height: 70,
            top : 10,
            left : 110,
            backgroundColor : cardFill,
            borderRadius : 10,
            transform : [{
                rotate : '45deg'
            }]
        } 
    })

    return(
        <View style={ cardGenre.container }>
            <View style={ cardGenre.image } />
            <TextView type='small' text='Genre' />
        </View>
    )
}

export default CardGenre