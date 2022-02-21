import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import {
  Typography,
  Colors,
  Spacings,
  ThemeManager,
  LoaderScreen,
  Text,
} from 'react-native-ui-lib'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Home from './components/Home'
import { useFonts } from 'expo-font'

export default function App() {
  let [fontsLoaded] = useFonts({
    'SFPro-Bold': require('./assets/fonts/SFPro-Bold.otf'),
    SFPro: require('./assets/fonts/SFPro-Regular.otf'),
    'SFPro-MediumItalic': require('./assets/fonts/SF-Pro-Display-MediumItalic.otf'),
    'SFPro-Medium': require('./assets/fonts/SF-Pro-Display-Medium.otf'),
    'SFPro-Semibold': require('./assets/fonts/SF-Pro-Display-Semibold.otf'),
    'SFPro-Bold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
  })

  if (!fontsLoaded)
    return <LoaderScreen color={Colors.blue30} message="Loading..." overlay />

  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  )
}

Colors.loadColors({
  primary: '#007AFF',
  light: '#32ade6',
  secondary: '#34c759',
  warning: '#ff3b30',
})

Typography.loadTypographies({
  h1: { fontSize: scale(28), fontWeight: '300' },
  h2: { fontSize: scale(22), fontWeight: '300' },
})

ThemeManager.setComponentTheme('Text', {
  fontFamily: 'sans-serif',
})

ThemeManager.setComponentTheme('Button', {
  fontFamily: 'sans-serif',
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
})
