import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Satisfactory - YPSO",
  description: "Yellow Peach Organization for Standardization",

  head: [
    ['link', { ref: 'icon', href: '/favicon.png' }]
  ],

  themeConfig: {
    logo: '/favicon.png',

    nav: [
      { text: '主页', link: '/' },
      { text: '关于', link: '/about' },
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
      { icon: 'github', link: 'https://github.com/YPSO-org/Satisfactory' }
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
