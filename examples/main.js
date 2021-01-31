import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "highlight.js/styles/color-brewer.css";

Vue.config.productionTip = false;

import DemoBlock from "./components/demo-block.vue";
Vue.component("demo-block", DemoBlock);

// 组件引入
import ZmUI from "../packages/index";
Vue.use(ZmUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
