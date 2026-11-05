import fs from 'node:fs'
import path from 'node:path'
import katex from 'katex'

const dir = path.join(process.cwd(), 'src/data/chapters')
const files = fs.readdirSync(dir).filter((file) => file.endsWith('.ts') && file !== 'index.ts')

let total = 0
const failures = []

for (const file of files) {
  const source = fs.readFileSync(path.join(dir, file), 'utf8')
  const pattern = /String\.raw`([^`]+)`/g
  let match
  while ((match = pattern.exec(source)) !== null) {
    total += 1
    try {
      // 与 KatexFormula.vue 使用相同的选项，确保校验结果与实际渲染一致
      const html = katex.renderToString(match[1], {
        displayMode: true,
        throwOnError: true,
        strict: 'ignore',
      })
      if (html.includes('katex-error')) {
        failures.push({ file, latex: match[1], message: 'rendered as katex-error' })
      }
    } catch (error) {
      failures.push({ file, latex: match[1], message: error.message })
    }
  }
}

console.log(`checked ${total} formulas in ${files.length} chapter files, ${failures.length} failed`)
for (const failure of failures) {
  console.log(JSON.stringify(failure, null, 2))
}
process.exit(failures.length ? 1 : 0)
