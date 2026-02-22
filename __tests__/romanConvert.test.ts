import { arabicToRoman, romanToArabic, getValue } from '../src/utils/romanConvert';

describe('Utilidades de Conversión (romanConvert)', () => {
  
  // --- Pruebas de Árabe a Romano ---
  describe('arabicToRoman (Conversión de Árabe a Romano)', () => {
    it('debe convertir números básicos correctamente', () => {
      expect(arabicToRoman(1)).toBe('I');
      expect(arabicToRoman(5)).toBe('V');
      expect(arabicToRoman(10)).toBe('X');
      expect(arabicToRoman(50)).toBe('L');
      expect(arabicToRoman(100)).toBe('C');
      expect(arabicToRoman(500)).toBe('D');
      expect(arabicToRoman(1000)).toBe('M');
    });

    it('debe manejar la notación sustractiva (ej. IV, IX)', () => {
      expect(arabicToRoman(4)).toBe('IV');
      expect(arabicToRoman(9)).toBe('IX');
      expect(arabicToRoman(40)).toBe('XL');
      expect(arabicToRoman(90)).toBe('XC');
      expect(arabicToRoman(400)).toBe('CD');
      expect(arabicToRoman(900)).toBe('CM');
    });

    it('debe convertir números complejos correctamente', () => {
      expect(arabicToRoman(1984)).toBe('MCMLXXXIV');
      expect(arabicToRoman(2024)).toBe('MMXXIV');
      expect(arabicToRoman(3999)).toBe('MMMCMXCIX');
    });

    it('debe retornar mensaje de error para números fuera de rango (1-3999)', () => {
      // Tu implementación retorna un string con el error, no lanza excepción
      expect(arabicToRoman(0)).toContain('Error');
      expect(arabicToRoman(4000)).toContain('Error');
      expect(arabicToRoman(-5)).toContain('Error');
    });
  });

  // --- Pruebas de Romano a Árabe ---
  describe('romanToArabic (Conversión de Romano a Árabe)', () => {
    it('debe convertir símbolos básicos correctamente', () => {
      expect(romanToArabic('I')).toBe(1);
      expect(romanToArabic('V')).toBe(5);
      expect(romanToArabic('X')).toBe(10);
      expect(romanToArabic('L')).toBe(50);
      expect(romanToArabic('C')).toBe(100);
      expect(romanToArabic('D')).toBe(500);
      expect(romanToArabic('M')).toBe(1000);
    });

    it('debe manejar la notación sustractiva correctamente', () => {
      expect(romanToArabic('IV')).toBe(4);
      expect(romanToArabic('IX')).toBe(9);
      expect(romanToArabic('XL')).toBe(40);
      expect(romanToArabic('XC')).toBe(90);
      expect(romanToArabic('CD')).toBe(400);
      expect(romanToArabic('CM')).toBe(900);
    });

    it('debe convertir números complejos correctamente', () => {
      expect(romanToArabic('MCMLXXXIV')).toBe(1984);
      expect(romanToArabic('MMXXIV')).toBe(2024);
      expect(romanToArabic('MMMCMXCIX')).toBe(3999);
    });

    it('debe aceptar minúsculas normalizándolas', () => {
      expect(romanToArabic('iv')).toBe(4);
      expect(romanToArabic('mmxxiv')).toBe(2024);
    });

    it('debe retornar mensaje de error para caracteres inválidos', () => {
      expect(romanToArabic('A')).toContain('Error');      // Letra no romana
      expect(romanToArabic('123')).toContain('Error');    // Números
      expect(romanToArabic('XI A')).toContain('Error');   // Espacios o caracteres extra
      expect(romanToArabic('')).toContain('Error');       // String vacío
    });

    it('debe retornar error para números romanos fuera de rango (>= 4000)', () => {
      expect(romanToArabic('MMMM')).toContain('Error'); // 4000
    });

    // Nota: Tu implementación actual de romanToArabic no valida estrictamente repeticiones (ej. IIII devuelve 4).
    // Si deseas activar estas pruebas, deberás actualizar la lógica en romanConvert.ts primero.
    // it('debe validar reglas de repetición inválidas', () => {
    //   expect(romanToArabic('IIII')).toContain('Error');
    //   expect(romanToArabic('VV')).toContain('Error');
    // });
  });

  // --- Pruebas de la función interna getValue ---
  describe('getValue (Función interna)', () => {
    it('debe retornar 0 para caracteres inválidos (cobertura de default)', () => {
      expect(getValue('Z')).toBe(0);
      expect(getValue('1')).toBe(0);
    });
  });
});