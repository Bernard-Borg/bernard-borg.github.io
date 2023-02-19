import { createApp, Ref, ref } from "vue";
import "@/style.css";
import App from "@/App.vue";
import InlineSvg from "vue-inline-svg";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App)
    .provide<Ref<boolean>>("viewingPDF", ref(false))
    .component("inline-svg", InlineSvg)
    .use(pinia)
    .mount("#app");
