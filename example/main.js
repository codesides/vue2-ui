import Vue from "vue";
import App from "./App.vue";

// import HcUi from "../packages/hcui";
import { Button, Select } from "../packages/hcui";

import "../packages/hcui.min.css";

// Vue.use(HcUi);
Vue.use(Button);
Vue.use(Select);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
