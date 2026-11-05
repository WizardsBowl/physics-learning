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
