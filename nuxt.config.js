export default {
  target: 'static',
  components: {
    dirs: [
      '~/components',
    ]
  },
  plugins: [
    '@plugins/directives'
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      {
        code: 'nl-nl',
        file: 'nl-NL.js',
        name: 'Nederlands'
      },
      {
        code: 'en-gb',
        file: 'en-GB.js',
        name: 'English'
      }
    ],
    defaultLocale: 'nl-nl',
    lazy: true,
    langDir: 'lang/',
    detectBrowserLanguage: false,
    vueI18n: {
      fallbackLocale: 'nl-nl'
    }
  },
  buildModules: [
    '@nuxt/postcss8',
    ['nuxt-storm', { nested: true }],
    '@nuxt/components',
    '@nuxtjs/google-fonts',
    '@braid/vue-formulate/nuxt',
  ],
  css: [
    '@/assets/css/style.css',
  ],
  googleFonts: {
    families: {
      Roboto: {
        wght: [300, 400, 600, 700],
        ital: [400]
      }
    },
    'IBM+Plex+Mono': {
      wght: [400]
    }
  },
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
    timing: false
  },
  build: {
    parallel: true,
    cache: true,
  }
}
