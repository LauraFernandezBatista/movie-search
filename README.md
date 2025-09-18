# Movie Search

Buscador de películas con **OMDb API**, ahora con **paginación**, **favoritos**, **dark mode** y **UI** mejorada con Tailwind + daisyUI + framer-motion.

## 🚀 Stack
- React 18 + react-router-dom 6
- Create React App (react-scripts 5)
- Tailwind CSS 3 + daisyUI
- framer-motion (animaciones)

## ⚙️ Configuración
Hay un archivo .env en la raíz del proyecto
```
REACT_APP_OMDB_KEY=tu_api_key
```
Consigue una API key gratis: https://www.omdbapi.com/apikey.aspx

## ▶️ Scripts
```bash
npm install
npm start
npm run build
```

## ✨ Funcionalidades
- Búsqueda por título (OMDb)
- **Paginación** con total de resultados
- **Favoritos** persistidos en `localStorage`
- **Dark mode** con toggle (persistente)
- Grid de tarjetas con **animaciones**
- Detalle con información ampliada
- Fallback de imagen

