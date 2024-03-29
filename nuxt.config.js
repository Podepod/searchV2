export default {
  server: {
    host: '0',
    port: 3000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'search',
    htmlAttrs: {
      lang: 'be'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/fontawesome'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    //hid: 'nuxt-color-mode-script',
    //globalName: '__NUXT_COLOR_MODE__',
    //componentName: 'ColorScheme',
    classPrefix: '',
    //classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },

  fontawesome: {
    icons:{
     solid:true,
     brands:true
    }
  }
}
