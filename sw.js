const CACHE_NAME = 'portfolio-cache-v1';
const DYNAMIC_CACHE_NAME = 'portfolio-dynamic-cache-v1';

const urlsToCache = [
  './',
  './index.html',
  './thanks.html',
  './Cs.html',
  './og.png',
  './snowcrash.jpg',
  './1.jpeg'
];

// Install event - cache core static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - Stale-While-Revalidate strategy
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Fetch fresh version asynchronously
      const fetchPromise = fetch(event.request).then(networkResponse => {
        // Cache the dynamically fetched response if it's valid
        if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'cors' || networkResponse.type === 'opaque')) {
          const responseToCache = networkResponse.clone();
          caches.open(DYNAMIC_CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Fallback if offline
      });

      // Return cached response immediately if available, otherwise wait for network
      return cachedResponse || fetchPromise;
    })
  );
});
