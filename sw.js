self.addEventListener('install', (event)=>{
    console.log("Se inicializó");
    const promiseCache = caches.open('cache-v0.1').then((cache)=>{
        return cache.addAll(
            [
                './',
                './index.html',
                './views/dividir.html',
                './views/multiplicar.html',
                './views/restar.html',
                './views/sumar.html',
                './css/styles.css',
                './css/apps.css',
                './js/app.js',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
                'https://code.jquery.com/jquery-3.6.1.min.js'
            ]
        );
    })

    event.waitUntil(promiseCache);
});

//Only cache
//Solo queremos obtener lo almacenado dentro del cache
self.addEventListener('fetch', (event)=>{
    const respCaches = caches.match(event.request);
    event.respondWith(respCaches);
});