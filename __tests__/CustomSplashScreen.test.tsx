import React from 'react';
import { render } from '@testing-library/react-native';
import CustomSplashScreen from '../src/screens/CustomSplashScreen';

describe('CustomSplashScreen', () => {
  it('se renderiza correctamente (Snapshot)', () => {
    const { toJSON } = render(<CustomSplashScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
});