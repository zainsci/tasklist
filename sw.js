if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const o=e=>a(e,n),r={module:{uri:n},exports:c,require:o};s[n]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/tasklist/_next/static/chunks/267-9261ec5464f1ec33.js",revision:"9261ec5464f1ec33"},{url:"/tasklist/_next/static/chunks/620-4f8cae66938ee070.js",revision:"4f8cae66938ee070"},{url:"/tasklist/_next/static/chunks/919-ef5f829d99c175cd.js",revision:"ef5f829d99c175cd"},{url:"/tasklist/_next/static/chunks/bee240a3-80c131c1d5c0c949.js",revision:"80c131c1d5c0c949"},{url:"/tasklist/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/tasklist/_next/static/chunks/main-a6af38bcd1a80109.js",revision:"a6af38bcd1a80109"},{url:"/tasklist/_next/static/chunks/pages/_app-9404de8a8122688e.js",revision:"9404de8a8122688e"},{url:"/tasklist/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/tasklist/_next/static/chunks/pages/about-bd7af4c5a37d23ca.js",revision:"bd7af4c5a37d23ca"},{url:"/tasklist/_next/static/chunks/pages/index-bfda445a9b669d90.js",revision:"bfda445a9b669d90"},{url:"/tasklist/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/tasklist/_next/static/chunks/webpack-d517e3be542a03b7.js",revision:"d517e3be542a03b7"},{url:"/tasklist/_next/static/css/ea0dfac1653a81d0.css",revision:"ea0dfac1653a81d0"},{url:"/tasklist/_next/static/fLe7wBSNsbz9wfqOzQPpf/_buildManifest.js",revision:"e871483c62ad294c3403b7fd9c01a8a4"},{url:"/tasklist/_next/static/fLe7wBSNsbz9wfqOzQPpf/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/tasklist/_next/static/fLe7wBSNsbz9wfqOzQPpf/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/tasklist/apple-icon.png",revision:"e78113b15d30c82385907c5cd187bfdc"},{url:"/tasklist/favicon.ico",revision:"bbff1f815df3ea41865aecd31ba9742f"},{url:"/tasklist/font/Finlandica-SemiBold.ttf",revision:"cf219c4aa5e6020a00bede417e3ab0e3"},{url:"/tasklist/font/Finlandica.ttf",revision:"e26892eb5ac129efc2cd1408332817c7"},{url:"/tasklist/icon.png",revision:"cf46be00b040f0fba171f91224bdc787"},{url:"/tasklist/icons/icon-128x128.png",revision:"fe46f0885b526e9be30abac418d14216"},{url:"/tasklist/icons/icon-144x144.png",revision:"5b285ae45f4b20da2ef096fa4e6bf4e2"},{url:"/tasklist/icons/icon-152x152.png",revision:"d230aa0f43411150e5b6bd760ab7ebf5"},{url:"/tasklist/icons/icon-16x16.png",revision:"835100a3e1cd0d9ef4eabbf1d768396c"},{url:"/tasklist/icons/icon-192x192.png",revision:"d933d5d9e7a4dffa2e7de885c699b0fd"},{url:"/tasklist/icons/icon-32x32.png",revision:"cf46be00b040f0fba171f91224bdc787"},{url:"/tasklist/icons/icon-384x384.png",revision:"ba2b6a8eb917d038dcd7be342bb5ce2f"},{url:"/tasklist/icons/icon-512x512.png",revision:"f486d28dfab0e592b2a36e387bebe48a"},{url:"/tasklist/icons/icon-72x72.png",revision:"6bdf3dc5ef74ca5cc97f85b6ae98e2a1"},{url:"/tasklist/icons/icon-96x96.png",revision:"8d8fff7b6c24b87a16bd850e546e9a3c"},{url:"/tasklist/manifest.json",revision:"e981a68d45dd6edde5bb759a29212365"},{url:"/tasklist/svg/checkbox-fill.svg",revision:"5ff001bacf7b65c5938c142f149199ff"},{url:"/tasklist/svg/github.svg",revision:"fbe7dec4c2c39eac6c4472430eca8640"},{url:"/tasklist/svg/home-fill.svg",revision:"548bf40bb5d84de3640ae1b3e49ac9ac"},{url:"/tasklist/svg/home.svg",revision:"d1d880d0d7bee6c57d4a91bd458e2a26"},{url:"/tasklist/svg/info-fill.svg",revision:"5fc4d72817736ef9a8eff3bc8d25757e"},{url:"/tasklist/svg/info.svg",revision:"734504ba71705830ec931ccd2b153c22"},{url:"/tasklist/svg/menu.svg",revision:"cbf2d5e75641693494ed37ffa8514ae7"},{url:"/tasklist/svg/plus.svg",revision:"4b3c18d3e532ac351424866fe35c4ca6"},{url:"/tasklist/svg/square.svg",revision:"1e16a1f3c060e763fae7e9b1c766737a"},{url:"/tasklist/svg/trash.svg",revision:"b2bd2cae4b81fe9f85598e0290229a4c"},{url:"/tasklist/svg/x.svg",revision:"c6baef34d0dab42103b13b11945bfbca"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/tasklist",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
