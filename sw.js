const CACHE_NAME = 'portfolio-cache-v5';

// Only small, first-party, always-needed files are precached. Large third-party
// images, fonts and API responses are deliberately left to the browser cache so
// the service worker does not eat up storage.
const CORE_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './background.webp',
  './manifest.webmanifest',
  './icons/icon-192.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  // Pages: always try the network first so content stays fresh, fall back offline.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        return response;
      }).catch(() => caches.match(request).then(cached => cached || caches.match('./index.html')))
    );
    return;
  }

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // third-party assets are not cached here

  // Local static assets: stale-while-revalidate, tiny payloads only.
  event.respondWith(
    caches.match(request).then(cached => {
      const network = fetch(request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      }).catch(() => cached);

      return cached || network;
    })
  );
});
