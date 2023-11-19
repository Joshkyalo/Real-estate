import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import InstantSearch from 'vue-instantsearch/vue3/es';

loadFonts()

createApp(App)
  .use(router)
  .use(InstantSearch)
  .use(vuetify)
  .mount('#app')
