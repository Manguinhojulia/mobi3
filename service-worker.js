var cacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './js/scripts.js',
        './css/styles.css',
        './assests/img/portifolio/5.jpg',
        './assests/img/portifolio/174.-Inverno.jpg',
        './assests/img/portifolio/2022.07.25-washington-monument-orange-leaves-istock-matt-anderson-600x450-1.jpg',
        './assests/img/portifolio/depositphotos_1526401-stock-photo-winter-holiday-house.jpg',
        './assests/img/portifolio/depositphotos_393260372-stock-photo-sunset-dramatic-sky-sea-tropical.jpg',
        './assests/img/portifolio/papoula-da-calif_rnia_sortida_eschscholzia_californica_.jpg',
        './assests/img/portifolio/tenis-esportivos-garimpo-viver-bem-dan-carlson-600x450-06dce820.jpg',
        
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});