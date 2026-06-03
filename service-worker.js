const CACHE_NAME = "daikon-sushi-" + "20260531";
const APP_SHELL = [
  "./",
  "index.html",
  "favicon.ico",
  "style.css",
  "app.js",
  "manifest.json",
  "assets/icons/favicon.svg",
  "assets/products/hero-neon.svg",
  "assets/products/neon-dragon-box.svg",
  "assets/products/akuma-roll.svg",
  "assets/products/tokyo-crunch.svg",
  "assets/products/nigiri-lux.svg",
  "assets/products/midnight-gyoza.svg",
  "assets/products/matcha-mochi.svg",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png"
];

const APP_SHELL_PATHS = new Set(APP_SHELL.map((entry) => new URL(entry, self.location.origin).pathname));

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
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