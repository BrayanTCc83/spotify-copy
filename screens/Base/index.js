import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { backgroundColor } from '../../constansts'
import { useDesignContext } from '../../providers/design'

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

    return(
        <View style={styles.container}>
            <ScrollView onScrollEndDrag={ props.onScroll ? props.onScroll : ()=>{} } >
                <View style = { styles.subContainer } >
                {
                    props.children
                }
                </View>
            </ScrollView>
        </View>
    )
}

export default BaseScreen