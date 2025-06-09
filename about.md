---
next: false
prev: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/lovemilk2333.png',
    name: 'lovemilk',
    title: '创建者',
    links: [
      { icon: 'github', link: 'https://github.com/lovemilk2333' },
    ]
  },
  {
    avatar: 'https://www.github.com/haolr.png',
    name: '沪上馄饨店',
    title: '创建者',
    links: [
      { icon: 'github', link: 'https://github.com/haolr' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/1188159552995205222/221002ed13956616036eb28764041ec9.webp',
    name: '闰二贰叁',
    title: '创建者'
  },
]
</script>

# 我们的组织

<VPTeamMembers size="small" :members />