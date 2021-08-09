import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native' 
import IconItem from '../icons'

const InputSearch = ( props ) => {
    return(
        <View style = { InputSearchStyle.container } >
            <IconItem icon='SEARCH' iconStyle={ InputSearchStyle.icon } />
            <TextInput placeholder = 'Buscar' style ={ InputSearchStyle.input } placeholderTextColor='black' />
        </View>
    )
}

const InputSearchStyle = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        flexDirection : 'row',
        borderRadius : 10,
        height : 60
    },
    input : {
        width : 340,
        fontSize : 18,
        color : 'black'
    },
    icon : {
        color : 'black',
        top : -5
    }
})

export default InputSearch