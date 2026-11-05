/** 常见希腊字母命令 → Unicode 符号，便于用户直接输入符号检索 */
const GREEK_LETTERS: Record<string, string> = {
  alpha: 'α',
  beta: 'β',
  gamma: 'γ',
  delta: 'δ',
  Delta: 'Δ',
  epsilon: 'ε',
  varepsilon: 'ε',
  zeta: 'ζ',
  eta: 'η',
  theta: 'θ',
  kappa: 'κ',
  lambda: 'λ',
  Lambda: 'Λ',
  mu: 'μ',
  nu: 'ν',
  xi: 'ξ',
  pi: 'π',
  rho: 'ρ',
  sigma: 'σ',
  tau: 'τ',
  phi: 'φ',
  varphi: 'φ',
  chi: 'χ',
  psi: 'ψ',
  Psi: 'Ψ',
  omega: 'ω',
  Omega: 'Ω',
}

/**
 * 把 LaTeX 源码粗略转换为可检索的纯文本：
 * 去除结构符号、保留命令名（`\sin` → `sin`）、把希腊字母命令映射为符号。
 *
 * 仅用于首页搜索匹配，不用于展示。
 */
export function latexToSearchText(latex: string): string {
  return latex
    .replace(/\\([a-zA-Z]+)/g, (_, command: string) => ` ${GREEK_LETTERS[command] ?? command} `)
    .replace(/[{}^_$&\\]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

/**
 * 处理含行内公式（`$...$`）的正文：公式部分转为可检索文本，其余原样保留。
 * 仅用于首页搜索匹配，不用于展示。
 */
export function latexTextToSearchText(text: string): string {
  return text.replace(/\$([^$\n]+)\$/g, (_, latex: string) => ` ${latexToSearchText(latex)} `)
}

