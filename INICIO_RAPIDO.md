# 🚀 INICIO RÁPIDO - Números Romanos App

## Lo que se ha creado

Una aplicación React Native completa con:

- ✅ 3 pantallas principales (Home, Conversión, Información)
- ✅ Navegación por TabBar
- ✅ Conversión bidireccional de números romanos ↔ arábigos
- ✅ Tests unitarios (12/12 pasando)
- ✅ Tema dinámico (claro/oscuro)
- ✅ Validación completa
- ✅ Código limpio con TypeScript

## 📋 Pasos para comenzar

### 1. Verificar instalación de dependencias

```bash
cd g:\programacion\react\NumerosRomanos
npm install
```

### 2. Ejecutar la aplicación

#### Para Android:

```bash
npm run android
```

- Metro se inicia automáticamente
- Se compila la aplicación
- Se abre en el emulador/dispositivo

#### Para iOS:

```bash
cd ios && pod install && cd ..
npm run ios
```

- Se instalan dependencias de iOS
- Se ejecuta en el simulador

#### O iniciar Metro manualmente:

```bash
npm start
# En otra terminal:
npm run android    # O npm run ios
```

## ✅ Verificar que todo funciona

### Ejecutar tests:

```bash
npm test -- romanConvert.test.ts
```

Deberías ver: **Test Suites: 1 passed | Tests: 12 passed** ✓

### Verificar código:

```bash
npm run lint
```

Deberías ver: **0 errors** (3 warnings son normales)

## 🎮 Usar la aplicación

### Pantalla de Inicio (🏠)

- Lee la información sobre números romanos
- Conoce las características de la app

### Pantalla de Conversión (🔄)

- Selecciona el tipo de conversión (Árabe → Romano o Romano → Árabe)
- Ingresa un número
- Presiona "Convertir"
- Usa "Limpiar" para resetear

**Ejemplos**:

- Árabe: Ingresa `42` → Resultado: `XLII`
- Romano: Ingresa `MMXXIV` → Resultado: `2024`

### Pantalla de Información (ℹ️)

- Expande las secciones para aprender más
- Incluye tabla de símbolos, reglas, ejemplos y historia

## 📁 Estructura creada

```
src/
├── config/              # Configuración
├── navigation/          # TabBar navigator
├── screens/             # 3 pantallas principales
├── styles/              # Estilos compartidos
└── utils/               # Lógica de conversión

__tests__/               # Tests (todos pasando ✓)
```

## 📚 Documentación

Consulta estos archivos para más detalles:

- **README.md**: Descripción general
- **NUMBERS_GUIDE.md**: Guía completa de uso
- **DESARROLLO.md**: Guía para desarrolladores
- **RESUMEN_IMPLEMENTACION.md**: Detalles técnicos

## 🔧 Troubleshooting

**Si Metro no inicia:**

```bash
npm start -- --reset-cache
```

**Si hay problemas con dependencias:**

```bash
npm install
```

**Si hay errores de Android:**

```bash
cd android && ./gradlew clean && cd ..
npm run android
```

**Si hay errores de iOS:**

```bash
cd ios && pod install --repo-update && cd ..
npm run ios
```

## 🎯 Próximas acciones

1. **Ejecutar la app**: `npm run android` o `npm run ios`
2. **Probar conversiones**: Usa la pantalla 🔄
3. **Leer información**: Consulta la pantalla ℹ️
4. **Ejecutar tests**: `npm test`

## 💡 Características principales

✨ **Conversión rápida**: Convierte entre 1-3999
🎨 **Interfaz moderna**: Con tema claro/oscuro
📱 **Navegación fluida**: TabBar con emojis
📚 **Educativo**: Sección completa de información
✅ **Validación robusta**: Manejo de errores
🧪 **Testeable**: 12/12 tests pasando

## ¿Preguntas o problemas?

- Revisa **DESARROLLO.md** para detalles técnicos
- Consulta **NUMBERS_GUIDE.md** para información sobre números romanos
- Los archivos están bien documentados con comentarios

---

**¡Disfruta tu aplicación!** 🎉

Para empezar ahora: **`npm run android`** o **`npm run ios`**
