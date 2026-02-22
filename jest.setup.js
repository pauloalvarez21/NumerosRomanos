// Importamos matchers personalizados de testing-library (ej. toHaveTextContent)
import '@testing-library/jest-native/extend-expect';

// Mock para react-native-localize
jest.mock('react-native-localize', () => ({
  getLocales: () => [
    { countryCode: 'ES', languageTag: 'es-ES', languageCode: 'es', isRTL: false },
  ],
  findBestAvailableLanguage: () => ({
    languageTag: 'es',
    isRTL: false,
  }),
  getNumberFormatSettings: () => ({
    decimalSeparator: ',',
    groupingSeparator: '.',
  }),
  getCalendar: () => 'gregorian',
  getCountry: () => 'ES',
  getCurrencies: () => ['EUR'],
  getTemperatureUnit: () => 'celsius',
  getTimeZone: () => 'Europe/Madrid',
  uses24HourClock: () => true,
  usesMetricSystem: () => true,
}));

// Mock para react-native-google-mobile-ads
jest.mock('react-native-google-mobile-ads', () => ({
  BannerAd: () => null,
  BannerAdSize: {
    BANNER: 'BANNER',
    ADAPTIVE_BANNER: 'ADAPTIVE_BANNER',
    FULL_BANNER: 'FULL_BANNER',
    LARGE_BANNER: 'LARGE_BANNER',
  },
  TestIds: {
    BANNER: 'ca-app-pub-3940256099942544/6300978111',
  },
  useForeground: () => {},
}));

// Polyfill para evitar error "window.dispatchEvent is not a function" en entornos de prueba
if (typeof window !== 'undefined' && !window.dispatchEvent) {
  Object.defineProperty(window, 'dispatchEvent', {
    value: jest.fn(),
  });
}