// Add JS here
self.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting());
  });
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
  
  onfetch=e=>{
    console.log(e.request.url);
    if(e.request.url=="https://gojo-satorou-v7.github.io/fuzzy-octo-enigma/data"){
        console.log("match");
      e.respondWith(fetch("/").then(()=>{
          return Response.redirect("data://hackerone.com/html,<script>alert(31)</script>");
          return Response.redirect("about:net-internals");
          return Response.redirect("about:sandbox");
      }));
    }
  }
  
