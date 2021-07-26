import React from 'react'
import { View, StyleSheet } from 'react-native'
import IconItem from '../icons'
import { backgroundGray } from '../../constansts'
import { useNavigation } from '@react-navigation/core'
import ROUTES from '../../router/routes'


const NavBar = ( props ) => {
    const navigator = useNavigation()

    const navBar = StyleSheet.create({
        container : {  
            width: 420,
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
            <IconItem text ='Inicio' icon='SEARCH' data = { ROUTES.Search } onClick={ navigate } />
            <IconItem text ='Inicio' icon='BOOKSHELF' data = { ROUTES.Library } onClick={ navigate } />
        </View>
    )
}

export default NavBar