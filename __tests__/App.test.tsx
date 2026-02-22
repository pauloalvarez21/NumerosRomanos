/**
 * @format
 */

import React from 'react';
import { render, act } from '@testing-library/react-native';
import App from '../App';

// Usamos temporizadores falsos para controlar el setTimeout del Splash Screen
jest.useFakeTimers();

test('renders correctly', () => {
  render(<App />);
  
  // Avanzamos el tiempo para ejecutar el temporizador pendiente y evitar "leaks"
  act(() => {
    jest.runAllTimers();
  });
});
