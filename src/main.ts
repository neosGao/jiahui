import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import { createPinia } from "pinia";
// 全局组件
import topNav from "./components/topNav.vue";
import bottomNav from "./components/bottomNav.vue";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia).use(Antd).use(router).mount("#app");

app.component("topNav", topNav).component("bottomNav", bottomNav);
