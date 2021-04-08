/**
 * 한글 어느정도 지원되는 버전 documnet사이트
 * https://v2.vuetifyjs.com/ko/getting-started/quick-start/
 */
let title = "NuxtJS_Web";
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    // title: 'NuxtJS_Web',
    title: `${title}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~assets/bootstrap/css/bootstrap.css'
  ],
  plugins: [
    '~/plugins/axios.js',
    '@/plugins/vuetify.js'
  ],
  serverMiddleware: [
    '~api/index.js'
  ],
  modules: [
    '@nuxtjs/axios', //$axios를 사용할 수 있음
    '@nuxtjs/proxy', //axios를 proxy 모듈과 쉽게 통합할 수 있게해준다.
  ],
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',
  ],
  axios: {
    proxy: true,
    // baseURL: 'http://localhost:3000'
  },
  proxy: {
    // '/nct': { //axios 요청에 /v1/이 url을 설정
    //   target: 'http://192.168.1.29:3000'
    // },
    '/api/es': {
      target: 'http://localhost:9200'
    },
    '/api/mg': {
      target: 'http://localhost:27017/song'
    }

  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  // mode: 'spa',
  build: {
    SSR: false, //SSR앱을 빌드한다.
    /**
    * Run ESLint on save
    * 저장할 때마다 자동으로 ESLint가 실행하려고 할 때 사용한다. 
    * ESLint는 플러그령 린팅 유틸리티로, 스타일 및 서식 지정 코드를 확인한다. (.eslintrc.js 파일을 수정해서 기본 린팅을 바꿀 수 있다.)
    */
    extend (config, { isDev, isClient }) {
      // if (isDev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }
}

