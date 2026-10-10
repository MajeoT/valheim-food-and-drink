// Offline support for the installed app.
// Our own files: try the network first so updates arrive, fall back to the saved copy when offline.
// Library and font files from CDNs carry a version in their address, so a saved copy is always right: use it first.
const CACHE = "valheim-planner-v1";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

const save = (request, response) => {
  const copy = response.clone();
  caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
  return response;
};

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || !request.url.startsWith("http")) return;
  const sameOrigin = new URL(request.url).origin === self.location.origin;
  if (sameOrigin) {
    event.respondWith(
      fetch(request).then((response) => save(request, response))
        .catch(() => caches.match(request).then((hit) => hit || caches.match("./index.html")))
    );
  } else {
    event.respondWith(caches.match(request).then((hit) => hit || fetch(request).then((response) => save(request, response))));
  }
});
