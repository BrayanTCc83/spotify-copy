import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { backgroundColor } from '../../constansts'
import { useDesignContext } from '../../providers/design'
import * as Animable from 'react-native-animatable'

const BaseScreen = ( props ) =>{
    const { height } = useDesignContext()

    const styles = StyleSheet.create({
        container: {
            backgroundColor : backgroundColor,
            height : props.height ? props.height : height
        },
        subContainer : {
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexDirection : 'row',
            flexWrap : 'wrap',
        }
    });

    const SelectScreenType = ( subProps ) => {
        return(
            props.animatable ? 
                <Animable.View transition='height' style={subProps.style} >{subProps.children}</Animable.View>
                :
                <View style={subProps.style} >{subProps.children}</View>
        )
    }

    return(
        <SelectScreenType style={styles.container}>
            <ScrollView onScrollEndDrag={ props.onScroll ? props.onScroll : ()=>{} } >
                <View style = { styles.subContainer } >
                {
                    props.children
                }
                </View>
            </ScrollView>
        </SelectScreenType>
    )
}

export default BaseScreen