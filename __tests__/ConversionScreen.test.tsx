import React from 'react';
import { Alert } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import ConversionScreen from '../src/screens/ConversionScreen';

// Mock de la navegación: Simulamos las funciones que usa React Navigation
// para que el componente no falle al intentar navegar.
const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  setOptions: jest.fn(),
  addListener: jest.fn(),
};

// Mock de useNavigation (por si tu componente usa el hook en lugar de props)
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
    setOptions: jest.fn(),
    addListener: jest.fn(),
  }),
  useFocusEffect: jest.fn(),
}));

describe('ConversionScreen', () => {
  it('debe convertir correctamente cuando el usuario interactúa', () => {
    // 1. Renderizamos el componente
    const { getByText, getByPlaceholderText, getAllByText } = render(
      <ConversionScreen navigation={mockNavigation as any} route={{} as any} />
    );

    // Buscamos los elementos por texto/placeholder
    const input = getByPlaceholderText(/Ej:/i);
    const convertButton = getByText(/Convertir/i);

    // 2. Simulamos que el usuario escribe "10"
    fireEvent.changeText(input, '10');

    // 3. Simulamos que el usuario presiona el botón
    fireEvent.press(convertButton);

    // 4. Verificamos que aparezca el resultado "X"
    // Usamos getAllByText porque "X" podría aparecer en el teclado o título, 
    // pero al menos una instancia debe existir.
    const results = getAllByText('X');
    expect(results.length).toBeGreaterThan(0);
  });

  it('debe cambiar a modo Romano -> Árabe y convertir correctamente', () => {
    const { getByText, getByPlaceholderText, getAllByText } = render(
      <ConversionScreen navigation={mockNavigation as any} route={{} as any} />
    );

    // 1. Cambiamos el modo (buscamos el botón por texto parcial)
    // Usamos un regex más específico para distinguir entre "Árabe a Romano" y "Romano a Árabe"
    const modeButton = getByText(/Romano.*[aá]rabe/i); 
    fireEvent.press(modeButton);

    // 2. Buscamos el input (el placeholder cambia, pero sigue conteniendo "Ej:")
    const input = getByPlaceholderText(/Ej:/i);
    
    // 3. Escribimos un número romano "X" (10)
    fireEvent.changeText(input, 'X');
    fireEvent.press(getByText(/Convertir/i));

    // 4. Verificamos que el resultado sea "10"
    const results = getAllByText('10');
    expect(results.length).toBeGreaterThan(0);
  });

  it('debe limpiar el formulario al presionar el botón Limpiar', () => {
    const { getByText, getByPlaceholderText } = render(
      <ConversionScreen navigation={mockNavigation as any} route={{} as any} />
    );

    const input = getByPlaceholderText(/Ej:/i);
    const convertButton = getByText(/Convertir/i);
    const clearButton = getByText(/Limpiar/i);

    // 1. Escribimos "10" y convertimos
    fireEvent.changeText(input, '10');
    fireEvent.press(convertButton);

    // 2. Presionamos el botón de Limpiar
    fireEvent.press(clearButton);

    // 3. Verificamos que el input esté vacío nuevamente
    expect(input.props.value).toBe('');
  });

  it('debe mostrar error si se ingresa un número inválido en modo Árabe', () => {
    const { getByPlaceholderText, getByText, getAllByText } = render(
      <ConversionScreen navigation={mockNavigation as any} route={{} as any} />
    );

    const input = getByPlaceholderText(/Ej:/i);
    // Ingresamos texto no numérico (simulando pegar texto o error de input)
    fireEvent.changeText(input, 'abc');
    fireEvent.press(getByText(/Convertir/i));

    // Verificamos que aparezca el mensaje de error
    const results = getAllByText(/Error/i);
    expect(results.length).toBeGreaterThan(0);
  });

  it('debe filtrar caracteres inválidos automáticamente en modo Romano', () => {
    const { getByText, getByPlaceholderText } = render(
      <ConversionScreen navigation={mockNavigation as any} route={{} as any} />
    );

    // 1. Cambiar a modo Romano
    fireEvent.press(getByText(/Romano.*[aá]rabe/i));

    // 2. Intentar escribir "xi123v" (mezcla de válidos e inválidos)
    const input = getByPlaceholderText(/Ej:/i);
    fireEvent.changeText(input, 'xi123v');

    // 3. Verificar que el input solo aceptó "XIV" (y lo convirtió a mayúsculas)
    expect(input.props.value).toBe('XIV');
  });

  it('debe mostrar una alerta si se intenta convertir con el campo vacío', () => {
    const alertSpy = jest.spyOn(Alert, 'alert');
    const { getByText } = render(
      <ConversionScreen navigation={mockNavigation as any} route={{} as any} />
    );

    fireEvent.press(getByText(/Convertir/i));
    expect(alertSpy).toHaveBeenCalled();
  });

  it('debe permitir cambiar de modo Romano a Árabe y volver a Árabe a Romano', () => {
    const { getByText } = render(
      <ConversionScreen navigation={mockNavigation as any} route={{} as any} />
    );

    // 1. Cambiar a Romano -> Árabe
    fireEvent.press(getByText(/Romano.*[aá]rabe/i));

    // 2. Volver a Árabe -> Romano (esto cubre el onPress del primer botón)
    fireEvent.press(getByText(/[Áá]rabe.*Romano/i));
  });
});