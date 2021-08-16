import Storage from '@react-native-firebase/storage'
import { useState } from 'react'

const StorageConection = ( artist ) => {
    const [ storageRef, setStorageRef ] = useState( Storage().ref('artists') )
    const realArtist = artist ? artist : ''

    const getFiles = ( onGetFile, ref ) => {
        const url = ref ? `/${ref}` : ''
        storageRef.child( realArtist + url ).list().then( (items) => {
            items.items.forEach( (item) => {
                onGetFile( item ) 
            } )
        } ).catch(( err )=>{console.log(err)})
    }

    const getFilesOfType = ( type, onGetFile, ref ) => {
        getFiles( (item) => {
            if( item.name.endsWith( type ) )
                onGetFile( item )
        }, ref )
    }

    const getFolders = ( onGetFolder, ref ) => {
        const url = ref ? `/${ref}` : ''
        if( (realArtist + url) === '' ){
            storageRef.listAll().then( (items) => {
                items.prefixes.forEach( item => {
                    onGetFolder( item )
                } )
            } ).catch(( err )=>{console.log(err)})
        }else{
            storageRef.child( realArtist + url ).listAll().then( (items) => {
                items.prefixes.forEach( item => {
                    onGetFolder( item )
                } )
            } ).catch(( err )=>{console.log(err)})
        }
    }

    const getDownloadLink = ( item, onGetLink ) => {
        item.getDownloadURL().then( val => onGetLink( val ) )
    }

    return {
        storageRef,
        getFiles,
        getFolders,
        getFilesOfType,
        getDownloadLink,
        setStorageRef,
    }
}

export default StorageConection