self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('tiktok-clone').then((cache) => cache.addAll([
      'index.html',
      'profile.html',
      'recorder.html',
      'login.html'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});