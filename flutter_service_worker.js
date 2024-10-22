'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ef80350d4d67921918cd9f427768b6ad",
"assets/AssetManifest.bin.json": "cd04dad67aefd1c26b6b2d29bb2b2b38",
"assets/AssetManifest.json": "f66a323b84d25ae8b62b3dd6492f3cfd",
"assets/assets/00-01.png": "798f4dfb539c78661c1f732a5293f75f",
"assets/assets/01%2520Negro%2520Transparente.png": "7a5d090e6331caffb133b1e6e6d61ad1",
"assets/assets/01.png": "1f71c2dbdbfa41adb7512096664abd1a",
"assets/assets/02.png": "6e68f4db6444ba61b35deccbdf27fd16",
"assets/assets/03%2520Fondo%2520Blanco.png": "3250bed989574af9ef25158744e0e3ca",
"assets/assets/03.png": "a6957d8d4ba6c32230be5a5775997a3e",
"assets/assets/04%2520Fondo%2520Negro.png": "bacf8385345c413daf5c835758d58ee2",
"assets/assets/04.png": "3854571532ce38a54a677ce384a2f397",
"assets/assets/05.png": "8f301f2819937661b3bd2e5fc3eea870",
"assets/assets/06.png": "1a0b155e3ebc511597f965c23c506453",
"assets/assets/applewatch.jpg": "e758dfda47ea6bf21369b819f2ac758d",
"assets/assets/ipad.jpg": "619a6845f764ff115bc1c2a12b94cb71",
"assets/assets/iphone.jpg": "ea14b2f21487a5002a1b1e7d8c2df9f5",
"assets/assets/iphone2.jpg": "4b86899492c26df213a31d615a5b1a9e",
"assets/assets/iphone2SF.png": "80fbaad35bd4fb4e9fee9ba7c8ff1733",
"assets/assets/iphone3.jpg": "e1c94ebd6a2c3de9d1515564664d595e",
"assets/assets/iphone4.jpg": "2f9bd335c229a2801cf5ef26f89c200f",
"assets/assets/iphoneCA.jpg": "a7b61ca1e506e8d698113b70e951f9d5",
"assets/assets/itech.jpeg": "96280d6132582d12e70d7ce441f3897d",
"assets/assets/itechlogo.png": "6bfda12a567608598840d3382de2b73b",
"assets/assets/iwatchCA.jpg": "8909fb5e55fd9446efef420c5956feca",
"assets/assets/logoitech.png": "c07772289246c9e3da26d2498b28f28f",
"assets/assets/logo_navbar.png": "f2691e509213f2d9db52954a3c663ee1",
"assets/assets/mac.png": "63523f9503a115c306a3024eda17439c",
"assets/assets/mac2.jpeg": "0f809c12098585dd8a12b329fb7ef5d3",
"assets/assets/macbookCA.jpg": "384154ef060cbfc8216acd29986b25fd",
"assets/assets/macSF.png": "b1ae7f6d1945710ff9a31de12ef441df",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "aedb1aae6e78ae9d56e005a175fd0c11",
"assets/NOTICES": "33416ef277467624f111fbb51252d6a6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "adac17b5b2a0c6ebbb29b9bfbb03c91e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "96ac7602344af471d84b34da4c1ea459",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "258f2165eac88e1aae04c7e4e172b611",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e09be977592a67e139d04433f359cdb6",
"/": "e09be977592a67e139d04433f359cdb6",
"main.dart.js": "1c91149e07fd15e6aafbfcd74fe96c63",
"manifest.json": "51c592943fc82a76d0cf1f975a04deb4",
"version.json": "eb69b1029c7056f7b6d78389c3c02bba"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
