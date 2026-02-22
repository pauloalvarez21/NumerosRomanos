import React from 'react';
import { render } from '@testing-library/react-native';
import InfoScreen from '../src/screens/InfoScreen';

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

describe('InfoScreen', () => {
  it('se renderiza correctamente (Snapshot)', () => {
    const { toJSON } = render(
      <InfoScreen 
        navigation={mockNavigationProps as any} 
        route={{} as any} 
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});