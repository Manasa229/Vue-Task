export default {
  srcDir: 'client/',
  components: true,
  env: {
    GOOGLE_MAP_API_KEY: process.env.BASE_URL || 'AIzaSyBzXIUvyEfFV7t7kmkengXi2UcIAQ7toXk'
  },
  head: {
    script: [
      {
        src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBzXIUvyEfFV7t7kmkengXi2UcIAQ7toXk&libraries=places'
      }
    ]
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/axios',
  ],
 

  tailwindcss: {
    configPath: '~/config/tailwind.js',
    exposeConfig: true
  },

  // build: {
  //   vendor: ["vue2-google-maps"],
  //   transpile: [/^vue2-google-maps($|\/)/]
  // },
  axios: {
    // proxy: true
  },


}
