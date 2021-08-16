import React, { useState } from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useDesignContext } from '../../providers/design'
import { cardFill, green, backgroundColor } from '../../constansts'
import IconItem from '../icons'
import TextView from '../text'
import BaseScreen from '../../screens/Base'
import * as Animable from 'react-native-animatable'

const ArtistHeader = ( props ) => {
    const Navigation = useNavigation()
    const { width, height } = useDesignContext()
    const [ headerHeight, setHeaderHeight ] = useState( height / 3 )
    const [ image, setImage ] = useState( props.image )
    
    const headerImage = StyleSheet.create({
        header : {
            width : width,
            height : headerHeight,
            backgroundColor : cardFill,
            zIndex : 1,
            flexDirection : 'row',
            alignItems : 'center',
            flexWrap : 'wrap',
        },
        background : {
            width : width,
            height : headerHeight,
            zIndex : -1,
            top : 0,
            position : 'absolute'
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
        },
    })

    const onScroll = ( data ) => {
        const scrollY = data.nativeEvent.contentOffset.y
        if( scrollY > 0 ){
            setHeaderHeight( 70 )
            setImage( null )
        }else{
            setHeaderHeight( height / 3 )
            setImage( props.image )
        }
    }

    return(
        <View>
            <View style={ headerImage.iconBorder } >
                <IconItem icon='PLAY' iconStyle={ headerImage.icon } />
            </View>
            <Animable.View transition='height' style={ headerImage.header } >
                <IconItem icon='BACK' onClick={ () => Navigation.goBack() } />
                <Image source={{ uri : image }} style={ headerImage.background } />
                <TextView text={ props.name } type={ headerHeight !== height/3 ? 'h2' : 'super' } maxSize={ headerHeight !== height/3 ? width-100:width } />
            </Animable.View>
            <BaseScreen height={ height - headerHeight } onScroll={ onScroll } animatable >
                {
                    props.children
                }
            </BaseScreen>
        </View>
    )
}

export default ArtistHeader