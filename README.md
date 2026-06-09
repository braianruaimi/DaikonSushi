https://braianruaimi.github.io/DaikonSushi/

# Daikon Sushi Delivery

Repositorio de la web estática de Daikon Sushi Delivery (SPA vanilla JS).

Enlaces útiles:
- GitHub Pages: https://braianruaimi.github.io/DaikonSushi/
- Repo (GitHub): https://github.com/braianruaimi/DaikonSushi.git
- Instagram: https://www.instagram.com/daikonsushi.lp/

Prueba rápida desde el móvil:

1. Esperá a que haga `commit` y `push` (ya ejecuté los comandos desde el equipo).
2. Abrí la app GitHub o el navegador en tu celular y visitá el repositorio o la página GitHub Pages para ver los cambios.

Contacto de pruebas (WhatsApp): `2213039649` (usado por la acción "ENVIAR PEDIDO").

Notas:
- El proyecto es una SPA con `index.html`, `style.css`, `app.js` y `service-worker.js`.
- Cambios recientes: splash inicial, modal oferta, mejoras de badges, ajustes tipográficos y enlaces a Instagram.

## Archivos principales

- `index.html`: estructura principal de la tienda.
- `style.css`: estilos visuales y responsive.
- `app.js`: catálogo, filtros, carrito y lógica de combos.
- `service-worker.js`: cache y estrategias PWA.

Actualización PWA:

- Cuando la app está instalada (PWA), la aplicación mostrará un botón `Actualizar app` si hay una nueva versión disponible. Pulsando el botón se aplicará la nueva versión y la app se recargará.

Esto permite controlar las actualizaciones desde la interfaz instalada y evita recargas inesperadas mientras el usuario está usando la app.

## Uso local

Abrí `index.html` en el navegador para probar la tienda localmente.

## Últimos cambios (2026-06-09)

- Actualización del flujo PWA: botón `Actualizar app` y manejo de `skipWaiting`/`controllerchange`.
- Registro y captura global de errores para depuración en modo PWA standalone (`localStorage['daikon-last-error']`).
- Ajuste de tarifa de envío a $4.000 y horario de toma de pedidos: 14:00–00:00.
- Microcopy y UI: `SALSAS extras: Agridulce, Soja, Palillos` en hero y cards; selector de `Programar pedido` agregado.
- Promociones: `Promo CENA Daikon` y `Promo CENA para dos` implementadas en el catálogo.

Si necesitás que empuje este README al repositorio remoto con un mensaje de commit específico, pedímelo y lo hago.

## Estado de publicación

- Rama `gh-pages` creada y empujada al remoto para facilitar GitHub Pages.
- Si la página devuelve 404: abrí Settings → Pages en GitHub y seleccioná `gh-pages` como Source → `/ (root)`.

Publicado: 2026-06-09
