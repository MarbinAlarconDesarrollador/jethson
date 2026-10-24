# Jethson Dash — Level 14

PWA sin backend, creada con HTML, CSS y JavaScript Vanilla.

## Ejecutar

Desde esta carpeta: `python3 -m http.server 8000`. Abre `http://localhost:8000`. No uses `file://` para probar el Service Worker.

## Personalizar

- Agrega tus imágenes en `assets/images/foto-01.jpg` hasta `foto-08.jpg` (o modifica el arreglo `gallery` en `js/app.js`).
- Agrega la canción en `assets/audio/cumpleanos.mp3` (no se incluye audio).
- Edita el mensaje familiar en `index.html`.
- Ajusta colores en `css/styles.css`.

## Publicar

Sube la carpeta a GitHub Pages, Netlify o Cloudflare Pages. La PWA requiere HTTPS o localhost. Cambia `CACHE` en `sw.js` cuando actualices recursos.

## Nota

La reproducción de música puede requerir un toque adicional por políticas del navegador. El botón de música permite iniciarla. Los recursos multimedia añadidos posteriormente quedan disponibles sin conexión tras haberse descargado y almacenado en caché.

## Galería de recuerdos
Se integraron 29 fotografías recientes del archivo proporcionado, conservando todas y normalizando sus nombres. La galería muestra mensajes generales (no identifica personas ni acontecimientos específicos). Para editar títulos y mensajes, modifica el arreglo `gallery` de `js/app.js`.
