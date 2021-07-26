import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

const SectionView = ( props ) => {

    const section = StyleSheet.create({
        content : {
          width : 400,
          maxHeight : props.height ? props.height : 300
        },
        scroll : {
          flexWrap : 'nowrap'
        }
    })
    
    return(
        <View style={ section.content } >
            <ScrollView contentContainerStyle={ section.scroll } horizontal = { true } >
                {
                    props.children
                }
            </ScrollView>
        </View>
    )
}

export default SectionView