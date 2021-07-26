import React from 'react'
import { View, StyleSheet } from 'react-native'
import TextView from '../text'

const CardLibraryArtist = ( props ) => {

    const cardLibraryArtist = StyleSheet.create({
      containerHorizontal : {
        width : 400,
        height : 100,
        alignItems : 'center',
        flexDirection : 'row',
        margin : 5
      },
      imageHorizontal : {
        width : 100,
        height : 100,
        backgroundColor : 'red',
        margin : 5
      },
      containerVertical : {
        width : 190,
        height : 240,
        margin : 5
      },
      imageVertical : {
        width : 190,
        height : 190,
        backgroundColor : 'red'
      }
    })

    const ContainerMode = ( containerData ) => {
        return (
            <View style={ 
                props.mode === 0 ?
                    cardLibraryArtist.containerHorizontal : cardLibraryArtist.containerVertical
            }>
                <View style={ 
                    props.mode === 0 ? 
                        cardLibraryArtist.imageHorizontal : cardLibraryArtist.imageVertical
                }/>
                {
                    containerData.children
                }
            </View>
        )
    }

    return(
        <ContainerMode>
            <View>
                <TextView type='small' text='Artists' />
                <TextView type='sub' color='gray' text='Description' />
            </View>
        </ContainerMode>
    )
}

export default CardLibraryArtist