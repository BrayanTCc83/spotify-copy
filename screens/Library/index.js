import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import ScreenContainer from '../ScreenContainer'
import LibraryHeader from '../../components/libraryHeader'
import TextView from '../../components/text'
import IconItem from '../../components/icons'
import CardLibraryArtist from '../../components/cardLibraryArtist'

const LibraryScreen = ( props ) => {
    const [ mode, setMode ] = useState(0)
    const [ icon, setIcon ] = useState('BORDER')

    const changeMode = () => {
        setMode( mode === 1 ? 0 : 1 )
        changeIcon()
    }

    const changeIcon = () => {
        setIcon( mode === 1 ? 'BORDER' : 'LIST' )
    }

    return(
        <ScreenContainer>
            <LibraryHeader/>
            <View style={ libraryStyles.subHeader } > 
                <IconItem icon='EXCHANGE' rotate={90} />
                <TextView text='Reproducidas recientemente' type='small' maxSize = {290} />
                <IconItem icon={icon} onClick={ changeMode } />
            </View>
            <CardLibraryArtist mode = {mode}  />
            <CardLibraryArtist mode = {mode} />
            <CardLibraryArtist mode = {mode} />
            <CardLibraryArtist mode = {mode} />
            <CardLibraryArtist mode = {mode} />
            <CardLibraryArtist mode = {mode} />
            <CardLibraryArtist mode = {mode} />
            <CardLibraryArtist mode = {mode} />
        </ScreenContainer>
    )
}

const libraryStyles = StyleSheet.create({
    subHeader : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    }
})

export default LibraryScreen