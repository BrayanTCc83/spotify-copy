import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
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
            <TouchableOpacity onPress={ props.onPress ? ()=> props.onPress( props.route ) : ()=>{} } style={ 
                props.mode === 0 ?
                    cardLibraryArtist.containerHorizontal : cardLibraryArtist.containerVertical
            }>
                {
                  props.image !== '' ?
                    <Image source={ { uri : props.image } } style={ 
                        props.mode === 0 ? 
                            cardLibraryArtist.imageHorizontal : cardLibraryArtist.imageVertical
                    } />
                     :
                    <View style={ 
                        props.mode === 0 ? 
                            cardLibraryArtist.imageHorizontal : cardLibraryArtist.imageVertical
                    }/>
                }
                {
                    containerData.children
                }
            </TouchableOpacity>
        )
    }

    return(
        <ContainerMode>
            <View>
                <TextView type='small' text={ props.name ? props.name : 'Artists'} />
                <TextView type='sub' color='gray' text={props.description ? props.description :'Description'} />
            </View>
        </ContainerMode>
    )
}

export default CardLibraryArtist