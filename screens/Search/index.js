import React from 'react'
import TextView from '../../components/text'
import CardGenre from '../../components/cardGenre'
import ScreenContainer from '../ScreenContainer'
import InputSearch from '../../components/inputSearch'

const SearchScreen = ( props ) => {
    return(
        <ScreenContainer>
            <TextView type='h1' text='Buscar' />
            <InputSearch/>
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
        </ScreenContainer>
    )
}

export default SearchScreen