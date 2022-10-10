import { createApp } from "vue";
import "./lib/zulu.scss";
import App from "./App.vue";
import "./index.scss";

import router from "./router/index";

const app = createApp(App);
app.use(router);

app.mount("#app");
