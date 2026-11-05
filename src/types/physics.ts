/**
 * 公式：`expression` 使用纯文本 + Unicode 符号书写，
 * 便于全文检索、直接复制到笔记软件，也不依赖任何公式渲染库。
 */
export interface Formula {
  /** 公式主体，例如 "F = ma" */
  expression: string
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
