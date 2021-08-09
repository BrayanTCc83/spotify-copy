import React from 'react'
import { View, StyleSheet } from 'react-native'
import IconItem from '../icons'
import { backgroundGray } from '../../constansts'
import { useNavigation } from '@react-navigation/core'
import ROUTES from '../../router/routes'
import { useDesignContext } from '../../providers/design'


const NavBar = ( props ) => {
    const navigator = useNavigation()
    const { width } = useDesignContext()

    const navBar = StyleSheet.create({
        container : {
            width: width,
            height : 60,
            backgroundColor : backgroundGray,
            justifyContent : 'space-evenly',
            alignItems : 'center',
            overflow : 'hidden',
            flexDirection : 'row'
        }
    })

    const navigate = ( data ) => {
        navigator.navigate( data )
    }

    return(
        <View style={ navBar.container } >
            <IconItem text ='Inicio' data = { ROUTES.HomeScreen } onClick={ navigate } />
            <IconItem text ='Buscar' icon='SEARCH' data = { ROUTES.Search } onClick={ navigate } />
            <IconItem text ='Libreria' icon='BOOKSHELF' data = { ROUTES.Library } onClick={ navigate } />
        </View>
    )
}

export default NavBar