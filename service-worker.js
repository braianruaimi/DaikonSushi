const CACHE_NAME = "daikon-sushi-" + "20260831-5";
const APP_SHELL = [
  "./",
  "index.html",
  "favicon.ico",
  "style.css",
  "app.js",
  "manifest.json",
  "assets/icons/favicon.svg",
  "assets/products/premiun.jpg",
  "assets/products/deluxe.jpg",
  "assets/products/salsa agridulce.jpg",
  "assets/products/salsa soja.jpg",
  "assets/products/palillos extras.jpg",
  "assets/products/Sakura.jpg",
  "assets/products/Smoked.jpg",
  "assets/products/Lang in the house.jpg",
  "assets/products/combo daikon.jpg",
  "assets/products/pancho pollo.jpg",
  "assets/products/kanikama.png",
  "assets/products/pancho sushi salmon.jpg",
  "assets/products/pancho langostino.jpg",
  "assets/products/todo salmon 4 piezas regalo.jpg",
  "assets/products/Roll caliente.jpg",
  "assets/products/Spring rolls.jpg",
  "assets/products/gyozas.jpg",
  "assets/products/eby crocante.jpg",
  "assets/products/promosakura.jpg",
  "assets/products/promopancho.jpg",
  "assets/products/logodaikon.jpg",
  "assets/primavera/2sakuras.jpg",
  "assets/primavera/2panchos.jpg",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png"
];
// additional pancho images are included above in the array

const APP_SHELL_PATHS = new Set(APP_SHELL.map((entry) => new URL(entry, self.location.origin).pathname));

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(APP_SHELL).catch((err) => {
        // If some resources fail to cache (404, CORS), log and continue so SW can still install
        console.error('Failed to cache some app shell resources:', err);
        return Promise.resolve();
      })
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Listen for skip waiting message from the page
self.addEventListener('message', (event) => {
  if (!event.data) return;
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);
  const isNavigationRequest = event.request.mode === "navigate";
  const isSameOrigin = requestUrl.origin === self.location.origin;
  const isAppShellAsset = isSameOrigin && APP_SHELL_PATHS.has(requestUrl.pathname);

  if (isNavigationRequest) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          return networkResponse;
        })
        .catch(() => caches.match(event.request).then((cachedResponse) => cachedResponse || caches.match("index.html")))
    );
    return;
  }

  if (isAppShellAsset) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Stale-while-revalidate for images: respond from cache immediately if available, update cache in background
  const accepts = event.request.headers.get("Accept") || "";
  if (accepts.includes("image") || event.request.destination === "image") {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        const networkFetch = fetch(event.request)
          .then((networkResponse) => {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
            return networkResponse;
          })
          .catch(() => undefined);

        // Return cached if available immediately, otherwise wait for network
        return cachedResponse || networkFetch;
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          return networkResponse;
        })
        .catch(() => caches.match("index.html"));
    })
  );
});