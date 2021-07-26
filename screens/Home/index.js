import React from 'react'
import { View, StyleSheet } from 'react-native'
import TextView from '../../components/text'
import IconItem from '../../components/icons'
import SectionView from '../../components/section'
import CardWelcome from '../../components/cardWelcome'
import CardSquare from '../../components/cardSquare'
import CardArtist from '../../components/cardArtist'
import ScreenContainer from '../ScreenContainer'

const HomeScreen = ( props ) => {
    return (
        <ScreenContainer>
            <View style={ HomeScreenComponents.header } >
                <TextView text='Buenos días' type='h2' maxSize={ 300 } />
                <IconItem icon='HISTORY' />
                <IconItem icon='COG' />
            </View>
            <CardWelcome/>
            <CardWelcome/>
            <CardWelcome/>
            <CardWelcome/>
            <CardWelcome/>
            <CardWelcome/>
            <TextView text='Podcast para pasar el rato' type='h2'/>
            <SectionView height = { 260 } >
                <CardSquare/>
                <CardSquare/>
                <CardSquare/>
                <CardSquare/>
            </SectionView>
            <TextView text='Recientemente escuchado' type='h2'/>
            <SectionView height = { 170 } >
                <CardArtist/>
                <CardArtist/>
                <CardArtist/>
                <CardArtist/>
            </SectionView>
            <TextView text='Hecho para ti' type='h2'/>
            <SectionView height = { 260 } >
                <CardSquare hasFrame />
                <CardSquare hasFrame />
                <CardSquare hasFrame />
            </SectionView>
        </ScreenContainer>
    )
}

const HomeScreenComponents = StyleSheet.create({
    header : {
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row'
    }
})

export default HomeScreen