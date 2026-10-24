const CACHE = "jethson-v3";
const ASSETS = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/app.js",
  "./js/game.js",
  "./manifest.json",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/images/foto-01.jpg",
  "./assets/images/foto-02.jpg",
  "./assets/images/foto-03.jpg",
  "./assets/images/foto-04.jpeg",
  "./assets/images/foto-05.jpg",
  "./assets/images/foto-06.jpg",
  "./assets/images/foto-07.jpg",
  "./assets/images/foto-08.jpg",
  "./assets/images/foto-09.jpg",
  "./assets/images/foto-10.jpg",
  "./assets/images/foto-11.jpg",
  "./assets/images/foto-12.jpg",
  "./assets/images/foto-13.jpg",
  "./assets/images/foto-14.jpg",
  "./assets/images/foto-15.jpg",
  "./assets/images/foto-16.jpg",
  "./assets/images/foto-17.jpg",
  "./assets/images/foto-18.jpg",
  "./assets/images/foto-19.jpg",
  "./assets/images/foto-20.jpg",
  "./assets/images/foto-21.jpg",
  "./assets/images/foto-22.jpg",
  "./assets/images/foto-23.jpg",
  "./assets/images/foto-24.jpg",
  "./assets/images/foto-25.jpg",
  "./assets/images/foto-26.jpg",
  "./assets/images/foto-27.jpg",
  "./assets/images/foto-28.jpg",
  "./assets/images/foto-29.jpg",
];
self.addEventListener("install", (e) =>
  e.waitUntil(
    caches
      .open(CACHE)
      .then((c) => c.addAll(ASSETS))
      .then(() => self.skipWaiting()),
  ),
);
self.addEventListener("activate", (e) =>
  e.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  ),
);
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(
      (hit) =>
        hit ||
        fetch(e.request).then((res) => {
          if (res.ok && new URL(e.request.url).origin === location.origin) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, copy));
          }
          return res;
        }),
    ),
  );
});
