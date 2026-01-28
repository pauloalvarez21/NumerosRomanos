import { useState, useEffect } from 'react';

const es = require('../data/es.json');
const en = require('../data/en.json');

const translations = {
  es,
  en,
};

type Locale = 'es' | 'en';
let currentLocale: Locale = 'es'; // Idioma por defecto

// Sistema simple de eventos para notificar cambios de idioma
const listeners = new Set<() => void>();

export const setLocale = (locale: Locale) => {
  currentLocale = locale;
  listeners.forEach(listener => listener());
};

export const getLocale = () => currentLocale;

export const t = (key: string) => {
  const keys = key.split('.');
  let value: any = translations[currentLocale];

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key; // Retorna la clave si no encuentra la traducción
    }
  }

  return value || key;
};

export const useTranslation = () => {
  const [, setTick] = useState(0);

  useEffect(() => {
    const listener = () => setTick(tick => tick + 1);
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, []);

  return { t, locale: currentLocale, setLocale };
};
