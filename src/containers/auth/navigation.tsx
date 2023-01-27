import React from 'react'
import { Stack } from '../../navigators/NavigationStack'
import {
  AuthLoadingScreen,
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
} from './Screens'

export const authNavigation = () => (
  <>
    <Stack.Screen name="AuthLoadingScreen" component={AuthLoadingScreen} />
    <Stack.Screen name="StartScreen" component={StartScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
  </>
)
