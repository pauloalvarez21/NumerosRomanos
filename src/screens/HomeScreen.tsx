import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useColors } from '../styles/commonStyles';
import Card from '../components/Card';

const HomeScreen = () => {
  const colors = useColors();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 30,
    },
    title: {
      fontSize: 32,
      color: colors.primary,
      marginBottom: 8,
      textAlign: 'center',
      fontFamily: 'ChowFun-Regular',
    },
    subtitle: {
      fontSize: 16,
      color: colors.lightText,
      textAlign: 'center',
      marginBottom: 32,
      fontFamily: 'ChowFun-Regular',
    },
    section: {
      marginBottom: 28,
    },
    sectionTitle: {
      fontSize: 18,
      color: colors.primary,
      marginBottom: 12,
      fontFamily: 'ChowFun-Regular',
    },
    sectionText: {
      fontSize: 14,
      lineHeight: 22,
      color: colors.text,
    },
    highlight: {
      color: colors.secondary,
      fontWeight: '600',
    },
    exampleText: {
      fontSize: 13,
      color: colors.text,
      fontFamily: 'monospace',
    },
    featureText: {
      fontSize: 13,
      color: colors.text,
      lineHeight: 20,
    },
    exampleContent: {
      gap: 4,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContent}>
        <Text style={styles.title}>Números Romanos</Text>
        <Text style={styles.subtitle}>Convertidor & Información</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>¡Bienvenido!</Text>
          <Text style={styles.sectionText}>
            Esta aplicación te permite convertir números{' '}
            <Text style={styles.highlight}>árabes a romanos</Text> y{' '}
            <Text style={styles.highlight}>romanos a árabes</Text> de forma
            rápida y sencilla.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Características</Text>
          <Card variant="feature" title="🔄 Conversión Bidireccional">
            <Text style={styles.featureText}>
              Convierte números árabes (1-3999) a romanos y viceversa.
            </Text>
          </Card>
          <Card variant="feature" title="📚 Información Detallada">
            <Text style={styles.featureText}>
              Aprende cómo funcionan los números romanos con ejemplos prácticos.
            </Text>
          </Card>
          <Card variant="feature" title="✨ Interfaz Intuitiva">
            <Text style={styles.featureText}>
              Diseño simple y fácil de usar para todas las edades.
            </Text>
          </Card>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>¿Qué son los números romanos?</Text>
          <Text style={styles.sectionText}>
            Los números romanos son un sistema de numeración que se originó en
            la antigua Roma. Se utilizan letras mayúsculas para representar
            valores numéricos específicos.
          </Text>
          <Card variant="example">
            <View style={styles.exampleContent}>
              <Text style={styles.exampleText}>I = 1 V = 5 X = 10</Text>
              <Text style={styles.exampleText}>L = 50 C = 100 D = 500</Text>
              <Text style={styles.exampleText}>M = 1000</Text>
            </View>
          </Card>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ejemplos Rápidos</Text>
          <Card variant="example">
            <View style={styles.exampleContent}>
              <Text style={styles.exampleText}>3 = III</Text>
              <Text style={styles.exampleText}>10 = X</Text>
              <Text style={styles.exampleText}>49 = XLIX</Text>
              <Text style={styles.exampleText}>2024 = MMXXIV</Text>
            </View>
          </Card>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rango de Números</Text>
          <Text style={styles.sectionText}>
            Esta aplicación puede convertir números del{' '}
            <Text style={styles.highlight}>1 al 3999</Text>. Estos números
            cubren la mayoría de casos de uso comunes de los números romanos.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
