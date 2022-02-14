const nextConfig = {
  env: {
    MAPS_KEY: process.env.MAPS_KEY,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN, 
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL, 
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    TAG_MANAGER_ID: process.env.TAG_MANAGER_ID,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID
  },
  transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  generateInDevMode: true,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  //i18n: {
  //  locales: ['es',],
  //  defaultLocale: 'es',
  //  localeDetection: false,
  //},
  //webpack(config, { dev, ...other }) {
  //  if (!dev) {
  //    // https://formatjs.io/docs/guides/advanced-usage#react-intl-without-parser-40-smaller
  //    config.resolve.alias['@formatjs/icu-messageformat-parser'] =
  //      '@formatjs/icu-messageformat-parser/no-parser'
  //  }
  //  return config
  //},
};

module.exports = nextConfig
