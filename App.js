import React from 'react'
import { Provider } from 'react-native-paper'
import 'firebase/auth'
import { theme } from './src/core/theme'
import { ApplicationNavigator } from './src/navigators/ApplicationNavigator'

export default function App() {
  return (
    <Provider theme={theme}>
      <ApplicationNavigator />
    </Provider>
  )
}
