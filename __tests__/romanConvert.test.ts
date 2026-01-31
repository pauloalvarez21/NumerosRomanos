/**
 * Tests for Roman numeral conversion functions
 */

// Mock react-native-localize to prevent TurboModuleRegistry error
jest.mock('react-native-localize', () => ({
  getLocales: () => [
    {
      countryCode: 'ES',
      languageTag: 'es-ES',
      languageCode: 'es',
      isRTL: false,
    },
  ],
  findBestAvailableLanguage: () => ({
    languageTag: 'es-ES',
    isRTL: false,
  }),
}));

import { arabicToRoman, romanToArabic } from '../src/utils/romanConvert';
import { texts } from '../src/utils/i18n';

describe('Roman Numeral Conversion', () => {
  describe('arabicToRoman', () => {
    test('converts single digit numbers', () => {
      expect(arabicToRoman(1)).toBe('I');
      expect(arabicToRoman(2)).toBe('II');
      expect(arabicToRoman(3)).toBe('III');
      expect(arabicToRoman(4)).toBe('IV');
      expect(arabicToRoman(5)).toBe('V');
      expect(arabicToRoman(6)).toBe('VI');
      expect(arabicToRoman(7)).toBe('VII');
      expect(arabicToRoman(8)).toBe('VIII');
      expect(arabicToRoman(9)).toBe('IX');
    });

    test('converts tens', () => {
      expect(arabicToRoman(10)).toBe('X');
      expect(arabicToRoman(20)).toBe('XX');
      expect(arabicToRoman(30)).toBe('XXX');
      expect(arabicToRoman(40)).toBe('XL');
      expect(arabicToRoman(50)).toBe('L');
      expect(arabicToRoman(60)).toBe('LX');
      expect(arabicToRoman(90)).toBe('XC');
    });

    test('converts hundreds', () => {
      expect(arabicToRoman(100)).toBe('C');
      expect(arabicToRoman(200)).toBe('CC');
      expect(arabicToRoman(300)).toBe('CCC');
      expect(arabicToRoman(400)).toBe('CD');
      expect(arabicToRoman(500)).toBe('D');
      expect(arabicToRoman(600)).toBe('DC');
      expect(arabicToRoman(900)).toBe('CM');
    });

    test('converts thousands', () => {
      expect(arabicToRoman(1000)).toBe('M');
      expect(arabicToRoman(2000)).toBe('MM');
      expect(arabicToRoman(3000)).toBe('MMM');
    });

    test('converts complex numbers', () => {
      expect(arabicToRoman(27)).toBe('XXVII');
      expect(arabicToRoman(49)).toBe('XLIX');
      expect(arabicToRoman(1984)).toBe('MCMLXXXIV');
      expect(arabicToRoman(2024)).toBe('MMXXIV');
      expect(arabicToRoman(3999)).toBe('MMMCMXCIX');
    });

    test('rejects invalid input', () => {
      expect(arabicToRoman(0)).toBe(texts.errors.range);
      expect(arabicToRoman(4000)).toBe(texts.errors.range);
      expect(arabicToRoman(-5)).toBe(texts.errors.range);
    });
  });

  describe('romanToArabic', () => {
    test('converts single symbols', () => {
      expect(romanToArabic('I')).toBe(1);
      expect(romanToArabic('V')).toBe(5);
      expect(romanToArabic('X')).toBe(10);
      expect(romanToArabic('L')).toBe(50);
      expect(romanToArabic('C')).toBe(100);
      expect(romanToArabic('D')).toBe(500);
      expect(romanToArabic('M')).toBe(1000);
    });

    test('converts additive combinations', () => {
      expect(romanToArabic('II')).toBe(2);
      expect(romanToArabic('III')).toBe(3);
      expect(romanToArabic('VI')).toBe(6);
      expect(romanToArabic('VII')).toBe(7);
      expect(romanToArabic('XII')).toBe(12);
      expect(romanToArabic('XX')).toBe(20);
      expect(romanToArabic('XXX')).toBe(30);
    });

    test('converts subtractive combinations', () => {
      expect(romanToArabic('IV')).toBe(4);
      expect(romanToArabic('IX')).toBe(9);
      expect(romanToArabic('XL')).toBe(40);
      expect(romanToArabic('XC')).toBe(90);
      expect(romanToArabic('CD')).toBe(400);
      expect(romanToArabic('CM')).toBe(900);
    });

    test('converts complex numbers', () => {
      expect(romanToArabic('XXVII')).toBe(27);
      expect(romanToArabic('XLIX')).toBe(49);
      expect(romanToArabic('MCMLXXXIV')).toBe(1984);
      expect(romanToArabic('MMXXIV')).toBe(2024);
      expect(romanToArabic('MMMCMXCIX')).toBe(3999);
    });

    test('handles lowercase input', () => {
      expect(romanToArabic('i')).toBe(1);
      expect(romanToArabic('iv')).toBe(4);
      expect(romanToArabic('xxvii')).toBe(27);
    });

    test('rejects invalid input', () => {
      expect(romanToArabic('ABCD')).toBe(texts.errors.invalidChars);
      expect(romanToArabic('123')).toBe(texts.errors.invalidChars);
      expect(romanToArabic('')).toBe(texts.errors.enterRoman);
    });
  });
});
