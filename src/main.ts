import { createApp, Ref, ref } from "vue";
import "@/style.css";
import App from "@/App.vue";
import InlineSvg from "vue-inline-svg";

createApp(App).provide<Ref<boolean>>("viewingPDF", ref(false)).component("inline-svg", InlineSvg).mount("#app");
