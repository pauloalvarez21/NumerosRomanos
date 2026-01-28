import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import { useColors } from '../styles/commonStyles';
import { arabicToRoman, romanToArabic } from '../utils/romanConvert';

type ConversionMode = 'arabic-to-roman' | 'roman-to-arabic';

const ConversionScreen = () => {
  const colors = useColors();
  const [mode, setMode] = useState<ConversionMode>('arabic-to-roman');
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [resultType, setResultType] = useState<'success' | 'error' | null>(
    null,
  );

  const handleConvert = () => {
    if (!input.trim()) {
      Alert.alert('Error', 'Por favor ingresa un valor');
      return;
    }

    let conversionResult: string | number;

    if (mode === 'arabic-to-roman') {
      const num = parseInt(input, 10);
      if (isNaN(num)) {
        setResult('Error: Ingresa un número válido');
        setResultType('error');
        return;
      }
      conversionResult = arabicToRoman(num);
    } else {
      conversionResult = romanToArabic(input);
    }

    if (
      typeof conversionResult === 'string' &&
      conversionResult.startsWith('Error')
    ) {
      setResult(conversionResult);
      setResultType('error');
    } else {
      setResult(String(conversionResult));
      setResultType('success');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
    setResultType(null);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      paddingHorizontal: 20,
      paddingVertical: 20,
      paddingBottom: 30,
    },
    title: {
      fontSize: 28,
      color: colors.primary,
      marginBottom: 24,
      textAlign: 'center',
      fontFamily: 'ChowFun-Regular',
    },
    modeContainer: {
      marginBottom: 28,
    },
    modeLabel: {
      fontSize: 14,
      fontWeight: '600',
      color: colors.lightText,
      marginBottom: 12,
    },
    modeButtonContainer: {
      flexDirection: 'row',
      gap: 12,
    },
    modeButton: {
      flex: 1,
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 10,
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modeButtonActive: {
      backgroundColor: colors.secondary,
      borderColor: colors.secondary,
    },
    modeButtonInactive: {
      backgroundColor: 'transparent',
      borderColor: colors.border,
    },
    modeButtonText: {
      fontSize: 12,
      textAlign: 'center',
      fontFamily: 'ChowFun-Regular',
    },
    modeButtonTextActive: {
      color: '#FFFFFF',
    },
    modeButtonTextInactive: {
      color: colors.text,
    },
    inputSection: {
      marginBottom: 24,
    },
    label: {
      fontSize: 14,
      fontWeight: '600',
      color: colors.primary,
      marginBottom: 8,
    },
    input: {
      borderWidth: 2,
      borderColor: colors.border,
      borderRadius: 12,
      paddingHorizontal: 16,
      paddingVertical: 12,
      fontSize: 16,
      color: colors.text,
      backgroundColor: colors.background,
    },
    inputFocused: {
      borderColor: colors.secondary,
    },
    buttonContainer: {
      flexDirection: 'row',
      gap: 12,
      marginBottom: 24,
    },
    convertButton: {
      flex: 1,
      paddingVertical: 14,
      paddingHorizontal: 16,
      borderRadius: 12,
      backgroundColor: colors.secondary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    clearButton: {
      flex: 1,
      paddingVertical: 14,
      paddingHorizontal: 16,
      borderRadius: 12,
      backgroundColor: colors.border,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: 15,
      color: '#FFFFFF',
      fontFamily: 'ChowFun-Regular',
    },
    clearButtonText: {
      fontSize: 15,
      color: colors.text,
      fontFamily: 'ChowFun-Regular',
    },
    resultContainer: {
      paddingHorizontal: 20,
      paddingVertical: 24,
      borderRadius: 12,
      marginBottom: 24,
    },
    resultContainerSuccess: {
      backgroundColor: colors.success + '20',
      borderColor: colors.success,
      borderWidth: 2,
    },
    resultContainerError: {
      backgroundColor: colors.error + '20',
      borderColor: colors.error,
      borderWidth: 2,
    },
    resultLabel: {
      fontSize: 12,
      fontFamily: 'ChowFun-Regular',
      color: colors.lightText,
      marginBottom: 8,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    resultValue: {
      fontSize: 32,
      fontFamily: 'ChowFun-Regular',
      textAlign: 'center',
    },
    resultValueSuccess: {
      color: colors.success,
    },
    resultValueError: {
      color: colors.error,
      fontSize: 14,
    },
    infoText: {
      fontSize: 13,
      color: colors.text,
      lineHeight: 20,
    },
    card: {
      backgroundColor: colors.background,
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: colors.border,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.primary,
      marginBottom: 8,
    },
  });

  const renderInfoBox = () => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>💡 Consejo</Text>
      <Text style={styles.infoText}>
        {mode === 'arabic-to-roman'
          ? 'Los números romanos se construyen combinando símbolos. La posición es importante.'
          : 'Los números romanos deben estar en mayúsculas. Por ejemplo: VIII, XIV, MCMXC.'}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Convertidor</Text>

        {/* Mode Selection */}
        <View style={styles.modeContainer}>
          <Text style={styles.modeLabel}>
            Selecciona el tipo de conversión:
          </Text>
          <View style={styles.modeButtonContainer}>
            <Pressable
              style={[
                styles.modeButton,
                mode === 'arabic-to-roman'
                  ? styles.modeButtonActive
                  : styles.modeButtonInactive,
              ]}
              onPress={() => {
                setMode('arabic-to-roman');
                handleClear();
              }}
            >
              <Text
                style={[
                  styles.modeButtonText,
                  mode === 'arabic-to-roman'
                    ? styles.modeButtonTextActive
                    : styles.modeButtonTextInactive,
                ]}
              >
                Árabe → Romano
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.modeButton,
                mode === 'roman-to-arabic'
                  ? styles.modeButtonActive
                  : styles.modeButtonInactive,
              ]}
              onPress={() => {
                setMode('roman-to-arabic');
                handleClear();
              }}
            >
              <Text
                style={[
                  styles.modeButtonText,
                  mode === 'roman-to-arabic'
                    ? styles.modeButtonTextActive
                    : styles.modeButtonTextInactive,
                ]}
              >
                Romano → Árabe
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Input Section */}
        <View style={styles.inputSection}>
          <Text style={styles.label}>
            {mode === 'arabic-to-roman'
              ? 'Ingresa un número (1-3999)'
              : 'Ingresa un número romano'}
          </Text>
          <TextInput
            style={styles.input}
            placeholder={mode === 'arabic-to-roman' ? 'Ej: 42' : 'Ej: XLII'}
            placeholderTextColor={colors.lightText}
            value={input}
            onChangeText={setInput}
            keyboardType={mode === 'arabic-to-roman' ? 'number-pad' : 'default'}
          />
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <Pressable style={styles.convertButton} onPress={handleConvert}>
            <Text style={styles.buttonText}>Convertir</Text>
          </Pressable>
          <Pressable style={styles.clearButton} onPress={handleClear}>
            <Text style={styles.clearButtonText}>Limpiar</Text>
          </Pressable>
        </View>

        {/* Result */}
        {result && (
          <View
            style={[
              styles.resultContainer,
              resultType === 'success'
                ? styles.resultContainerSuccess
                : styles.resultContainerError,
            ]}
          >
            <Text style={styles.resultLabel}>
              {resultType === 'success' ? 'Resultado' : 'Aviso'}
            </Text>
            <Text
              style={[
                styles.resultValue,
                resultType === 'success'
                  ? styles.resultValueSuccess
                  : styles.resultValueError,
              ]}
            >
              {result}
            </Text>
          </View>
        )}

        {/* Info Box */}
        {renderInfoBox()}
      </ScrollView>
    </View>
  );
};

export default ConversionScreen;
