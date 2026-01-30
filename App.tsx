/**
 * Números Romanos App - React Native
 * Conversión bidireccional de números romanos y arábigos
 */

import React, { useEffect, useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';
import CustomSplashScreen from './src/screens/CustomSplashScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga para mostrar el Splash Screen animado
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 2500); // Muestra el splash por 2.5 segundos

    return () => clearTimeout(timer);
  }, []);

  // Colores del tema romano
  const backgroundColor = isDarkMode ? '#250818' : '#F5F1E6';

  return (
    <SafeAreaProvider style={{ backgroundColor }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundColor}
      />
      {isShowSplash ? <CustomSplashScreen /> : <RootNavigator />}
    </SafeAreaProvider>
  );
}

export default App;
