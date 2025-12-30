/**
 * CCAB Service Worker
 * Provides offline support and caching for the demo gallery
 */

const CACHE_NAME = 'ccab-v1';
const CACHE_URLS = [
    '/',
    '/index.html',
    '/manifest.json',
    '/assets/css/accessibility.css',
    '/assets/icons/icon.svg',
    '/assets/js/navigation.js',
    '/assets/js/seizure-warning.js',
    '/demo-index.json'
];

// Install event - cache core assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('CCAB: Caching core assets');
                return cache.addAll(CACHE_URLS);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames
                        .filter(name => name !== CACHE_NAME)
                        .map(name => caches.delete(name))
                );
            })
            .then(() => self.clients.claim())
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;

    // Skip cross-origin requests (CDN libraries)
    if (!event.request.url.startsWith(self.location.origin)) return;

    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    // Return cached version, but also update cache in background
                    event.waitUntil(updateCache(event.request));
                    return cachedResponse;
                }

                // Not in cache - fetch from network and cache
                return fetch(event.request)
                    .then(response => {
                        // Don't cache errors
                        if (!response || response.status !== 200) {
                            return response;
                        }

                        // Cache HTML files for offline viewing
                        if (event.request.url.endsWith('.html') ||
                            event.request.url.endsWith('.json') ||
                            event.request.url.endsWith('.css') ||
                            event.request.url.endsWith('.js') ||
                            event.request.url.endsWith('.svg')) {

                            const responseToCache = response.clone();
                            caches.open(CACHE_NAME)
                                .then(cache => cache.put(event.request, responseToCache));
                        }

                        return response;
                    })
                    .catch(() => {
                        // Network failed, try to serve offline page
                        if (event.request.headers.get('accept').includes('text/html')) {
                            return caches.match('/index.html');
                        }
                    });
            })
    );
});

// Update cache in background (stale-while-revalidate)
async function updateCache(request) {
    try {
        const response = await fetch(request);
        if (response && response.status === 200) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(request, response);
        }
    } catch (e) {
        // Network unavailable, ignore
    }
}
