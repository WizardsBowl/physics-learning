<script setup lang="ts">
import { computed } from 'vue'
import katex from 'katex'
import 'katex/dist/katex.min.css'

const props = defineProps<{
  /** 纯文本，可用 $...$ 写行内公式、$$...$$ 写行间公式 */
  text: string
}>()

/** 文本片段与已渲染公式片段；用可空字段避免模板中的联合类型收窄问题 */
interface Segment {
  text: string | null
  html: string | null
}

const SEGMENT_PATTERN = /(\$\$[^$]+\$\$|\$[^$\n]+\$)/g

/**
 * 按定界符切分文本，公式片段交给 KaTeX 渲染。
 * 内容来自本地章节数据、不接受用户输入，因此可以用 v-html；
 * 单个公式有语法错误时由 throwOnError: false 降级为红色提示，不影响其余文本。
 */
const segments = computed<Segment[]>(() =>
  props.text
    .split(SEGMENT_PATTERN)
    .filter((part) => part !== '')
    .map((part) => {
      const isBlock = part.startsWith('$$') && part.endsWith('$$')
      const isInline = part.startsWith('$') && part.endsWith('$')
      if (!isBlock && !isInline) {
        return { text: part, html: null }
      }
      return {
        text: null,
        html: katex.renderToString(isBlock ? part.slice(2, -2) : part.slice(1, -1), {
          displayMode: isBlock,
          throwOnError: false,
          strict: 'ignore',
        }),
      }
    }),
)
</script>

<template>
  <span class="latex-text">
    <template v-for="(segment, index) in segments" :key="index">
      <span v-if="segment.text !== null">{{ segment.text }}</span>
      <span v-else v-html="segment.html" />
    </template>
  </span>
</template>

<style scoped>
/* 沿用外层容器的 white-space（例题区使用 pre-line 保留换行） */
.latex-text {
  white-space: inherit;
}

/* 行内公式与正文同字号，避免 KaTeX 默认的 1.21em 撑大行高 */
.latex-text :deep(.katex) {
  color: inherit;
  font-size: 1em;
}

.latex-text :deep(.katex-display) {
  margin: 0.5rem 0;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>
