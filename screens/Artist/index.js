import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import IconItem from '../../components/icons'
import AlbumItem from '../../components/albumItem'
import TextView from '../../components/text'
import { cardFill, backgroundColor, green } from '../../constansts'
import { useDesignContext } from '../../providers/design'
import BaseScreen from '../Base'

const ArtistScreen = ( props ) => {
    const { width, height } = useDesignContext()
    const [ headerHeight, setHeaderHeight ] = useState( height / 3 )

    const ArtistScreenStyle = StyleSheet.create({
        header : {
            width : width,
            height : headerHeight,
            backgroundColor : cardFill,
            zIndex : 1
        },
        iconBorder : {
            position : 'absolute',
            top : headerHeight - 40,
            marginLeft : width - 90 ,
            width : 70,
            height : 70,
            borderRadius : 45,
            backgroundColor : green,
            zIndex : 2
        },
        icon : {
            color : backgroundColor
        }
    })

    const onScroll = ( data ) => {
        const scrollY = data.nativeEvent.contentOffset.y
        if( scrollY > 0 )
            setHeaderHeight( 70 )
        else
            setHeaderHeight( height / 3 )
    }

    return(
        <View>
            <View style={ ArtistScreenStyle.iconBorder } >
                <IconItem icon='PLAY' iconStyle={ ArtistScreenStyle.icon } />
            </View>
            <View style={ ArtistScreenStyle.header } >
                <IconItem icon='BACK' />
                <TextView text='Artist' type='h1' />
            </View>
            <BaseScreen height={ height - headerHeight } onScroll={ onScroll } >
                <AlbumItem/>
            </BaseScreen>
        </View>
    )
}

export default ArtistScreen