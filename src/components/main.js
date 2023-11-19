import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import  VueGoogleMaps from "vue3-google-map";
//import VueGoogleMaps from "@fawmi/vue-google-maps";

loadFonts()

createApp(App)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyAc7hrbMQaRRyLiN2iAeUoNMCH8o-SIYdU"
      
    },
  })
  .use(vuetify)
  .mount('#app')
