<script setup lang="ts">
import katex from 'katex'
import 'katex/dist/katex.min.css'
import { computed } from 'vue'

const props = defineProps<{
  /** 不带 $ 定界符的 LaTeX 源码 */
  latex: string
  /** 是否使用行间公式（display mode），默认开启 */
  display?: boolean
}>()

/**
 * KaTeX 输出的是可信 HTML（数据来自本地章节文件，不接受用户输入），
 * 因此可以用 v-html 渲染；单个公式有语法错误时由 throwOnError: false 降级显示。
 */
const renderedHtml = computed(() =>
  katex.renderToString(props.latex, {
    displayMode: props.display ?? true,
    throwOnError: false,
    strict: 'ignore',
  }),
)
</script>

<template>
  <span class="katex-formula" v-html="renderedHtml" />
</template>

<style scoped>
.katex-formula {
  display: block;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0.15rem 0 0.3rem;
}

.katex-formula :deep(.katex-display) {
  margin: 0;
}

.katex-formula :deep(.katex) {
  color: var(--text);
  font-size: 1.08em;
}
</style>
