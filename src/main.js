import Vue from "vue";
import App from "./App";
import Motherflipper from "./plugins/Motherflipper/main";

Vue.config.productionTip = false;
Vue.use(Motherflipper);

new Vue({
  render: h => h(App)
}).$mount("#app");
