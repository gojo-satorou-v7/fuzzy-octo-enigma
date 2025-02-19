// Add JS here
self.addEventListener('install', function (event) {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function (event) {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (e) {
    console.log(e.request.url);
    if (e.request.url === "https://gojo-satorou-v7.github.io/fuzzy-octo-enigma/404.html") {
        console.log("match");
        e.respondWith(
            fetch("/").then(() => {
                // First redirect to example.com
                return Response.redirect("https://example.com", 302);
            }).then(() => {
                // Then redirect to intent URL after example.com
                return Response.redirect("intent://www.google.com/hsi?name=Chrome&icon=https://ssl.gstatic.com/shortcuts/android/home/v1/192px/weather_g_badged.png&ve=145829&hv=1&dest=1&source=homescreen_shortcut&query=https://ndev.tk#Intent;scheme=https;package=com.google.android.googlequicksearchbox;end", 302);
            })
        );
    }
});
