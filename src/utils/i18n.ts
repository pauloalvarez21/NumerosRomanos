import * as RNLocalize from 'react-native-localize';

const locales = RNLocalize.getLocales();
const languageCode = locales[0]?.languageCode; // Retorna 'es', 'en', etc.
const isEnglish = languageCode !== 'es';

export const texts = {
  navigation: {
    home: isEnglish ? 'Home' : 'Inicio',
    conversion: isEnglish ? 'Converter' : 'Convertidor',
    info: isEnglish ? 'Info' : 'Información',
  },
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
  info: {
    title: isEnglish ? 'Information' : 'Información',
    symbols: {
      title: isEnglish ? 'Basic Symbols' : 'Símbolos Básicos',
      description: isEnglish
        ? 'Roman numerals are based on seven symbols with fixed values:'
        : 'Los números romanos se basan en siete símbolos con valores fijos:',
      colSymbol: isEnglish ? 'Symbol' : 'Símbolo',
      colValue: isEnglish ? 'Value' : 'Valor',
    },
    rules: {
      title: isEnglish ? 'Formation Rules' : 'Reglas de Formación',
      description: isEnglish
        ? 'To write Roman numerals correctly, follow these rules:'
        : 'Para escribir números romanos correctamente, sigue estas reglas:',
      additionTitle: isEnglish ? 'Addition (Sum)' : 'Adición (Suma)',
      additionText: isEnglish
        ? 'If a letter is to the right of another of equal or greater value, it adds up.'
        : 'Si una letra está a la derecha de otra de igual o mayor valor, se suma.',
      subtractionTitle: isEnglish
        ? 'Subtraction (Difference)'
        : 'Sustracción (Resta)',
      subtractionText: isEnglish
        ? 'If a letter of lower value is to the left of a higher one, it subtracts.'
        : 'Si una letra de menor valor está a la izquierda de una mayor, se resta.',
      repetitionTitle: isEnglish ? 'Repetition' : 'Repetición',
      repetitionText: isEnglish
        ? 'Symbols I, X, C, and M can be repeated up to three times in a row. V, L, and D are not repeated.'
        : 'Los símbolos I, X, C y M pueden repetirse hasta tres veces seguidas. V, L y D no se repiten.',
    },
    examples: {
      title: isEnglish ? 'Common Examples' : 'Ejemplos Comunes',
      description: isEnglish
        ? 'Here are some useful examples:'
        : 'Aquí tienes algunos ejemplos útiles:',
      range1to20: isEnglish ? 'Numbers 1 to 20' : 'Números del 1 al 20',
      tens: isEnglish ? 'Tens' : 'Decenas',
      bigNumbers: isEnglish ? 'Hundreds and Thousands' : 'Centenas y Millares',
      years: isEnglish ? 'Years' : 'Años',
    },
    extended: {
      title: isEnglish ? 'Extended Numbers (Vinculum)' : 'Números Extendidos (Vinculum)',
      description: isEnglish
        ? 'The standard system goes up to 3,999. For larger numbers, the "Vinculum" is used: a horizontal line over the symbol that multiplies its value by 1,000.'
        : 'El sistema estándar llega hasta 3,999. Para números mayores, se usa el "Vinculum": una línea horizontal sobre el símbolo que multiplica su valor por 1,000.',
      examplesTitle: isEnglish ? 'Large Examples' : 'Ejemplos Grandes',
    },
    history: {
      title: isEnglish ? 'History' : 'Historia',
      description: isEnglish
        ? 'The Roman numeral system originated in ancient Rome and was used throughout the Roman Empire.'
        : 'El sistema de numeración romana se originó en la antigua Roma y se utilizó en todo el Imperio Romano.',
      modernUses: isEnglish ? 'Modern Uses' : 'Usos Modernos',
      modernUsesList: isEnglish
        ? [
            '• Clocks',
            '• Book chapters',
            '• Sporting events (Super Bowl)',
            '• Names of monarchs and popes',
          ]
        : [
            '• Relojes',
            '• Capítulos de libros',
            '• Eventos deportivos (Super Bowl)',
            '• Nombres de reyes y papas',
          ],
      conclusion: isEnglish
        ? 'Although we use the Arabic system today, Roman numerals are still present in our culture.'
        : 'Aunque hoy usamos el sistema arábigo, los números romanos siguen presentes en nuestra cultura.',
    },
    tips: {
      title: isEnglish ? 'Tips' : 'Consejos',
      writingTitle: isEnglish ? 'Writing' : 'Escritura',
      writingText: isEnglish
        ? 'Break the number down into thousands, hundreds, tens, and units.'
        : 'Descompón el número en millares, centenas, decenas y unidades.',
      readingTitle: isEnglish ? 'Reading' : 'Lectura',
      readingText: isEnglish
        ? 'Read from left to right, adding or subtracting depending on position.'
        : 'Lee de izquierda a derecha, sumando o restando según la posición.',
      rangeTitle: isEnglish ? 'Range' : 'Rango',
      rangeText: isEnglish
        ? 'This calculator supports numbers from 1 to 3999.'
        : 'Esta calculadora soporta números del 1 al 3999.',
    },
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
