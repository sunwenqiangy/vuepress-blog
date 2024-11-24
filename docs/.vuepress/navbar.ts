import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '笔记',
    items: [{ text: '示例', link: '/notes/demo/README.md' },
      { text: '前端', link: '/notes/1.前端/README.md' },
      { text: '服务端', link: '/notes/2.服务端/README.md' },
      { text: '工程化', link: '/notes/3.工程化/README.md' },
      { text: '框架', link: '/notes/4.框架/README.md' },
      { text: 'about', link: '/notes/about/README.md' },
    ]
  },
])
