"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"959c3f5b7d7386ea1dbb1ea73e588e94",url:"./2021/02/11/hello-world/index.html"},{revision:"c6c513c25df58b6731aaa40a1496c106",url:"./about/index.html"},{revision:"329093434e36ee93c54f2582a36c7930",url:"./archives/2021/02/index.html"},{revision:"be7597c6fbaca456a528624849538a89",url:"./archives/2021/index.html"},{revision:"a2034ff870218abd3b4262b8bff4028e",url:"./archives/index.html"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./assets/js/APlayer.min.js"},{revision:"09403798d0f74b5fa411537d9885c75f",url:"./categories/index.html"},{revision:"718d703bb917106d3e019247960c45e2",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"37e1f566feb72f0274cb8e65c4df1a38",url:"./Gallery/index.html"},{revision:"a3c01c27e220da2e6e46cc7385902b90",url:"./index.html"},{revision:"ede84d001364eb8434689586929fa89a",url:"./js/main.js"},{revision:"c97489be2463a5994d3168663ce42036",url:"./js/search/algolia.js"},{revision:"83ac0c1e2c52de69956abb3257890abf",url:"./js/search/local-search.js"},{revision:"d53f5f689fd3c6af45af963e79613b33",url:"./js/tw_cn.js"},{revision:"c8853895fe103522d13c2bd1a55d9f9e",url:"./js/utils.js"},{revision:"8f4a4725549922867c71aed991f280f8",url:"./link/index.html"},{revision:"1a16a36d691e611cfd9a4adcf77d013b",url:"./manifest.json"},{revision:"b9daf1941b78d8a73c41bd68e808fc24",url:"./music/index.html"},{revision:"0aefc7349051f6a774d10fda32bd94ec",url:"./tags/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();