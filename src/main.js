import Vue from "vue";
import App from "./App.vue";
// import vuetify from './plugins/vuetify'
// import { loadFonts } from './plugins/webfontloader'
import plugins from "./plugins";
import router from "./plugins/router";

// loadFonts()
Vue.prototype.app = new Vue({
    ...plugins,
    render: h => h(App)
}).$mount("#app");
// createApp(App)
//   // .use(vuetify)
//   .mount('#app')
// new Vue({
//     router,
//     plugins,
//     render: h => h(App)
// }).$mount("#app");
