import React from 'react'
import { View } from 'react-native'
import NavBar from '../../components/navBar'
import PlayBar from '../../components/playBar'
import { useDesignContext } from '../../providers/design'
import { useMusicContext } from '../../providers/music'
import BaseScreen from '../Base'

const ScreenContainer = ( props ) => {
    const { height } = useDesignContext()
    const { currentSong } = useMusicContext()

    const getHeight = () => {
        let realHeight = height - 80

        if( currentSong != '' ) realHeight -= 70

        return realHeight
    }

    const DrawPlayBar = () => {
        return currentSong !== '' ? <PlayBar/> : null
    }

    return(
        <View>
            <BaseScreen height={ getHeight() } >
                {
                    props.children
                }
            </BaseScreen>
            <DrawPlayBar/>
            <NavBar/>
        </View>
    )
}

export default ScreenContainer