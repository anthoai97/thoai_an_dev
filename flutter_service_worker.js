'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b197fd9228cba9e802a6f741efc49cda",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "19faa035386d118852e336c561d15032",
"index.html": "59e779c4e3ebcfcee14d6690f0c4b2de",
"/": "59e779c4e3ebcfcee14d6690f0c4b2de",
"main.dart.js": "1d03cdbc92c83b289ead835153f12c2c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/logo_no_bg.png": "f0da4f4878e1df0ea280efe561fab254",
"manifest.json": "86f9e059bc6fbd477b002d1e63696281",
".git/config": "7c99c39c0e1090f29b547e2960a92b6a",
".git/objects/50/5de120d169035c43182ced4022505cc7f637c4": "eead35161234aaabe325d696bd26a8a7",
".git/objects/57/98af22848392df9ab7b3ee9b94cafe10855096": "05aef2572b8f4b5c56dc83a92e77e84a",
".git/objects/02/b0210c3ed04e1cad7d77340ef4bf57f5018bda": "18137ab79f08a325783733b3603281eb",
".git/objects/ad/dc641ee27de224339555e170febddce71efe06": "2320f90fbcc2468829cb28eebedd4374",
".git/objects/a2/96472cb30dece1d1c57e8dcb4ec6e789c24e2c": "ba17e25902d3d81b3d0c2e71f8c957a5",
".git/objects/ae/957fb22efbc4702d9c0bafe5dcb8977fc8a932": "ffb13a621bd2e4335d36ea873392d71c",
".git/objects/e5/cf8bb4d81011a9224033081806cfadc7a7bb5c": "fa83baabb677b17a1b65ee5b84d18391",
".git/objects/fd/050767481f5007f88c63c85e3c1c92eb0d19eb": "741561e6cd18a5f160ae0ca227fb5be0",
".git/objects/ec/5353e7a923eb9976df990e77f436db00ccf840": "4566f61d44318190395704e039e0b8ab",
".git/objects/pack/pack-4a7425714bb251736d89aebe0f6a2391d01ff912.pack": "93aaa8947e65d2b4ce77792e9bfcdf2b",
".git/objects/pack/pack-4a7425714bb251736d89aebe0f6a2391d01ff912.idx": "e67126006c2d818f6812d3e597f23e3e",
".git/objects/29/1f5031836673480379d4eed68f50dbfce8ece4": "79856ade99836dfe3fc0e630760a7716",
".git/objects/16/8430c8ccbf8548f2ebc8193c729cb1ce8886df": "857d4d0677a9ce5896c698bdcfb8c2d9",
".git/objects/75/a1d8ffa2a278335581b7d35e4d832976954f2b": "43031aec1e6ecfc8ed28df568a388f5f",
".git/objects/5d/2aef211be2610919b46381468ee3785bdfe610": "38e794d6d394e3f7d42476ebe683f674",
".git/objects/55/99d6b3ef2e5b2c54cca849c400af9bb86a6d5b": "617313ceb4051d42ee55633ecf01170d",
".git/objects/a9/8ebf1b010c2ec08150f89052db0b29fc1726ac": "b7b8f9390f2480140fe8e7eb02973f41",
".git/objects/b9/c9b45757c9adb39af5d4d30f8614babac37189": "350ff5522ed1208e61b54bf01020bb01",
".git/objects/71/46340a3b293f9c56dbf1c39e33dfd4ce9440dc": "369de72d1f08cef630491656091fc409",
".git/objects/71/2e64360f7005477b1ccc78cb1aa8cb8497f5bb": "31eb9396cf6b3c0330a1c33dc2c88aeb",
".git/objects/82/1d7be3991fa0231d30a968b21d55a5beb069dc": "6aea2b1880dfa20d1200361dfc248d67",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "16e7463f2faaf0f4ae78ba33f840ed64",
".git/logs/refs/heads/master": "16e7463f2faaf0f4ae78ba33f840ed64",
".git/logs/refs/remotes/origin/HEAD": "e86c19fb902eb9c6ded18e2cdf8bbb0e",
".git/logs/refs/remotes/origin/master": "b24204e5e40f2cee60c468ed3fdbc74c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "a0f23e7823bb9c7e969ec4073e148f09",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "a0f23e7823bb9c7e969ec4073e148f09",
".git/index": "07acb35592cddde24088ec1239158a0d",
".git/packed-refs": "a64c925b2468ef2a52bf9bcbddef8ae9",
".git/COMMIT_EDITMSG": "5575a423ee1c0f61810de3b72b14b3d7",
"assets/AssetManifest.json": "d5f8fe6bd94e6d3faf3a931cd074c661",
"assets/NOTICES": "f0a83bf08f3c06ff3d30edb312528cce",
"assets/FontManifest.json": "2747e73c4166d71ebe1bced7da7f03bf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/flutter_logo.png": "896b869b30687bca91598cca3b504520",
"assets/assets/images/react_logo.png": "0df992e32fa2a20850b2c56317777dd5",
"assets/assets/images/swift_logo.png": "c338267233a5d5759249da022895cba7",
"assets/assets/images/avatar.jpg": "746dd234a0dcaca5059274956d7c09a0",
"assets/assets/images/dart_logo.png": "f7b6e8d2a8624edaed1cc68a37b030cf",
"assets/assets/images/firebase_logo.png": "ad48fdb13b54c79f0ae1b29129bab592",
"assets/assets/images/kotlin_logo.png": "11a53f56f36e17dc238b861fd9ae5c62",
"assets/assets/images/android_logo.png": "4a14590aeb381d1dadf89931c2a1e6ca",
"assets/assets/images/logo_no_bg.png": "f0da4f4878e1df0ea280efe561fab254",
"assets/assets/fonts/Calibre-Semibold.ttf": "a9302bf0171b54366a104c4f17e54aef",
"assets/assets/fonts/Calibre-Regular.ttf": "db089fb8d6bc638aea5e694965c623e3",
"assets/assets/fonts/SFMono-Regular.ttf": "1a81aba231d8a110cc1115c0dad3e39a",
"assets/assets/fonts/Calibre-Medium.ttf": "efbc856693540e4e52437162acbcdb24",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
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
