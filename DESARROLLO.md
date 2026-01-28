# Guía de Desarrollo - Números Romanos App

## 🚀 Comenzar a Desarrollar

### Instalación Inicial

```bash
# Instalar dependencias
npm install

# (Solo para iOS) Instalar dependencias de Pods
cd ios && pod install && cd ..
```

### Ejecutar la Aplicación

```bash
# Opción 1: Usar el script npm (recomendado)
npm run android    # Android
npm run ios        # iOS

# Opción 2: Usar directamente React Native
react-native run-android
react-native run-ios

# Opción 3: Iniciar Metro manualmente
npm start          # En una terminal
npm run android    # En otra terminal
```

## 📁 Estructura de Carpetas

```
src/
├── config/              # Configuración y constantes
│   └── constants.ts
├── navigation/          # Configuración de navegación
│   ├── RootNavigator.tsx
│   └── types.ts
├── screens/             # Componentes de pantalla
│   ├── HomeScreen.tsx
│   ├── ConversionScreen.tsx
│   └── InfoScreen.tsx
├── styles/              # Estilos compartidos
│   └── commonStyles.ts
└── utils/               # Funciones utilitarias
    └── romanConvert.ts
```

## 🛠️ Flujo de Desarrollo

### Agregar una Nueva Pantalla

1. Crear el componente en `src/screens/`:

```tsx
// src/screens/NewScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useColors } from '../styles/commonStyles';

const NewScreen = () => {
  const colors = useColors();

  return (
    <View>
      <Text>Nueva Pantalla</Text>
    </View>
  );
};

export default NewScreen;
```

2. Agregar la ruta en `src/navigation/RootNavigator.tsx`:

```tsx
<Tab.Screen
  name="New"
  component={NewScreen}
  options={{
    tabBarLabel: 'Nueva',
    tabBarIcon: ({ color, size }) => (
      <Text style={{ fontSize: size, color }}>🆕</Text>
    ),
  }}
/>
```

### Agregar un Nuevo Servicio

1. Crear archivo en `src/utils/`:

```tsx
// src/utils/myService.ts
export const myFunction = (param: string): string => {
  return `Resultado: ${param}`;
};
```

2. Usarlo en componentes:

```tsx
import { myFunction } from '../utils/myService';
```

## 🎨 Sistema de Colores

El sistema de colores está implementado en `src/styles/commonStyles.ts`:

```tsx
const lightColors = {
  background: '#FFFFFF',
  primary: '#2C3E50',
  secondary: '#3498DB',
  text: '#2C3E50',
  lightText: '#7F8C8D',
  border: '#ECF0F1',
  success: '#27AE60',
  error: '#E74C3C',
  warning: '#F39C12',
};

const darkColors = {
  // ... versión oscura
};
```

Usar en componentes:

```tsx
const colors = useColors();

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    color: colors.text,
  },
});
```

## ✅ Testing

### Ejecutar Tests

```bash
# Todos los tests
npm test

# Un archivo específico
npm test romanConvert.test.ts

# Con coverage
npm test -- --coverage
```

### Crear Nuevos Tests

Crear archivo en `__tests__/`:

```tsx
// __tests__/myFunction.test.ts
import { myFunction } from '../src/utils/myFunction';

describe('My Function', () => {
  test('should work correctly', () => {
    expect(myFunction('input')).toBe('expected output');
  });
});
```

## 🔍 Debugging

### Android

1. Abrir React Native Debugger
2. En la app, presionar `Ctrl + M` y seleccionar "Debug"
3. Usar la consola del debugger

### iOS

1. Presionar `Cmd + D` en el simulador
2. Seleccionar "Debug"
3. Usar Safari DevTools

### Console Logging

```tsx
console.log('Debug:', myVariable);
console.warn('Warning:', error);
console.error('Error:', error);
```

## 📦 Dependencias Principales

- **@react-navigation/native**: Sistema de navegación
- **@react-navigation/bottom-tabs**: Navegación por tabs
- **react-native-safe-area-context**: Manejo de áreas seguras
- **react-native-gesture-handler**: Gestos
- **react-native-reanimated**: Animaciones
- **react-native-screens**: Optimización

## 🎯 Mejoras Futuras

Posibles mejoras para la aplicación:

- [ ] Agregar historial de conversiones
- [ ] Guardar conversiones favoritas
- [ ] Agregar temas personalizados
- [ ] Soporte para números romanos mayores (vincularia)
- [ ] Compartir resultados
- [ ] Modo desconectado

## 🐛 Solución de Problemas

### Metro no se inicia

```bash
npm start -- --reset-cache
```

### Problemas de dependencias

```bash
npm install
npm run android
```

### Limpiar caché

```bash
npm start -- --reset-cache
cd android && ./gradlew clean && cd ..
```

### Problema: "Could not get BatchedBridge"

1. Reiniciar Metro: `npm start -- --reset-cache`
2. Desinstalar app del dispositivo
3. `npm run android`

## 📖 Referencia de Comandos

```bash
npm start              # Iniciar Metro
npm run android        # Ejecutar en Android
npm run ios            # Ejecutar en iOS
npm test              # Ejecutar tests
npm run lint          # Verificar código
```

## 🤝 Contribuir

Si contribuyes al proyecto:

1. Mantén el código limpio y bien documentado
2. Agrega tests para nuevas funcionalidades
3. Sigue las convenciones de nombres
4. Usa TypeScript siempre

## 📞 Soporte

Para más información:

- [React Native Documentation](https://reactnative.dev)
- [React Navigation Documentation](https://reactnavigation.org)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

¡Feliz codificación! 💻
