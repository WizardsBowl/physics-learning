import fs from 'node:fs'
import path from 'node:path'
import katex from 'katex'

const dir = path.join(process.cwd(), 'src/data/chapters')
const files = fs.readdirSync(dir).filter((file) => file.endsWith('.ts') && file !== 'index.ts')

let formulaCount = 0
let inlineCount = 0
const failures = []

/** 与 KatexFormula.vue / LatexText.vue 使用相同的选项，确保校验结果与实际渲染一致 */
function check(file, latex, displayMode) {
  try {
    const html = katex.renderToString(latex, {
      displayMode,
      throwOnError: true,
      strict: 'ignore',
    })
    if (html.includes('katex-error')) {
      failures.push({ file, latex, mode: displayMode ? 'display' : 'inline', message: 'rendered as katex-error' })
    }
  } catch (error) {
    failures.push({ file, latex, mode: displayMode ? 'display' : 'inline', message: error.message })
  }
}

/** 还原 JS 字符串字面量中的转义：`\\frac` → `\frac`、`\n` → 换行 */
function unescapeString(raw) {
  return raw.replace(/\\(u[0-9a-fA-F]{4}|x[0-9a-fA-F]{2}|.)/g, (_, escape) => {
    if (escape.length > 1) {
      return String.fromCharCode(parseInt(escape.slice(1), 16))
    }
    switch (escape) {
      case 'n':
        return '\n'
      case 'r':
        return '\r'
      case 't':
        return '\t'
      case 'b':
        return '\b'
      case 'f':
        return '\f'
      case 'v':
        return '\v'
      case '0':
        return '\0'
      default:
        return escape
    }
  })
}

/** 例题等正文中的行内 / 行间公式：`$...$`、`$$...$$` */
const mathPattern = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g

function checkInline(text, file) {
  mathPattern.lastIndex = 0
  let match
  while ((match = mathPattern.exec(text)) !== null) {
    inlineCount += 1
    check(file, match[1] ?? match[2], match[1] !== undefined)
  }
}

for (const file of files) {
  const source = fs.readFileSync(path.join(dir, file), 'utf8')

  // 1) 核心公式字段：latex: String.raw`...`（整体即一条行间公式）
  const rawPattern = /(latex:\s*)?String\.raw`([^`]*)`/g
  let match
  while ((match = rawPattern.exec(source)) !== null) {
    if (match[1]) {
      formulaCount += 1
      check(file, match[2], true)
      continue
    }
    // 2) 写在 String.raw 里的正文：只校验其中的 $...$ 片段
    if (match[2].includes('$')) {
      checkInline(match[2], file)
    }
  }

  // 3) 写在普通单引号字符串里的正文
  const quotedPattern = /'((?:[^'\\\r\n]|\\.)*)'/g
  while ((match = quotedPattern.exec(source)) !== null) {
    if (match[1].includes('$')) {
      checkInline(unescapeString(match[1]), file)
    }
  }
}

console.log(
  `checked ${formulaCount} formulas and ${inlineCount} inline formulas in ${files.length} chapter files, ${failures.length} failed`,
)
for (const failure of failures) {
  console.log(JSON.stringify(failure, null, 2))
}
process.exit(failures.length ? 1 : 0)

