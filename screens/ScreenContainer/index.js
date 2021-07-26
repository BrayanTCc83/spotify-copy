import React from 'react'
import { View } from 'react-native'
import NavBar from '../../components/navBar'
import BaseScreen from '../Base'

const ScreenContainer = ( props ) => {
    return(
        <View>
            <BaseScreen height={ 600 } >
                {
                    props.children
                }
            </BaseScreen>
            <NavBar/>
        </View>
    )
}

export default ScreenContainer