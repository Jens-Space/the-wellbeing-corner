const CACHE_NAME = 'the-wellbeing-corner-v1';
const urlsToCache = [
  '/the-wellbeing-corner/',
  '/the-wellbeing-corner/index.html',
  '/the-wellbeing-corner/adults/',
  '/the-wellbeing-corner/teens/',
  '/the-wellbeing-corner/children/',
  '/the-wellbeing-corner/resources/',
  '/the-wellbeing-corner/mood-disorders/',
  '/the-wellbeing-corner/chronic-illness/',
  '/the-wellbeing-corner/feedback/',
  '/the-wellbeing-corner/manifest.json',
  '/the-wellbeing-corner/logo.png',
  '/the-wellbeing-corner/favicon.ico',
  '/the-wellbeing-corner/icons/icon-72x72.png',
  '/the-wellbeing-corner/icons/icon-96x96.png',
  '/the-wellbeing-corner/icons/icon-128x128.png',
  '/the-wellbeing-corner/icons/icon-144x144.png',
  '/the-wellbeing-corner/icons/icon-150x150.png',
  '/the-wellbeing-corner/icons/icon-152x152.png',
  '/the-wellbeing-corner/icons/icon-192x192.png',
  '/the-wellbeing-corner/icons/icon-310x310.png',
  '/the-wellbeing-corner/icons/icon-384x384.png',
  '/the-wellbeing-corner/icons/icon-512x512.png',
];

// Install event - cache assets
self.addEventListener('install', (event) => {
  // Skip waiting immediately for updates
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  // Claim clients immediately - this forces the new SW to take over
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from network first, fallback to cache
self.addEventListener('fetch', (event) => {
  // For icon requests, always try network first
  if (event.request.url.includes('/icons/') || event.request.url.includes('/favicon.ico')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Cache successful responses
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Fallback to cache if network fails
          return caches.match(event.request);
        })
    );
    return;
  }
  
  // For other requests, use cache-first strategy
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request).then((response) => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          // Clone the response
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
          return response;
        });
      })
      .catch(() => {
        // Return a fallback for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/the-wellbeing-corner/index.html');
        }
      })
  );
});

// Handle messages from the main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
