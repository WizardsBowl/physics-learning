# 大学物理知识库（physics-learning）

使用 **Vue 3 + TypeScript + Vite** 构建的大学物理知识点整理与复习站点。
按章节沉淀核心概念、公式与易错点，支持关键词检索、章节导航与公式速查。

## 技术栈

| 分类 | 选型 |
| --- | --- |
| 框架 | Vue 3（`<script setup>` 单文件组件） |
| 语言 | TypeScript（严格模式，`vue-tsc` 类型检查） |
| 构建 | Vite 8 |
| 路由 | Vue Router 4 |
| 公式排版 | KaTeX 0.19（仅章节页按需加载） |

不依赖 UI 框架，样式使用原生 CSS 变量，支持浅色 / 深色模式；公式由 KaTeX 渲染为真正的数学排版，
同时输出 MathML，便于无障碍阅读与复制。

## 快速开始

```bash
cd physics-learning
npm install
npm run dev          # 启动开发服务器
npm run build        # 类型检查 + 生产构建
npm run preview      # 预览构建产物
npm run check:latex  # 用 KaTeX 严格模式批量校验章节公式语法
```

## 目录结构

```
physics-learning/
├── index.html
├── public/
│   └── favicon.svg
├── src/
│   ├── main.ts                 # 应用入口，注册路由
│   ├── App.vue                 # 全局布局：顶部导航 + 主内容 + 页脚
│   ├── style.css               # 设计变量、基础样式、深色模式
│   ├── router/index.ts         # 路由表与页面标题同步
│   ├── types/physics.ts        # Chapter / KnowledgePoint / Formula 类型
│   ├── data/chapters/          # 章节知识数据（每章一个文件）
│   │   ├── index.ts            # 汇总导出与查询辅助函数
│   │   ├── mechanics.ts        # 力学
│   │   ├── oscillations.ts     # 振动与波动
│   │   ├── thermal.ts          # 热学
│   │   ├── electromagnetism.ts # 电磁学
│   │   ├── optics.ts           # 光学
│   │   └── modernPhysics.ts    # 近代物理
│   ├── components/
│   │   ├── ChapterCard.vue     # 首页章节卡片
│   │   ├── KnowledgePointCard.vue # 知识点卡片（KaTeX 公式 + 要点）
│   │   └── KatexFormula.vue    # KaTeX 渲染组件（按需加载 katex 与样式）
│   ├── utils/latex.ts          # LaTeX → 可检索纯文本（首页搜索用）
│   └── views/
│       ├── HomeView.vue        # 总览与检索
│       ├── ChapterView.vue     # 章节详情（目录 + 知识点）
│       └── NotFoundView.vue    # 404
├── scripts/
│   └── check-latex.mjs         # 批量校验 LaTeX 公式语法
└── vite.config.ts
```

## 如何新增知识点

1. 在 `src/data/chapters/` 对应章节文件中追加一个 `KnowledgePoint` 对象：

```ts
{
  id: 'moment-of-inertia',        // 章节内唯一，作为页面锚点
  title: '转动惯量',
  summary: '描述刚体转动惯性大小的物理量。',
  formulas: [
    { latex: String.raw`J = \int r^2\,dm`, note: '连续体转动惯量的定义' },
  ],
  keyPoints: ['转动惯量取决于质量分布与转轴位置。'],
  examples: [],                    // 例题：暂无内容时留空数组
  level: 2,                        // 1 基础 · 2 进阶 · 3 拓展
}
```

2. 若新增整章，在 `src/data/chapters/` 新建文件并在 `index.ts` 的 `chapters` 数组中按顺序注册，路由与导航会自动生效。

> **公式书写约定**：`latex` 字段存放不带 `$` 定界符的 LaTeX 源码，并用 `String.raw` 包裹，
> 这样 `\frac`、`\int` 等反斜杠不会被 JS 字符串转义；中文说明写在 `note` 中（KaTeX 不含中文字形）。
> 首页搜索会把 LaTeX 转成可检索文本（`src/utils/latex.ts`），公式依然能被搜索到。
> 编辑后执行 `npm run check:latex`，可用 KaTeX 严格模式一次性校验所有公式语法。

## 例题数据结构

每个知识点都带一个 `examples` 数组（类型见 `src/types/physics.ts` 的 `Example` / `ExampleDifficulty`）。
尚未编写例题时保持空数组 `[]`，卡片会自动隐藏「典型例题」区块。字段示例如下（内容待补充）：

```ts
examples: [
  {
    question: '题干：……',
    answer: '答案：……',
    explanation: '解析：……',
    difficulty: 2,   // 1 入门 · 2 基础 · 3 中等 · 4 较难 · 5 挑战
  },
],
```

- 卡片中例题默认折叠，点击「例 N」展开题目、答案与解析；难度用 5 个圆点呈现，并在无障碍标签中给出文字等级。
- `question` / `answer` / `explanation` 目前为纯文本，字符串内的 `\n` 会保留为换行。
- 例题正文中的公式排版（行内 KaTeX）尚未支持，暂可用 Unicode 纯文本书写；后续可扩展为 `$...$` 行内公式。

## 许可

仅用于个人学习与复习整理。
