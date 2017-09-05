const axios = require('axios')
const _ = require('lodash')

module.exports = {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//at.alicdn.com/t/font_405176_a39l50hbiilwstt9.css' }
    ]
  },
  css: [
    'normalize.css',
    // 'highlight.js/styles/github.css',
    // '~assets/scss/main.scss'
  ],
  plugins: [
    { src: '~/plugins/ga.js', ssr: false },
    { src: '~/plugins/iview.js', ssr: true }
  ],
  build: {
    vendor: ['axios']
  },
  env: {
    githubToken: '4aa6bcf919d238504e7db59a66d32e78281c0ad3',
    docSearchApiKey: 'ff80fbf046ce827f64f06e16f82f1401'
  },
  loading: { color: '#41B883' },
  generate: {
    // routes () {
    //   const lang = 'en'
    //   return Promise.all(
    //     ['guide', 'api', 'examples', 'faq']
    //     .map((category) => {
    //       return axios.get(`https://docs.api.nuxtjs.org/menu/${lang}/${category}`)
    //       .then((res) => res.data || [])
    //       .then((menu) => {
    //         return _(menu)
    //         .map('links')
    //         .flatten()
    //         .map((m) => m.to.slice(1))
    //         .compact()
    //         .map((slug) => {
    //           return `/${category}/${slug}`
    //         })
    //         .value()
    //         .concat(`/${category}`)
    //       })
    //     })
    //   )
    //   .then((routes) => _(routes).flatten().uniq().value())
    // }
    minify: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeAttributeQuotes: false,
      removeComments: false,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: false,
      removeStyleLinkTypeAttributes: false,
      removeTagWhitespace: false,
      sortAttributes: true,
      sortClassName: true,
      trimCustomFragments: true,
      useShortDoctype: true
    }
  }
}
