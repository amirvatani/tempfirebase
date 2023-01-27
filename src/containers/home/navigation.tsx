import React from 'react'
import { Stack } from '../../navigators/NavigationStack'
import { Dashboard } from './Screens'

export const homeNavigation = () => (
  <>
    <Stack.Screen name="Dashboard" component={Dashboard} />
  </>
)
