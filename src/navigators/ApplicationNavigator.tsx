import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import firebase from 'firebase/app'
import 'firebase/auth'

import { FIREBASE_CONFIG } from '../core/config'
import { authNavigation } from '../containers/auth'
import { homeNavigation } from '../containers/home'

const Stack = createStackNavigator()
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG)
}

export const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthLoadingScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        {authNavigation()}
        {homeNavigation()}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
