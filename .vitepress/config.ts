import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "知识导航",
  description: "一个计算机知识导航小破站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "常用在线工具", link: "/common_tools" }],
    logo: "/logo.png",

    // sidebar: {
    //   "/01_basic": [
    //     {
    //       text: "Examples",
    //       items: [
    //         { text: "Markdown Examples", link: "/markdown-examples" },
    //         { text: "Runtime API Examples", link: "/api-examples" },
    //       ],
    //     },
    //   ],
    // },

    socialLinks: [
      { icon: "github", link: "https://github.com/ginlink/site-nav" },
    ],
  },
});
