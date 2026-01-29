/**
 * Números Romanos App - React Native
 * Conversión bidireccional de números romanos y arábigos
 */

import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';
import SplashScreen from 'react-native-splash-screen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    // Oculta el splash screen una vez que el componente principal se ha montado
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNavigator />
    </SafeAreaProvider>
  );
}

export default App;
