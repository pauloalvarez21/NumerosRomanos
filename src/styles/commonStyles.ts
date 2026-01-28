import { StyleSheet, useColorScheme } from 'react-native';

const lightColors = {
  background: '#FFFFFF',
  primary: '#2C3E50',
  secondary: '#3498DB',
  text: '#2C3E50',
  lightText: '#7F8C8D',
  border: '#ECF0F1',
  success: '#27AE60',
  error: '#E74C3C',
  warning: '#F39C12',
};

const darkColors = {
  background: '#1E1E1E',
  primary: '#ECF0F1',
  secondary: '#3498DB',
  text: '#ECF0F1',
  lightText: '#BDC3C7',
  border: '#34495E',
  success: '#2ECC71',
  error: '#E74C3C',
  warning: '#F39C12',
};

export const useColors = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return isDarkMode ? darkColors : lightColors;
};

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 16,
  },
  input: {
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  card: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
  },
  resultBox: {
    padding: 20,
    borderRadius: 12,
    marginVertical: 16,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  errorText: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
});
