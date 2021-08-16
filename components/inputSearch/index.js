import React, { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native' 
import IconItem from '../icons'

const InputSearch = ( props ) => {
    const [ value, setValue ] = useState( props.value ? props.value : '' )

    const onChange = ( value ) => {
        setValue( value )
        props.onChange ? props.onChange( value ) : () => {}
    }

    return(
        <View style = { InputSearchStyle.container } >
            <IconItem icon='SEARCH' iconStyle={ InputSearchStyle.icon } onClick={ props.onSearch ? props.onSearch : () => {} } />
            <TextInput placeholder = 'Buscar' style ={ InputSearchStyle.input } placeholderTextColor='black' 
                onChangeText={ onChange } value={ value }
            />
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