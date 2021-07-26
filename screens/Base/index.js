import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { backgroundColor } from '../../constansts'

const BaseScreen = ( props ) =>{

    const styles = StyleSheet.create({
        container: {
            backgroundColor : backgroundColor,
            height : props.height ? props.height : 1000
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
            <ScrollView>
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