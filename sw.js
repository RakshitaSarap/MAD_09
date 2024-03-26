self.addEventListener('install', evt=>{
    console.log('Service Worker is Registered')
});

self.addEventListener('activate', evt =>{
    console.log('Service Worker is Activated')
});

self.addEventListener('fetch', evt=>{
    console.log('Service Worker is fetching')
});