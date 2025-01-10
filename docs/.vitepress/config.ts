import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Melon FE",
  description: "大前端重点知识整理",
  locales: {
    root: {
      label: "简体中文",
      lang: "zh",
      title: "前端技术整理",
      description: "系统化整理前端技术知识点，面试导向，助力开发者进阶",
      themeConfig: {
        siteTitle: "{ Melon FE }",
        nav: [
          { text: "首页", link: "/" },
          { text: "算法与数据结构", link: "/algorithm/" },
          { text: "计算机网络", link: "/network/" },
          { text: "前端基础", link: "/frontend/basic" },
          { text: "框架原理", link: "/frontend/framework" },
          { text: "工程化", link: "/frontend/engineering" },
          { text: "跨端开发", link: "/frontend/cross-platform" },
          { text: "关于", link: "/about/" },
        ],

        sidebar: {
          "/frontend/": [
            {
              text: "前端",
              items: [
                { text: "概述", link: "/frontend/" },
                {
                  text: "JavaScript",
                  items: [
                    { text: "基础知识", link: "/frontend/javascript/basic" },
                    { text: "进阶知识", link: "/frontend/javascript/advanced" },
                    { text: "ES6+特性", link: "/frontend/javascript/es6" },
                  ],
                },
                {
                  text: "框架",
                  items: [
                    { text: "React", link: "/frontend/framework/react" },
                    { text: "Vue", link: "/frontend/framework/vue" },
                  ],
                },
                {
                  text: "工程化",
                  items: [
                    { text: "构建工具", link: "/frontend/engineering/build" },
                    {
                      text: "性能优化",
                      link: "/frontend/engineering/performance",
                    },
                  ],
                },
              ],
            },
          ],
        },

        footer: {
          message: "基于 MIT 许可发布",
          copyright: "Copyright © 2024-present Melon FE",
        },

        outline: "deep",
        lastUpdated: {
          text: "最后更新时间",
          formatOptions: {
            dateStyle: "full",
            timeStyle: "short",
          },
        },

        docFooter: {
          prev: "上一页",
          next: "下一页",
        },

        returnToTopLabel: "返回顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "主题",
      },
    },
  },
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/Melon-Incubator/interview" },
    ],
    search: {
      provider: "local",
      options: {
        miniSearch: {
          options: {
            tokenize: (text) => text.split(/[\s\-_]+|(?=[A-Z])/),
            processTerm: (term) => term.toLowerCase(),
          },
          searchOptions: {
            fuzzy: 0.3,
            prefix: true,
            boost: {
              title: 5,
              heading: 3,
              text: 1,
              tag: 2,
              anchor: 4,
            },
          },
        },
      },
    },
  },
});
