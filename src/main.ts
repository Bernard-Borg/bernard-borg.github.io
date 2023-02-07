import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
import InlineSvg from "vue-inline-svg";

createApp(App).component("inline-svg", InlineSvg).mount("#app");
