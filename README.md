# 📱 Números Romanos App

Una aplicación React Native moderna y completa para convertir números entre romanos y arábigos con navegación por TabBar y secciones de información detallada.

## 🎯 Características Principales

- ✅ **Conversión Bidireccional**: Convierte entre números arábigos (1-3999) y números romanos
- 🏠 **Pantalla de Inicio**: Bienvenida e información general de la aplicación
- 🔄 **Convertidor Interactivo**: Interfaz intuitiva con dos modos de conversión
- 📚 **Sección Informativa**: Guía completa sobre números romanos con ejemplos expandibles
- 🎨 **Tema Dinámico**: Soporta modo claro y oscuro automáticamente
- 📱 **Navegación TabBar**: Acceso fácil a las 3 pantallas principales
- 🧪 **Tests Unitarios**: Suite completa de pruebas para la lógica de conversión
- ✨ **Código Limpio**: Tipado con TypeScript y código bien estructurado

## 📋 Pantallas

### 1. 🏠 Pantalla de Inicio (Home)

- Bienvenida a la aplicación
- Características principales
- Información sobre números romanos
- Ejemplos rápidos
- Rango de números soportados (1-3999)

### 2. 🔄 Pantalla de Conversión (Conversion)

- Dos modos de conversión:
  - Árabe → Romano (1-3999)
  - Romano → Árabe (I-MMMCMXCIX)
- Botones de Convertir y Limpiar
- Visualización clara de resultados
- Validación de entrada con mensajes de error
- Consejos útiles

### 3. ℹ️ Pantalla de Información (Info)

- **Símbolos Básicos**: Tabla de los 7 símbolos romanos
- **Reglas de Formación**: Adición, sustracción, repetición
- **Ejemplos Prácticos**: Conversiones comunes (1-20, decenas, centenas, años)
- **Historia y Uso**: Contexto histórico y usos modernos
- **Consejos Útiles**: Guía para escribir y leer números romanos
- Secciones expandibles para mejor legibilidad

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js 20+
- npm o yarn
- React Native CLI
- Android Studio (para Android) o Xcode (para iOS)

### Instalación

```bash
# Navegar al proyecto
cd NumerosRomanos

# Instalar dependencias
npm install

# (Solo iOS) Instalar dependencias de Pods
cd ios && pod install && cd ..
```

### Ejecutar la Aplicación

```bash
# Android
npm run android

# iOS
npm run ios

# O iniciar Metro manualmente
npm start
```

## 📖 Ejemplos de Conversión

### Árabe a Romano

```
1 = I
3 = III
4 = IV
9 = IX
10 = X
27 = XXVII
40 = XL
49 = XLIX
100 = C
1984 = MCMLXXXIV
2024 = MMXXIV
3999 = MMMCMXCIX
```

### Romano a Árabe

```
I = 1
V = 5
X = 10
XII = 12
XL = 40
XLIX = 49
CC = 200
MCMXC = 1990
MMXXIV = 2024
```

## 📁 Estructura del Proyecto

```
src/
├── config/                  # Configuración y constantes
│   └── constants.ts
├── navigation/              # Sistema de navegación
│   ├── RootNavigator.tsx
│   └── types.ts
├── screens/                 # Componentes de pantalla
│   ├── HomeScreen.tsx
│   ├── ConversionScreen.tsx
│   └── InfoScreen.tsx
├── styles/                  # Estilos y temas
│   └── commonStyles.ts
└── utils/                   # Utilidades
    └── romanConvert.ts

__tests__/                   # Tests
├── App.test.tsx
└── romanConvert.test.ts
```

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

1. **Adición**: Símbolos se suman en orden descendente (VI = 6, XII = 12)
2. **Sustracción**: I, X, C en casos específicos (IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900)
3. **Repetición**: I, X, C, M máximo 3 veces (III = 3, XXX = 30, MMMM no permitido)

## 🛠️ Scripts Disponibles

```bash
npm start              # Iniciar Metro
npm run android        # Ejecutar en Android
npm run ios            # Ejecutar en iOS
npm test              # Ejecutar tests (12/12 pasando ✓)
npm run lint          # Verificar código
```

## 🧪 Tests

La aplicación incluye una suite completa de tests con cobertura de:

- Conversión de números individuales (1-9)
- Conversión de decenas (10-90)
- Conversión de centenas (100-900)
- Conversión de millares (1000-3000)
- Conversión de números complejos
- Manejo de errores y validación

```bash
npm test -- romanConvert.test.ts
```

**Resultado**: ✅ **12/12 tests pasando**

## 🎨 Tema

La aplicación detecta automáticamente el tema del sistema (claro/oscuro) y se adapta dinámicamente.

## 📚 Documentación Adicional

- [NUMBERS_GUIDE.md](NUMBERS_GUIDE.md) - Guía completa de uso
- [DESARROLLO.md](DESARROLLO.md) - Guía de desarrollo

## 💡 Mejoras Futuras

- Historial de conversiones
- Conversiones favoritas
- Temas personalizables
- Números romanos extendidos (vincularia)
- Compartir resultados

## 🔒 Validación

La aplicación valida todas las entradas:

- ❌ Números fuera del rango (< 1 o > 3999)
- ❌ Caracteres inválidos en números romanos
- ❌ Campos vacíos

---

**¡Disfruta convirtiendo números romanos!** 🏛️✨

**Versión**: 1.0.0 | **React Native**: 0.83.1 | **TypeScript**: 5.8.3
