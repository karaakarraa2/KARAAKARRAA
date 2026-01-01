const CACHE_NAME = "karaakarraa-v1"

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.png",
  "./author.jpg.JPG",
  "./karaa_karraa_logo.jpg.jpg",
  "https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Montserrat:wght@700&display=swap",
  "https://fonts.gstatic.com/s/crimsonpro/v23/q5uDsoa5M_tv7IihmnkabC5X3A_68WpPps_3L1s.woff2",
  "https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXo.woff2",
]

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)))
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))),
  )
})

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then((res) => res || fetch(event.request)))
})
