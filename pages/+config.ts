import type { Config, GlobalContext } from "vike/types";
import vikeReact from "vike-react/config";
import Layout from "../layouts/LayoutDefault.js";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout
  Layout,

  // https://vike.dev/head-tags
  title: "My Vike App",
  description: "Demo showcasing Vike",

  prerender: {
    enable: true,
    keepDistServer: false,
  },

  ssr: true,

  extends: [vikeReact],

  meta: {
    metadata: {
      eager: true,
      env: {server: true, client: true},
    },
  },

  passToClient: ["toc"],

} satisfies Config;
