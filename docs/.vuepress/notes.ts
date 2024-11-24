import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  // sidebar: ["","bar","foo"],
  sidebar: 'auto',
})
const aboutNote = defineNoteConfig({
  dir: 'about',
  link: '/about',
  // sidebar: ["","bar","foo"],
  sidebar: 'auto',
})

const 前端Note = defineNoteConfig({
  dir: '1.前端',
  link: '/note/client/',
  // sidebar: ["","CSS","HTML"],
  sidebar: 'auto',
})

const 工程化Note = defineNoteConfig({
  dir: '3.工程化',
  link: '/工程化',
  sidebar: 'auto',
})

const 服务端Note = defineNoteConfig({
  dir: '2.服务端',
  link: '/serve',
  sidebar: 'auto',
})

const 框架Note = defineNoteConfig({
  dir: '4.框架',
  link: '/框架',
  sidebar: 'auto',
})

export const notes = defineNotesConfig({
  dir: '/notes/',
  link: '/',
  notes: [aboutNote, demoNote, 前端Note, 工程化Note, 服务端Note, 框架Note ],
})
