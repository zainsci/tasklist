if(!self.define){let s,e={};const i=(i,a)=>(i=new URL(i+".js",a).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(a,t)=>{const c=s||("document"in self?document.currentScript.src:"")||location.href;if(e[c])return;let n={};const r=s=>i(s,c),l={module:{uri:c},exports:n,require:r};e[c]=Promise.all(a.map((s=>l[s]||r(s)))).then((s=>(t(...s),n)))}}define(["./workbox-6316bd60"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/tasklist/_next/static/YTydr606-Oe64KOdOWaOt/_buildManifest.js",revision:"440040f52c8b7999fb371418496acbfe"},{url:"/tasklist/_next/static/YTydr606-Oe64KOdOWaOt/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/tasklist/_next/static/YTydr606-Oe64KOdOWaOt/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/tasklist/_next/static/chunks/267-9261ec5464f1ec33.js",revision:"9261ec5464f1ec33"},{url:"/tasklist/_next/static/chunks/357-c9f5e048169b72ad.js",revision:"c9f5e048169b72ad"},{url:"/tasklist/_next/static/chunks/669-7aaf652316942c57.js",revision:"7aaf652316942c57"},{url:"/tasklist/_next/static/chunks/bee240a3-80c131c1d5c0c949.js",revision:"80c131c1d5c0c949"},{url:"/tasklist/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/tasklist/_next/static/chunks/main-a6af38bcd1a80109.js",revision:"a6af38bcd1a80109"},{url:"/tasklist/_next/static/chunks/pages/_app-b2f8ebd7e1f5a45d.js",revision:"b2f8ebd7e1f5a45d"},{url:"/tasklist/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/tasklist/_next/static/chunks/pages/about-ae91e7cb7d2f792e.js",revision:"ae91e7cb7d2f792e"},{url:"/tasklist/_next/static/chunks/pages/archive-753ff3b3d73e673f.js",revision:"753ff3b3d73e673f"},{url:"/tasklist/_next/static/chunks/pages/index-b924479a345bf0f0.js",revision:"b924479a345bf0f0"},{url:"/tasklist/_next/static/chunks/pages/timer-89f69ec56db329c1.js",revision:"89f69ec56db329c1"},{url:"/tasklist/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/tasklist/_next/static/chunks/webpack-d517e3be542a03b7.js",revision:"d517e3be542a03b7"},{url:"/tasklist/_next/static/css/9ddd3609805894e4.css",revision:"9ddd3609805894e4"},{url:"/tasklist/apple-icon.png",revision:"e78113b15d30c82385907c5cd187bfdc"},{url:"/tasklist/default-tasks.json",revision:"baabc09797e868bdbf5dce7693231cdd"},{url:"/tasklist/favicon.ico",revision:"bbff1f815df3ea41865aecd31ba9742f"},{url:"/tasklist/font/Finlandica-SemiBold.ttf",revision:"cf219c4aa5e6020a00bede417e3ab0e3"},{url:"/tasklist/font/Finlandica.ttf",revision:"e26892eb5ac129efc2cd1408332817c7"},{url:"/tasklist/icon.png",revision:"cf46be00b040f0fba171f91224bdc787"},{url:"/tasklist/icon.svg",revision:"4513a61c62b3cecbaeb4e90c228445da"},{url:"/tasklist/icons/icon-128x128.png",revision:"fe46f0885b526e9be30abac418d14216"},{url:"/tasklist/icons/icon-144x144.png",revision:"5b285ae45f4b20da2ef096fa4e6bf4e2"},{url:"/tasklist/icons/icon-152x152.png",revision:"d230aa0f43411150e5b6bd760ab7ebf5"},{url:"/tasklist/icons/icon-16x16.png",revision:"835100a3e1cd0d9ef4eabbf1d768396c"},{url:"/tasklist/icons/icon-192x192.png",revision:"d933d5d9e7a4dffa2e7de885c699b0fd"},{url:"/tasklist/icons/icon-32x32.png",revision:"cf46be00b040f0fba171f91224bdc787"},{url:"/tasklist/icons/icon-384x384.png",revision:"ba2b6a8eb917d038dcd7be342bb5ce2f"},{url:"/tasklist/icons/icon-512x512.png",revision:"f486d28dfab0e592b2a36e387bebe48a"},{url:"/tasklist/icons/icon-72x72.png",revision:"6bdf3dc5ef74ca5cc97f85b6ae98e2a1"},{url:"/tasklist/icons/icon-96x96.png",revision:"8d8fff7b6c24b87a16bd850e546e9a3c"},{url:"/tasklist/manifest.json",revision:"e981a68d45dd6edde5bb759a29212365"},{url:"/tasklist/svg/archive-fill.svg",revision:"4166b736bfd0ca638d4a57ac59a7a3c6"},{url:"/tasklist/svg/archive.svg",revision:"b8e4ce5ddae8f19751f425c87a646c8d"},{url:"/tasklist/svg/checkbox-fill.svg",revision:"ff6e8c20abfb0cf98c0cd4d705443e50"},{url:"/tasklist/svg/drag-indicator.svg",revision:"c1bdebbc2070305ecf0914c346069879"},{url:"/tasklist/svg/github.svg",revision:"fbe7dec4c2c39eac6c4472430eca8640"},{url:"/tasklist/svg/home-fill.svg",revision:"b675f173cadf65fcc45556cb4007bed8"},{url:"/tasklist/svg/home.svg",revision:"bf8c32f0c6602da69f7741b54d9a0d2a"},{url:"/tasklist/svg/info-fill.svg",revision:"d819410c8ea6b2560b019b83506f2604"},{url:"/tasklist/svg/info.svg",revision:"91eddccd33d285358da9afef67edade3"},{url:"/tasklist/svg/install-desktop.svg",revision:"31f1a7617832a2fabf7f306ced1a9277"},{url:"/tasklist/svg/install-mobile.svg",revision:"b46605203e7fd266f331a25edc44cdb6"},{url:"/tasklist/svg/menu.svg",revision:"0342c8453c9400c3ef7254804a43f288"},{url:"/tasklist/svg/moon.svg",revision:"29af58c13d9f60f51c5fe9422715b7a3"},{url:"/tasklist/svg/play.svg",revision:"be3dddf905f943dbb6af4c4dcddf802e"},{url:"/tasklist/svg/plus.svg",revision:"5d466f90aa3ebf18e6f7113aa75c62ad"},{url:"/tasklist/svg/replay.svg",revision:"e91c45eda8ac754295ce94dec1928bbb"},{url:"/tasklist/svg/settings-fill.svg",revision:"1bd0a54a190e2762031a2ff6555db348"},{url:"/tasklist/svg/settings.svg",revision:"9e5a51e164186598c93c8e331d652ecc"},{url:"/tasklist/svg/square.svg",revision:"d9633b34795f6a0c2cf8c611cd999312"},{url:"/tasklist/svg/stop.svg",revision:"118ae1a7caad14b1693ff8057f42a483"},{url:"/tasklist/svg/sun.svg",revision:"d4c3330142ae1199c461c938f9c08fc7"},{url:"/tasklist/svg/timer-fill.svg",revision:"18d354b07b6083fedcefdba314a26ae8"},{url:"/tasklist/svg/timer-off.svg",revision:"92d0988ff577a9babd9d2485707bafa3"},{url:"/tasklist/svg/timer.svg",revision:"09192dae698c2838c2a3f60dbe3aa60d"},{url:"/tasklist/svg/trash.svg",revision:"cd0e6ea389c8b430af3f0df2771147ca"},{url:"/tasklist/svg/x.svg",revision:"e9d3b8e2084f26b14a6ce5eda89a0981"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/tasklist",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:i,state:a})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp3|wav|ogg)$/i,new s.CacheFirst({cacheName:"static-audio-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp4)$/i,new s.CacheFirst({cacheName:"static-video-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const e=s.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
