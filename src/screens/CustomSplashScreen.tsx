import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  useColorScheme,
  ActivityIndicator,
  Image,
} from 'react-native';
import { texts } from '../utils/i18n';

const CustomSplashScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  // Valores animados para opacidad y escala
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    // Secuencia de animación: aparecer y crecer suavemente
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, scaleAnim]);

  // Colores dinámicos - Tema Romano
  // Dark: Púrpura Imperial (#250818) | Light: Mármol Travertino (#F5F1E6)
  const backgroundColor = isDarkMode ? '#250818' : '#F5F1E6';
  // Dark: Dorado (#D4AF37) | Light: Bronce Antiguo (#5D4037)
  const textColor = isDarkMode ? '#D4AF37' : '#5D4037';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../assets/images/conversion.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={[styles.title, { color: textColor }]}>{texts.title}</Text>
        <Text style={[styles.subtitle, { color: textColor }]}>
          {texts.subtitle}
        </Text>
        <ActivityIndicator
          size="large"
          color={textColor}
          style={styles.loader}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.7,
    letterSpacing: 1,
  },
  loader: {
    marginTop: 40,
  },
});

export default CustomSplashScreen;
