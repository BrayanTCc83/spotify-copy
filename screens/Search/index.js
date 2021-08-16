import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import TextView from '../../components/text'
import CardGenre from '../../components/cardGenre'
import ScreenContainer from '../ScreenContainer'
import InputSearch from '../../components/inputSearch'
import StorageConection from '../../database/storage'
import AlbumItem from '../../components/albumItem'

const SearchScreen = ( props ) => {
    const [ searchValue, setSearchValue ] = useState( '' )
    const [ isSearch, setSearch ] = useState( false )
    const [ artists, setArtists ] = useState([])
    const Storage = StorageConection()

    const loadArtists = () => {
        Storage.getFolders( ( item ) => {
            Storage.getFilesOfType( 'jpg', (image) => Storage.getDownloadLink( image, ( link ) => {
                setArtists( artists => [ ...artists, { name : item.name, description : 'Artista', image : link } ] )
            }), item.name )
        } )
    }

    useEffect(()=>{ 
        return loadArtists()
    }, [] )

    const onChangeInput = ( value ) => {
        setSearchValue( value )
    }

    const onSearch = () => {
        setSearch( !isSearch )
    }

    const filterArtists = () => {
        return( 
            <View>
                {
                    artists.filter( (item) => item.name.toLowerCase().includes( searchValue.toLowerCase() ) ).map( ( item ) => <AlbumItem {...item} /> )
                }
            </View>
        )
    }

    return(
        <ScreenContainer>
            <TextView type='h1' text='Buscar'/>
            <InputSearch onChange={ onChangeInput } onSearch = { onSearch } value={ searchValue } />
            {
                searchValue === '' || !isSearch ?
                    <View style={{ flexDirection : 'row', flexWrap : 'wrap' }} >
                        <TextView type='h2' text='Tus generos' />
                        <CardGenre/>
                        <CardGenre/>
                        <TextView type='h2' text='Todos los generos' />
                        <CardGenre/>
                        <CardGenre/>
                        <CardGenre/>
                        <CardGenre/>
                        <CardGenre/>
                        <CardGenre/>
                        <CardGenre/>
                        <CardGenre/>
                    </View>
                : 
                    <View>
                        <TextView type='h2' text='Artists' />
                        {
                            filterArtists()
                        }
                    </View>
            }
        </ScreenContainer>
    )
}

export default SearchScreen