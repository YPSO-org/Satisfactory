import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Satisfactory - YPSO",
  description: "Yellow Peach Organization for Standardization",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
    ],

    sidebar: [
      {
        text: '规范',
        items: [
          { text: 'YPSO-STEAM/526870-0001 运输设施预留与建设规范 (试行)', link: '/standard/0001' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'gitea', link: 'https://git.lovemilk.top:8000/YPOS/Satisfactory' }
    ],

    footer: {
      message: 'Powered by VitePress',
      copyright: 'Copyright © 2025-present Yellow Peach Organization for Standardization, ALl Rights Reserved'
    },

    outline: {
      level: 'deep',
      label: '目录'
    },

    docFooter: {
      next: '下一篇',
      prev: '上一篇'
    },
  }
})
