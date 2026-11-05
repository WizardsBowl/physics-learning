/**
 * 公式：`latex` 存放**不带 `$` 定界符**的 LaTeX 源码，由 KaTeX 渲染为行间公式。
 *
 * 建议使用 `String.raw` 书写，避免反斜杠被 JS 字符串转义：
 * `latex: String.raw`E = \frac{1}{2}mv^2``
 *
 * 中文说明请写在 `note` 中，不要写进 LaTeX（KaTeX 不含中文字形）。
 */
export interface Formula {
  /** LaTeX 源码，例如 String.raw`v = \frac{dr}{dt}` */
  latex: string
  /** 公式名称、适用条件或符号说明 */
  note?: string
}


/** 例题难度等级：1 入门 · 2 基础 · 3 中等 · 4 较难 · 5 挑战 */
export type ExampleDifficulty = 1 | 2 | 3 | 4 | 5

/**
 * 例题：题目、答案、解析与难度等级。
 *
 * 正文暂为纯文本，需要换行时在字符串里写 `\n`（渲染时保留换行）。
 * 公式排版目前只覆盖 `KnowledgePoint.formulas`，例题中的公式待后续扩展。
 */
export interface Example {
  /** 题干 */
  question: string
  /** 标准答案（结论式或数值均可） */
  answer: string
  /** 解题思路与关键步骤 */
  explanation: string
  /** 难度：1 最简单 · 5 最难 */
  difficulty: ExampleDifficulty
}

/** 单个知识点 */
export interface KnowledgePoint {
  /** 章节内唯一，用作页面锚点 */
  id: string
  title: string
  /** 一句话概括该知识点要解决什么问题 */
  summary: string
  /** 核心公式 */
  formulas?: Formula[]
  /** 必须掌握的结论、适用条件与易错点 */
  keyPoints: string[]
  /** 例题列表；尚未编写例题时写空数组 `[]`，卡片会自动隐藏该区块 */
  examples: Example[]
  /** 难度：1 基础 · 2 进阶 · 3 拓展 */
  level: 1 | 2 | 3
}

/** 章节 */
export interface Chapter {
  /** 路由参数，例如 "mechanics" */
  id: string
  title: string
  enTitle: string
  /** 章节主题色，用于卡片与标签 */
  accent: string
  /** 章节简介 */
  description: string
  points: KnowledgePoint[]
}
