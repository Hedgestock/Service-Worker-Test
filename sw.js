// self.addEventListener('install', function(event) {
//     event.waitUntil(caches.open('sw-v3').then(c => {
//         cache = c
//     }));
//     });


self.addEventListener('fetch', function(event) {
    // console.log(event.request.url == "http://localhost:8080/example/data");
    // if (event.request.url == "http://localhost:8080/example/data") {    
    //     console.log("smth");
    //     event.respondWith(fetch("https://jsonplaceholder.typicode.com/todos/3"));
    // }

    if (event.request.url == "https://jsonplaceholder.typicode.com/todos/4") {
        event.respondWith(
            caches.match(event.request).then((response) => {
                if (response) {
                    console.log("from cache");
                    return response;
                }
                console.log("from net");
                return caches.open('sw-v4').then(c =>{
            
                        return c.add(event.request)
                    }
                )
                //return fetch(event.request);
            })
        );
    }
});
