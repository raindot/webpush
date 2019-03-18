importScripts("precache-manifest.03f318bf4614ad34f266ba01f6004d5e.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */

// Listen to Push
self.addEventListener('push', (e) => {
  let data
  if (e.data) {
      data = e.data.json()
  }

  console.log('data for notification', data);

  const options = {
      body: data.body,
      // icon: '/img/icons/android-chrome-192x192.png',
      // image: '/img/autumn-forest.png',
      vibrate: [300, 200, 300],
      // badge: '/img/icons/plint-badge-96x96.png',
  }

  console.log('options passed to Notification', options);

  e.waitUntil(self.registration.showNotification(data.title, options))
})

