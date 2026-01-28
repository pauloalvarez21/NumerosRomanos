/**
 * Utility functions for converting between Roman and Arabic numerals
 */
import { texts } from './i18n';

// Mapping of Roman numerals to their values in descending order
const romanValues = [
  { numeral: 'M', value: 1000 },
  { numeral: 'CM', value: 900 },
  { numeral: 'D', value: 500 },
  { numeral: 'CD', value: 400 },
  { numeral: 'C', value: 100 },
  { numeral: 'XC', value: 90 },
  { numeral: 'L', value: 50 },
  { numeral: 'XL', value: 40 },
  { numeral: 'X', value: 10 },
  { numeral: 'IX', value: 9 },
  { numeral: 'V', value: 5 },
  { numeral: 'IV', value: 4 },
  { numeral: 'I', value: 1 },
];

/**
 * Convert an Arabic number to Roman numerals
 * @param num - The Arabic number (1-3999)
 * @returns The Roman numeral representation
 */
export const arabicToRoman = (num: number): string => {
  // Validate input
  if (!Number.isInteger(num) || num <= 0 || num >= 4000) {
    return texts.errors.range;
  }

  let result = '';
  let remaining = num;

  for (const { numeral, value } of romanValues) {
    while (remaining >= value) {
      result += numeral;
      remaining -= value;
    }
  }

  return result;
};

/**
 * Convert Roman numerals to an Arabic number
 * @param roman - The Roman numeral string
 * @returns The Arabic number representation
 */
export const romanToArabic = (roman: string): number | string => {
  // Validate and normalize input
  const cleanRoman = roman.trim().toUpperCase();

  if (cleanRoman.length === 0) {
    return texts.errors.enterRoman;
  }

  // Validate that input contains only valid Roman numeral characters
  if (!/^[IVXLCDM]+$/.test(cleanRoman)) {
    return texts.errors.invalidChars;
  }

  let result = 0;
  let i = 0;

  while (i < cleanRoman.length) {
    const current = cleanRoman[i];
    const next = cleanRoman[i + 1];

    // Check for subtractive notation (IV, IX, XL, XC, CD, CM)
    if (next && getValue(current) < getValue(next)) {
      result += getValue(next) - getValue(current);
      i += 2;
    } else {
      result += getValue(current);
      i += 1;
    }
  }

  // Validate the result (should be between 1 and 3999)
  if (result <= 0 || result >= 4000) {
    return texts.errors.resultRange;
  }

  return result;
};

/**
 * Get the numeric value of a Roman numeral character
 * @param char - A single Roman numeral character
 * @returns The numeric value
 */
const getValue = (char: string): number => {
  switch (char) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
    default:
      return 0;
  }
};
