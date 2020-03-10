import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import Vue from "vue";
import Vuetify from "vuetify/lib";
import en from "vuetify/src/locale/en";
import de from "vuetify/src/locale/de";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { de, en },
    current: "de"
  },
  theme: {
    themes: {
      light: {
        primary: "#1976D2",
        secondary: "#FFC107",
        accent: "#82B1FF",
        error: "#F44336",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  },
  icons: {
    iconfont: "mdi"
  }
});
