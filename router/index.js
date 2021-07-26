import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ROUTES from './routes'
import HomeScreen from '../screens/Home'
import LibraryScreen from '../screens/Library'
import SearchScreen from '../screens/Search'

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
                    component = { HomeScreen }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRouter