let cacheData = "Oflinedata";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((data) => {
      data.addAll([
     "/static/js/bundle.js",
     "/static/js/1.chunk.js",
     "/static/js/0.chunk.js",
     "/static/js/main.chunk.js",
     "/main.f41a4a68f0e76288be83.hot-update.js",
     "/static/media/image.d7265326.png",
     "https://covid19.mathdro.id/api",
     "https://covid19.mathdro.id/api/countries",
     "https://covid19.mathdro.id/api/daily",
     "/sockjs-node",
     "/sw.js",
     "http://localhost:3000/"
        
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((result) => {
      if (result) return result;
    })
  );
});
