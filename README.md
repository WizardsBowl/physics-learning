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

不依赖 UI 框架与公式渲染库，样式使用原生 CSS 变量，支持浅色 / 深色模式。

## 快速开始

```bash
cd physics-learning
npm install
npm run dev       # 启动开发服务器
npm run build     # 类型检查 + 生产构建
npm run preview   # 预览构建产物
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
│   │   └── KnowledgePointCard.vue # 知识点卡片（公式 + 要点）
│   └── views/
│       ├── HomeView.vue        # 总览与检索
│       ├── ChapterView.vue     # 章节详情（目录 + 知识点）
│       └── NotFoundView.vue    # 404
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
    { expression: 'J = ∫r² dm', note: '连续体转动惯量的定义' },
  ],
  keyPoints: ['转动惯量取决于质量分布与转轴位置。'],
  level: 2,                        // 1 基础 · 2 进阶 · 3 拓展
}
```

2. 若新增整章，在 `src/data/chapters/` 新建文件并在 `index.ts` 的 `chapters` 数组中按顺序注册，路由与导航会自动生效。

> 公式以纯文本 + Unicode 书写（如 `½mv²`、`∮E·dS`），可直接搜索引擎检索与复制；
> 后续如需更精美的排版，可在此基础上接入 KaTeX。

## 许可

仅用于个人学习与复习整理。
