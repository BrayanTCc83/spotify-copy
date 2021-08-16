import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import AlbumItem from '../../components/albumItem'
import ArtistHeader from '../../components/artistHeader'
import StorageConection from '../../database/storage'

const AlbumScreen = ( props ) => {
    const data = props.route.params 
    const [ songs, setSongs ] = useState([])
    const Storage = StorageConection( 'Zoé' )

    const getSongs = () => {
        Storage.getFilesOfType( 'mp3', ( item ) => Storage.getDownloadLink( item, ( link )=>{
            setSongs( songs => [...songs, { url : link, name : item.name, album : data.name, author : data.description } ] )
        } ), data.name )
    }

    useEffect( ()=>{
        getSongs()
    }, [] )

    const playSong = ( url ) => {
        alert( url )
    }

    return(
        <ArtistHeader name={ data.name } image={ data.image } >
            {
                songs.map( ( song ) => {
                    return <AlbumItem {...song} image={ data.image } onPress={ playSong } />
                } )
            }
        </ArtistHeader>
    )
}

export default AlbumScreen