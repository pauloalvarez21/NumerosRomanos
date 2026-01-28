# Números Romanos App

Una aplicación React Native para convertir números arábigos a números romanos y viceversa, con información detallada sobre cómo funcionan los números romanos.

## 🎯 Características

- ✅ **Conversión Bidireccional**: Convierte números arábigos (1-3999) a romanos y viceversa
- 🏠 **Pantalla de Inicio**: Información general y ejemplos rápidos
- 🔄 **Convertidor Interactivo**: Interfaz intuitiva para realizar conversiones
- 📚 **Sección de Información**: Guía completa sobre números romanos
- 🎨 **Diseño Moderno**: Interfaz responsiva con soporte para modo oscuro
- 📱 **Navegación por TabBar**: Acceso fácil a todas las pantallas

## 🏗️ Estructura del Proyecto

```
src/
├── navigation/
│   └── RootNavigator.tsx          # Configuración de navegación TabBar
├── screens/
│   ├── HomeScreen.tsx              # Pantalla de inicio
│   ├── ConversionScreen.tsx        # Pantalla de conversión
│   └── InfoScreen.tsx              # Pantalla de información
├── styles/
│   └── commonStyles.ts             # Estilos compartidos y colores
└── utils/
    └── romanConvert.ts             # Lógica de conversión
```

## 📋 Requisitos Previos

- Node.js (versión 20 o superior)
- npm o yarn
- React Native CLI
- Android Studio (para desarrollo en Android)
- Xcode (para desarrollo en iOS)

## ⚙️ Instalación

1. **Clonar o navegar al proyecto**:

   ```bash
   cd NumerosRomanos
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

## 🚀 Ejecución

### Android

```bash
npm run android
```

### iOS

```bash
npm run ios
```

### Metro (Servidor de desarrollo)

```bash
npm start
```

## 📖 Guía de Uso

### Pantalla de Inicio (🏠)

- Vista general de la aplicación
- Información sobre números romanos
- Ejemplos rápidos de conversión
- Descripción de características

### Pantalla de Conversión (🔄)

1. Selecciona el tipo de conversión:

   - **Árabe → Romano**: Convierte números del 1 al 3999
   - **Romano → Árabe**: Convierte números romanos válidos

2. Ingresa el valor a convertir
3. Presiona "Convertir" para obtener el resultado
4. Usa "Limpiar" para resetear los campos

**Ejemplos válidos**:

- Árabe a Romano: 1, 27, 49, 2024, 3999
- Romano a Árabe: I, III, IV, IX, XL, XLIX, MMXXIV

### Pantalla de Información (ℹ️)

- **Símbolos Básicos**: Tabla de los 7 símbolos romanos principales
- **Reglas de Formación**:
  - Adición
  - Sustracción
  - Repetición
- **Ejemplos Prácticos**: Conversiones de números comunes
- **Historia y Uso**: Contexto histórico y usos modernos
- **Consejos Útiles**: Guía para escribir y leer números romanos

## 🔢 Reglas de Números Romanos

### Símbolos Básicos

| Símbolo | Valor |
| ------- | ----- |
| I       | 1     |
| V       | 5     |
| X       | 10    |
| L       | 50    |
| C       | 100   |
| D       | 500   |
| M       | 1000  |

### Reglas de Formación

1. **Adición**: Los símbolos se suman (VI = 6)
2. **Sustracción**: I, X, C solo se usan para restar (IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900)
3. **Repetición**: I, X, C, M pueden repetirse hasta 3 veces (III = 3, XXX = 30, CCC = 300, MMM = 3000)

### Rango Válido

- Mínimo: 1 (I)
- Máximo: 3999 (MMMCMXCIX)

## 🎨 Temas Soportados

La aplicación detecta automáticamente el tema del sistema:

- **Modo Claro**: Colores claros con texto oscuro
- **Modo Oscuro**: Colores oscuros con texto claro

## 🛠️ Desarrollo

### Dependencias Principales

- `@react-navigation/native`: Navegación principal
- `@react-navigation/bottom-tabs`: Navegación por TabBar
- `react-native-gesture-handler`: Gestos
- `react-native-reanimated`: Animaciones
- `react-native-screens`: Optimización de pantallas

### Scripts Disponibles

```bash
npm run android      # Ejecutar en Android
npm run ios         # Ejecutar en iOS
npm start           # Iniciar Metro
npm test            # Ejecutar tests
npm run lint        # Verificar código
```

## 📝 Ejemplos de Conversión

### Árabe a Romano

- 3 = III
- 10 = X
- 27 = XXVII
- 49 = XLIX
- 100 = C
- 1984 = MCMLXXXIV
- 2024 = MMXXIV
- 3999 = MMMCMXCIX

### Romano a Árabe

- I = 1
- V = 5
- X = 10
- XL = 40
- XLIX = 49
- CC = 200
- MCMXC = 1990
- MMXXIV = 2024

## 🐛 Manejo de Errores

La aplicación valida las entradas y muestra mensajes de error claros:

- Números fuera del rango (< 1 o > 3999)
- Caracteres inválidos en números romanos
- Combinaciones inválidas de sustracción
- Campos vacíos

## 💡 Consejos de Uso

1. **Modo de conversión rápida**: Alterna entre los dos modos para conversiones bidireccionales
2. **Usa la pantalla de información**: Consulta las reglas si tienes dudas
3. **Valida ejemplos**: La pantalla de info tiene muchos ejemplos para referencia

## 📞 Soporte

Si encuentras problemas o tienes sugerencias, considera revisar:

- La sección de Información (ℹ️) para aclaraciones
- Que los números estén dentro del rango válido (1-3999)
- Que los números romanos solo usen mayúsculas

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

¡Disfruta convirtiendo números romanos! 🏛️
