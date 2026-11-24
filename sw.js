/* Eternian Chess offline cache. Published HTML contains all game artwork. */
const CACHE = 'eternian-chess-pwa-privacy-r2';
const APP_FILES = ['./index.html','./manifest.webmanifest','./assets/icon-192.png','./assets/icon-512.png','./assets/icon-512-maskable.png'];
self.addEventListener('install',event => {
 event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate',event => {
 event.waitUntil(Promise.all([
  caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('eternian-chess-pwa-') && key!==CACHE).map(key => caches.delete(key)))),
  self.clients.claim()
 ]));
});
self.addEventListener('fetch',event => {
 if(event.request.method!=='GET')return;
 const url = new URL(event.request.url);
 if(url.origin!==self.location.origin)return; // Chess.com and optional Merida fetches are not cached here.
 if(event.request.mode==='navigate'){
  event.respondWith(fetch(event.request).then(resp => {
   if(resp.ok){const copy=resp.clone();caches.open(CACHE).then(cache=>cache.put('./index.html',copy));}
   return resp;
  }).catch(async () => (await caches.match('./index.html')) || Response.error()));
  return;
 }
 event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(resp=>{
  if(resp.ok&&APP_FILES.some(p=>new URL(p,self.registration.scope).href===url.href)){
   const copy=resp.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));
  }
  return resp;
 })));
});
