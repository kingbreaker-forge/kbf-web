import vikeVue from "vike-vue/config";
import { Config } from "vike/types";

import rootLayout from "./rootLayout.vue";

export default {
    Layout: rootLayout,

    ssr: true,

    extends: [vikeVue]
} satisfies Config;