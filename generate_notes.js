import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function generateNotesConfig() {
    const notesPath = path.join('docs', 'notes')
    const configParts = []
    
    // 遍历 notes 目录
    const dirs = fs.readdirSync(notesPath)
        .filter(dir => fs.statSync(path.join(notesPath, dir)).isDirectory())
    
    for (const dirName of dirs) {
        const dirPath = path.join(notesPath, dirName)
        
        // 获取目录下的所有 .md 文件
        const files = fs.readdirSync(dirPath)
            .filter(file => file.endsWith('.md'))
            .map(file => {
                const name = file.slice(0, -3)
                return name === 'README' ? '' : name
            })
            .sort((a, b) => {
                if (a === '') return -1
                if (b === '') return 1
                return a.localeCompare(b)
            })
        
        // 生成该目录的配置
        const noteConfig = `const ${dirName}Note = defineNoteConfig({
  dir: '${dirName}',
  link: '/${dirName}',
  sidebar: ${JSON.stringify(files)},
})`
        
        configParts.push(noteConfig)
    }
    
    // 生成完整的配置文件内容
    const fullConfig = `import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

${configParts.join('\n\n')}

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [${dirs.map(dir => `${dir}Note`).join(', ')}],
})
`
    
    // 写入配置文件
    const configPath = path.join('docs', '.vuepress', 'notes.ts')
    fs.writeFileSync(configPath, fullConfig, 'utf-8')
    console.log(`已生成配置文件: ${configPath}`)
}

generateNotesConfig() 