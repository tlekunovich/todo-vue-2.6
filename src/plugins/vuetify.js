// // Styles
// import "@mdi/font/css/materialdesignicons.css";
// import "vuetify/styles";

// // Vuetify
// import { createVuetify } from "vuetify";

// export default createVuetify();
// // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

// // import Vue from 'vue'
// // import Vuetify from 'vuetify'
// // import 'vuetify/dist/vuetify.min.css'

// // Vue.use(Vuetify)

// // const opts = {}

// // export default new Vuetify(opts)
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "mdi"
    },
    theme: {
        themes: {
            light: {
                accent: "#375f7d",
                secondary: "#e3ecf6",
                tertiary: "#f1f6fa",
                outbound: "#BC65D0"
            }
        }
    }
});
