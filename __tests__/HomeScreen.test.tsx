import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';

// Definimos el objeto mock para pasarlo como prop
const mockNavigationProps = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  setOptions: jest.fn(),
  addListener: jest.fn(),
};

// Mock de la librería de navegación (hooks)
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

describe('HomeScreen', () => {
  it('se renderiza correctamente (Snapshot)', () => {
    const { toJSON } = render(
      <HomeScreen 
        navigation={mockNavigationProps as any} 
        route={{} as any} 
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});