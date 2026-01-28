import { Platform, NativeModules } from 'react-native';

const getDeviceLanguage = () => {
  try {
    const deviceLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;

    return deviceLanguage ? deviceLanguage.substring(0, 2) : 'en';
  } catch (error) {
    return 'en' + error;
  }
};

const lang = getDeviceLanguage();
const isEnglish = lang !== 'es';

export const texts = {
  title: isEnglish ? 'Roman Numerals' : 'Números Romanos',
  subtitle: isEnglish ? 'Converter & Info' : 'Convertidor & Información',
  welcome: {
    title: isEnglish ? 'Welcome!' : '¡Bienvenido!',
    text1: isEnglish
      ? 'This app allows you to convert '
      : 'Esta aplicación te permite convertir números ',
    highlight1: isEnglish ? 'Arabic to Roman' : 'árabes a romanos',
    text2: isEnglish ? ' and ' : ' y ',
    highlight2: isEnglish ? 'Roman to Arabic' : 'romanos a árabes',
    text3: isEnglish
      ? ' numbers quickly and easily.'
      : ' de forma rápida y sencilla.',
  },
  features: {
    title: isEnglish ? 'Features' : 'Características',
    f1: {
      title: isEnglish
        ? '🔄 Bidirectional Conversion'
        : '🔄 Conversión Bidireccional',
      text: isEnglish
        ? 'Convert Arabic numbers (1-3999) to Roman and vice versa.'
        : 'Convierte números árabes (1-3999) a romanos y viceversa.',
    },
    f2: {
      title: isEnglish ? '📚 Detailed Information' : '📚 Información Detallada',
      text: isEnglish
        ? 'Learn how Roman numerals work with practical examples.'
        : 'Aprende cómo funcionan los números romanos con ejemplos prácticos.',
    },
    f3: {
      title: isEnglish ? '✨ Intuitive Interface' : '✨ Interfaz Intuitiva',
      text: isEnglish
        ? 'Simple and easy-to-use design for all ages.'
        : 'Diseño simple y fácil de usar para todas las edades.',
    },
  },
  whatAre: {
    title: isEnglish
      ? 'What are Roman numerals?'
      : '¿Qué son los números romanos?',
    text: isEnglish
      ? 'Roman numerals are a numeral system that originated in ancient Rome. Uppercase letters are used to represent specific numerical values.'
      : 'Los números romanos son un sistema de numeración que se originó en la antigua Roma. Se utilizan letras mayúsculas para representar valores numéricos específicos.',
  },
  examples: {
    title: isEnglish ? 'Quick Examples' : 'Ejemplos Rápidos',
  },
  range: {
    title: isEnglish ? 'Number Range' : 'Rango de Números',
    text1: isEnglish
      ? 'This app can convert numbers from '
      : 'Esta aplicación puede convertir números del ',
    highlight: isEnglish ? '1 to 3999' : '1 al 3999',
    text2: isEnglish
      ? '. These numbers cover most common use cases for Roman numerals.'
      : '. Estos números cubren la mayoría de casos de uso comunes de los números romanos.',
  },
  conversion: {
    title: isEnglish ? 'Converter' : 'Convertidor',
    modeLabel: isEnglish
      ? 'Select conversion type:'
      : 'Selecciona el tipo de conversión:',
    modes: {
      arabicToRoman: isEnglish ? 'Arabic → Roman' : 'Árabe → Romano',
      romanToArabic: isEnglish ? 'Roman → Arabic' : 'Romano → Árabe',
    },
    inputLabel: {
      arabic: isEnglish
        ? 'Enter a number (1-3999)'
        : 'Ingresa un número (1-3999)',
      roman: isEnglish ? 'Enter a Roman numeral' : 'Ingresa un número romano',
    },
    placeholders: {
      arabic: isEnglish ? 'Ex: 42' : 'Ej: 42',
      roman: isEnglish ? 'Ex: XLII' : 'Ej: XLII',
    },
    buttons: {
      convert: isEnglish ? 'Convert' : 'Convertir',
      clear: isEnglish ? 'Clear' : 'Limpiar',
    },
    results: {
      labelSuccess: isEnglish ? 'Result' : 'Resultado',
      labelError: isEnglish ? 'Notice' : 'Aviso',
    },
    tips: {
      title: isEnglish ? '💡 Tip' : '💡 Consejo',
      arabic: isEnglish
        ? 'Roman numerals are built by combining symbols. Position is important.'
        : 'Los números romanos se construyen combinando símbolos. La posición es importante.',
      roman: isEnglish
        ? 'Roman numerals must be uppercase. Example: VIII, XIV, MCMXC.'
        : 'Los números romanos deben estar en mayúsculas. Por ejemplo: VIII, XIV, MCMXC.',
    },
  },
  errors: {
    title: isEnglish ? 'Error' : 'Error',
    emptyInput: isEnglish
      ? 'Please enter a value'
      : 'Por favor ingresa un valor',
    invalidNumber: isEnglish
      ? 'Error: Enter a valid number'
      : 'Error: Ingresa un número válido',
    range: isEnglish
      ? 'Error: Number must be between 1 and 3999'
      : 'Error: El número debe estar entre 1 y 3999',
    enterRoman: isEnglish
      ? 'Error: Enter a Roman numeral'
      : 'Error: Ingresa un número romano',
    invalidChars: isEnglish
      ? 'Error: Invalid characters'
      : 'Error: Caracteres inválidos',
    resultRange: isEnglish
      ? 'Error: Result out of range (1-3999)'
      : 'Error: Resultado fuera de rango (1-3999)',
  },
  footer: {
    rights: isEnglish
      ? '© 2026 Gaelectronica - All rights reserved'
      : '© 2026 Gaelectronica - Todos los derechos reservados',
    subtext: isEnglish
      ? 'Roman numeral conversion tool'
      : 'Herramienta para conversión de números romanos',
  },
};
