import React from 'react'
import { Text, StyleSheet } from 'react-native'

const textColor = '#ffffff'
const textColorSecondary = '#C5C5C5'

const TextView = ( props ) => {
    const getStyleSheet = () => {
        let styleSheet = texts.content
        switch( props.type ){
            case 'h1' :
                styleSheet = texts.h1
                break
            case 'h2' :
                styleSheet = texts.h2
                break
            case 'h3' :
                styleSheet = texts.h3
                break
            case 'small' :
                styleSheet = texts.small
                break
            case 'sub' :
                styleSheet = texts.sub
                break
            default :
                styleSheet = texts.content
                break
        }
        return styleSheet
    }

    const textStandart = StyleSheet.create({
        h : {
            width : props.maxSize ? props.maxSize : 400,
            color : props.color && props.color === 'gray'? textColorSecondary : textColor ,
            fontWeight : 'bold',
            marginVertical : 10,
            paddingHorizontal : 10
        },
        text : {
            maxHeight : 60,
            color : props.color && props.color === 'gray'? textColorSecondary : textColor ,
            fontWeight : 'bold',
            margin : 2,
        }
    })

    const texts = StyleSheet.create({
        h1 : {
            fontSize : 28,
            ...textStandart.h
        },
        h2 : {
            fontSize : 22,
            ...textStandart.h
        },
        h3 : {
            fontSize : 16,
            ...textStandart.h
        },
        small : {
            fontSize : 16,
            height : 20,
            ...textStandart.text
        },
        sub : {
            fontSize : 14,
            margin : 2,
            ...textStandart.text
        },
        content : {
            margin : 5,
            fontSize : 18,
            ...textStandart.text
        }
    })

    return (
        <Text style={ getStyleSheet() }>
            {
                props.text ? props.text : ''
            }
        </Text>
    )
}

export default TextView