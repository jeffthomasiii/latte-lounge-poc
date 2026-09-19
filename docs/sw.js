---
layout: null
---
const CACHE_NAME = 'latte-lounge-mobile-v1';
const BASE = '{{ site.baseurl }}';
const APP_SHELL = [
  BASE + '/',
  BASE + '/blog/',
  BASE + '/podcast/',
  BASE + '/prayer-resources/',
  BASE + '/about/',
  BASE + '/assets/css/mobile-pwa-refresh.css',
  BASE + '/assets/js/pwa.js',
  BASE + '/assets/images/favicon.svg',
  BASE + '/assets/images/latte-lounge-hero.webp',
  BASE + '/assets/images/latte-lounge-reflection-feature.webp',
  BASE + '/assets/images/latte-lounge-podcast-feature.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match(BASE + '/')))
    );
    return;
  }

  if (['style', 'script', 'image', 'font'].includes(request.destination)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const network = fetch(request).then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        });
        return cached || network;
      })
    );
  }
});
