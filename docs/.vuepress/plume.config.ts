import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',
  // your git repo url
  docsRepo: '',
  docsDir: 'docs',

  appearance: true,

  profile: {
    avatar: 'https://theme-plume.vuejs.press/plume.png',
    name: 'My Vuepress Site',
    description: '个人博客',
    // circle: true,
    // location: '',
    // organization: '',
  },
  article: 'note',
  autoFrontmatter: {
    title: true,
    permalink: true,
    createTime: true,
  },

  navbar,
  notes,
  social: [
    { icon: 'github', link: '/' },
  ],

})
