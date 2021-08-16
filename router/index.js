import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ROUTES from './routes'
import HomeScreen from '../screens/Home'
import LibraryScreen from '../screens/Library'
import SearchScreen from '../screens/Search'
import PlaySongScreen from '../screens/PlaySong'
import ArtistScreen from '../screens/Artist'
import AlbumScreen from '../screens/Album'

const Stack = createStackNavigator()

const AppRouter = () => {
    return( 
        <NavigationContainer>
            <Stack.Navigator
                screenOptions = {{
                    headerShown : false
                }}
                initialRouteName = { ROUTES.HomeScreen }
            >
                <Stack.Screen
                    name = { ROUTES.HomeScreen }
                    component = { HomeScreen }
                />
                <Stack.Screen
                    name = { ROUTES.Search }
                    component = { SearchScreen }
                />
                <Stack.Screen
                    name = { ROUTES.Library }
                    component = { LibraryScreen }
                />
                <Stack.Screen
                    name = { ROUTES.FavoriteSearch }
                    component = { HomeScreen }
                />
                <Stack.Screen
                    name = { ROUTES.PlaySong }
                    component = { PlaySongScreen }
                />
                <Stack.Screen
                    name = { ROUTES.Artist }
                    component = { ArtistScreen } 
                />
                <Stack.Screen
                    name = { ROUTES.Album }
                    component = { AlbumScreen }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRouter