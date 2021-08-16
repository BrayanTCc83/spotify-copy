import Database from '@react-native-firebase/database'
import { useState } from 'react'

const DatabaseConection = ( props ) => {
    const [ database, setDatabase ] = useState( Database().ref() )

    return {
        database
    }
}

export default DatabaseConection