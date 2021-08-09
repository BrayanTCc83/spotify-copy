import React, { useState, useMemo, useEffect, useContext } from 'react'
import { Dimensions } from 'react-native'

const DesignContext = React.createContext()

const DesignProvider = ( props ) => {
    const [ width, setWidth ] = useState(Dimensions.get('window').width )
    const [ height, setHeight ] = useState(Dimensions.get('window').height )
    const [ fontScale, setFontScale ] = useState(Dimensions.get('window').fontScal )

    const value = useMemo(()=>{
        return ({
            width,
            height,
            fontScale
        })
    }, width, height, fontScale )

    return(
        <DesignContext.Provider {...props} value={ value } />
    )
}

const useDesignContext = () => {
    const context = useContext( DesignContext )
    if( context === null )
        throw new Error( "You can't use the data context out its provider" )
    return context
}


export {
    DesignProvider,
    useDesignContext
}