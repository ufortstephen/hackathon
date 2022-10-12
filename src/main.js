import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "../src/store/index";
console.log(store);
// import "./assets/main.css";

import moshaToast from "mosha-vue-toastify";
// import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

import Toast from "./components/Toast.vue";

const app = createApp(App);

app.use(router);
app.use(store);

app.use(moshaToast);

app.mount("#app");
