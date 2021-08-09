import React, { useState, useMemo, useEffect, useContext } from 'react'

const MusicContext = React.createContext()

const MusicProvider = ( props ) => {
    const [ currentSong, setSong ] = useState( 's' )
    const [ isPlaying, setPlaying ] = useState( true )
    const [ lyrics, setLyrics ] = useState( '' )

    const value = useMemo(()=>{
        return ({
            currentSong,
            isPlaying,
            lyrics
        })
    }, [ currentSong, isPlaying, lyrics ] )

    return(
        <MusicContext.Provider {...props} value={ value } />
    )
}

const useMusicContext = () => {
    const context = useContext( MusicContext )
    if( context === null )
        throw new Error( "You can't use the data context out its provider" )
    return context
}

export {
    MusicProvider,
    useMusicContext
}