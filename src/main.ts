import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import "@mdi/font/css/materialdesignicons.css";
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/dist/vuetify.min.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(router).use(createPinia()).use(vuetify).mount("#app");

