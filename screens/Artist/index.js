import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import AlbumItem from '../../components/albumItem'
import TextView from '../../components/text'
import { useDesignContext } from '../../providers/design'
import { useNavigation } from '@react-navigation/core'
import StorageConection from '../../database/storage'
import ArtistHeader from '../../components/artistHeader'

const ArtistScreen = ( props ) => {
    const { width, height } = useDesignContext()
    const [ albums, setAlbums ] = useState([])
    const [ image, setImage ] = useState( )
    const Storage = StorageConection( 'Zoé' )  

    const ArtistScreenStyle = StyleSheet.create({
        songs :  {
            marginTop : 40,
            justifyContent : 'center',
            padding : 10,
            textAlign : 'center'
        }
    })

    const loadAlbums = () => {
        Storage.getFolders( (item) => {
            Storage.getFilesOfType( 'jpg', (subitem) => {
                Storage.getDownloadLink( subitem, ( link ) => {
                    setAlbums( albums => [ ...albums, { name : item.name, description : 'Zoé', image : link } ] )
                } )
            }, item.name )
        } )
    }
    
    Storage.getFiles( item => Storage.getDownloadLink(item, setImage) )

    useEffect( () => {
        loadAlbums()
    }, [] )

    return(
        <ArtistHeader image={ image } name = 'Zoé' >
            <TextView type='sub' text='Aquí estará la lista con las diferentes canciones de los artistas' color='gray' style={ ArtistScreenStyle.songs } />
            <TextView maxSize={ width - 20 } type='h2' text='Albums' />
            {
                albums.map( ( album ) =>
                    <AlbumItem {...album} />
                )
            }
        </ArtistHeader>
    )
}

export default ArtistScreen