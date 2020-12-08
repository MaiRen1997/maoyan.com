import Vue from "vue";
import App from "./App.vue";

//引入路由和vuex
import router from "./router";
// import store from "./store";

//引入css
import "./assets/css/reset.scss";
import "./assets/font/font_82ir9xlce4g/iconfont.css";
//引入移动端适配插件（需要安装)
import "amfe-flexible";
//不要生产环境提示
Vue.config.productionTip = false;
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app");
