export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'soulroll',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyAWrInxpwzq2pj5V3sTCD_BCiuDWYFrF7k',
          authDomain: 'soulbound-roller.firebaseapp.com',
          projectId: 'soulbound-roller',
          storageBucket: 'soulbound-roller.appspot.com',
          messagingSenderId: '864916552589',
          appId: '1:864916552589:web:8b00b05fafc00f69579bc4',
          measurementId: 'G-KKT5TNJ4XM',
        },
        services: {
          firestore: 'true',
        },
      },
    ],
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
