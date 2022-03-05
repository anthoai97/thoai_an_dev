'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "2724b87c948e62c37f209fee33d410e5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "eeb169b71bf704219b37b17c081fb883",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ea9f1b0a234de3fa7085972fb44e76d9",
".git/logs/refs/heads/master": "5215b8c906bee8f52356cfc34b1da120",
".git/logs/refs/remotes/origin/master": "b44c2b312780d3f4c18bf15270f20b38",
".git/objects/01/199c9580e847315c8e664c85e50f5dad308fec": "61720febbb8515ae155fb55498d172a6",
".git/objects/02/d6c6b081e88b3cf053109eb1bd33566535f9c6": "d7f65a2ec02b9a67579ae29821438052",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/11/04fa3bc9ce667fac31e13f647c7be224a387e4": "80df639f812a3fd936a6a3e0f2e72d18",
".git/objects/15/9266da823bd450383f8c11e27bdd5f98fc9af5": "597da43a1b67a592ff731afc322cfb89",
".git/objects/21/178a187ee760bbcffb8e84af3ec72938783454": "c24734a353b2d60891257f1ee3c94bbd",
".git/objects/24/6a2fc8d24c73aafd3c642193af8057c7717254": "533c4b7230034b28083ad8220d5381c1",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2c/b040495c72532bb6d665deeb15768d1d8ac77b": "15b86439e8ce5c6dc3c77a5eb2add129",
".git/objects/2d/c1350ce428680c45cfa4771ecd31cc56c909b4": "9ae2fdfcf80b3cfa07cd6dd9b762b801",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/32/9a2edb8106b94b6e3e27c8f661545ca0094e85": "fd43ccb0ce921bfb7230470c109e24db",
".git/objects/3e/0f49338cabf40e0e555c397d364afacb1c101d": "e9d66b4cead8ee4ccd8b6848ae20bed0",
".git/objects/4b/503b09345de322a7abae3ebdac641d98040bc9": "9d454895095b50f3f59fbbe357eb7ae9",
".git/objects/4c/4f8aefd05ba3b8a6cc7d09905b88e0e8565568": "dee5f110825713d379e19f2824af1f04",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/b0f987ac0961fe9834e4cc85abde9e2b2f0556": "b6ec8654ba96d79ba54163ad2ae6b9dc",
".git/objects/50/b386b7e0b2771c63f751ef67401fccd9e1077c": "a2559b74e1bd780fea4b48d1b9a58e7e",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/5e/506de725a0acbc285239d85251b9a76e95aebc": "b5dceeaea1546640acdd5b7362b29c74",
".git/objects/66/bf338c0d4c088934785fc57a04df2666b91b84": "0255be5515bc8a2462b75aed908044f3",
".git/objects/67/56fdc510e5a9be1fdc0bc1cdd3edcda27b74de": "aaf68295f9aebf0fc39068fea1a24b24",
".git/objects/71/cbf1474f5629d5baff6fbc6e32665f8c0e578f": "b4107294bea4df01af6b7373e947817b",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/3d70382f7dc5cfd0ed80a5af2c715569239778": "1200e860a5c4223a1744d33265c0c33b",
".git/objects/93/f45a4620e8bfe3fffce52b20c1e683d49eb219": "53cfcdfcdf361d69cb16c0789cfd6073",
".git/objects/96/eccf3b75b2c6a206453493705694c8cd0a1379": "a1ec18e09deb73c2b84a5ca9868e0ef5",
".git/objects/9b/fc4505255f869903ba8e75ca63003fc3d7153b": "3c9cda34dd08f781bbee1427ab21c13b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/cb/80d50705fc4e396ec030eb0b2571d19eb99e16": "4eb33fddbfe36f39c10c6e37a2b8b7ed",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/56de3c95213f56b744b22115ae0ab331a07d4a": "c8b1bab248dbd0cf44b51c84c622079b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/81612ba3aa803431b0d5ebc24269fc5347c6a0": "7c4fa218ef679d801dfc5a62744ceb39",
".git/objects/f5/c400c427348aadc1f8a620a1ba0a1f28d1e79a": "dec8b04f952e262955904d12e0d174b9",
".git/objects/fb/3f8a1406b852e828d10a9baf722a65d9301baa": "6c90a6479691e29caa3ebe8976e391f5",
".git/refs/heads/master": "91b644896a5511e4692fd064f8b71c31",
".git/refs/remotes/origin/master": "91b644896a5511e4692fd064f8b71c31",
"assets/AssetManifest.json": "cd7dbb57b955c9a551c7ef90e6ae5f5b",
"assets/assets/fonts/Calibre-Medium.ttf": "efbc856693540e4e52437162acbcdb24",
"assets/assets/fonts/Calibre-Regular.ttf": "db089fb8d6bc638aea5e694965c623e3",
"assets/assets/fonts/Calibre-Semibold.ttf": "a9302bf0171b54366a104c4f17e54aef",
"assets/assets/fonts/SFMono-Regular.ttf": "1a81aba231d8a110cc1115c0dad3e39a",
"assets/assets/images/android_logo.png": "4a14590aeb381d1dadf89931c2a1e6ca",
"assets/assets/images/avatar.jpg": "746dd234a0dcaca5059274956d7c09a0",
"assets/assets/images/dart_logo.png": "f7b6e8d2a8624edaed1cc68a37b030cf",
"assets/assets/images/firebase_logo.png": "ad48fdb13b54c79f0ae1b29129bab592",
"assets/assets/images/flutter_logo.png": "896b869b30687bca91598cca3b504520",
"assets/assets/images/kotlin_logo.png": "11a53f56f36e17dc238b861fd9ae5c62",
"assets/assets/images/logo_no_bg.png": "f0da4f4878e1df0ea280efe561fab254",
"assets/assets/images/swift_logo.png": "c338267233a5d5759249da022895cba7",
"assets/FontManifest.json": "2747e73c4166d71ebe1bced7da7f03bf",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "e2018a3fc36a19ab1a81899bebc7e89a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e3f6fd092415d6333a3d28049e881466",
"/": "e3f6fd092415d6333a3d28049e881466",
"main.dart.js": "c72601830b99e9742d7c230fd7ca1b5b",
"manifest.json": "1c62d339c7fe6575592dae8fa77f5502",
"version.json": "32e0a73cc6ec7b8d643202d01995da7e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
