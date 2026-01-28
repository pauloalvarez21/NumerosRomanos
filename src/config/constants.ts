/**
 * Configuration and Constants
 */

export const APP_CONFIG = {
  APP_NAME: 'Números Romanos',
  VERSION: '1.0.0',

  // Roman numerals constraints
  MIN_NUMBER: 1,
  MAX_NUMBER: 3999,

  // UI Constants
  BORDER_RADIUS: 12,
  PADDING: 16,
  SPACING: 8,
};

export const ROMAN_RULES = {
  description:
    'Los números romanos se escriben usando siete símbolos: I (1), V (5), X (10), L (50), C (100), D (500), M (1000)',
  rules: [
    {
      title: 'Adición',
      description:
        'Los símbolos se suman cuando están juntos en orden descendente',
      example: 'VI = 5 + 1 = 6',
    },
    {
      title: 'Sustracción',
      description:
        'I antes de V o X, X antes de L o C, C antes de D o M se restan',
      example: 'IV = 5 - 1 = 4, IX = 10 - 1 = 9',
    },
    {
      title: 'Repetición',
      description:
        'I, X, C, M pueden repetirse hasta 3 veces consecutivas. V, L, D nunca se repiten',
      example: 'III = 3, XXX = 30, MMM = 3000',
    },
  ],
};
