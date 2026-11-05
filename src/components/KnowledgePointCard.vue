<script setup lang="ts">
import { computed } from 'vue'
import KaTeXFormula from './KatexFormula.vue'
import type { ExampleDifficulty, KnowledgePoint } from '../types/physics'

const props = defineProps<{
  point: KnowledgePoint
  index: number
}>()

const levelLabels: Record<KnowledgePoint['level'], string> = {
  1: '基础',
  2: '进阶',
  3: '拓展',
}

const levelText = computed(() => levelLabels[props.point.level])
const orderText = computed(() => String(props.index + 1).padStart(2, '0'))

/** 难度以 5 个圆点呈现，避免用颜色单独承载信息 */
const difficultyScale = [1, 2, 3, 4, 5] as const

const difficultyLabels: Record<ExampleDifficulty, string> = {
  1: '入门',
  2: '基础',
  3: '中等',
  4: '较难',
  5: '挑战',
}
</script>

<template>
  <article :id="point.id" class="point-card">
    <header class="point-card__head">
      <span class="point-card__order">{{ orderText }}</span>
      <h3 class="point-card__title">{{ point.title }}</h3>
      <span class="point-card__level" :data-level="point.level">{{ levelText }}</span>
    </header>

    <p class="point-card__summary">{{ point.summary }}</p>

    <section v-if="point.formulas?.length" class="point-card__block">
      <h4 class="point-card__label">核心公式</h4>
      <ul class="formula-list">
        <li v-for="formula in point.formulas" :key="formula.latex" class="formula-item">
          <KaTeXFormula :latex="formula.latex" />
          <span v-if="formula.note" class="formula-note">{{ formula.note }}</span>
        </li>
      </ul>
    </section>

    <section class="point-card__block">
      <h4 class="point-card__label">要点与易错点</h4>
      <ul class="key-list">
        <li v-for="key in point.keyPoints" :key="key">{{ key }}</li>
      </ul>
    </section>

    <section v-if="point.examples.length" class="point-card__block">
      <h4 class="point-card__label">典型例题</h4>
      <ul class="example-list">
        <li v-for="(example, exampleIndex) in point.examples" :key="exampleIndex">
          <details class="example">
            <summary class="example__summary">
              <span class="example__no">例 {{ exampleIndex + 1 }}</span>
              <span
                class="example__difficulty"
                role="img"
                :aria-label="`难度 ${example.difficulty} / 5：${difficultyLabels[example.difficulty]}`"
              >
                <span
                  v-for="step in difficultyScale"
                  :key="step"
                  class="example__dot"
                  :class="{ 'is-on': step <= example.difficulty }"
                />
              </span>
            </summary>
            <div class="example__body">
              <p class="example__question">{{ example.question }}</p>
              <p class="example__line">
                <span class="example__tag">答案</span>{{ example.answer }}
              </p>
              <p class="example__line">
                <span class="example__tag">解析</span>{{ example.explanation }}
              </p>
            </div>
          </details>
        </li>
      </ul>
    </section>
  </article>
</template>

<style scoped>
.point-card {
  padding: 1.35rem 1.5rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  box-shadow: var(--shadow);
  scroll-margin-top: 5.5rem;
}

/* 窄屏时导航栏换成两行（品牌行 + 章节导航行），锚点需要更大的顶部留白 */
@media (max-width: 720px) {
  .point-card {
    scroll-margin-top: 7.25rem;
  }
}

.point-card__head {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.point-card__order {
  color: var(--accent, var(--brand));
  font-family: var(--font-math);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.06em;
}

.point-card__title {
  flex: 1;
  font-size: 1.08rem;
}

.point-card__level {
  padding: 0.1rem 0.5rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  white-space: nowrap;
}

.point-card__level[data-level='1'] {
  background: color-mix(in srgb, #10b981 16%, transparent);
  color: #059669;
}

.point-card__level[data-level='2'] {
  background: color-mix(in srgb, #f59e0b 18%, transparent);
  color: #b45309;
}

.point-card__level[data-level='3'] {
  background: color-mix(in srgb, #ef4444 16%, transparent);
  color: #dc2626;
}

.point-card__summary {
  margin-top: 0.45rem;
  color: var(--text-soft);
  font-size: 0.9rem;
}

.point-card__block {
  margin-top: 1rem;
}

.point-card__label {
  margin-bottom: 0.45rem;
  color: var(--muted);
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.formula-list {
  display: grid;
  gap: 0.5rem;
}

.formula-item {
  display: grid;
  gap: 0.1rem;
  padding: 0.6rem 0.9rem;
  border-left: 3px solid var(--accent, var(--brand));
  border-radius: 0 8px 8px 0;
  background: var(--surface-soft);
}

.formula-note {
  color: var(--muted);
  font-size: 0.76rem;
  line-height: 1.5;
}

.key-list {
  display: grid;
  gap: 0.35rem;
  padding-left: 1.1rem;
  list-style: disc;
}

.key-list li {
  color: var(--text-soft);
  font-size: 0.88rem;
}

.key-list li::marker {
  color: var(--accent, var(--brand));
}

.example-list {
  display: grid;
  gap: 0.5rem;
}

.example {
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface-soft);
}

.example__summary {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.55rem 0.85rem;
  cursor: pointer;
  list-style: none;
}

.example__summary::-webkit-details-marker {
  display: none;
}

.example__summary::after {
  content: '▾';
  margin-left: auto;
  color: var(--muted);
  font-size: 0.72rem;
  transition: transform 0.18s ease;
}

.example[open] .example__summary::after {
  transform: rotate(180deg);
}

.example__summary:focus-visible {
  outline: 2px solid var(--accent, var(--brand));
  outline-offset: -2px;
  border-radius: 8px;
}

.example__no {
  color: var(--accent, var(--brand));
  font-size: 0.82rem;
  font-weight: 600;
}

.example__difficulty {
  display: inline-flex;
  gap: 3px;
}

.example__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--border);
}

.example__dot.is-on {
  background: var(--accent, var(--brand));
}

.example__body {
  display: grid;
  gap: 0.45rem;
  margin-top: 0.1rem;
  padding: 0.6rem 0.85rem 0.75rem;
  border-top: 1px dashed var(--border);
}

.example__question {
  color: var(--text);
  font-size: 0.9rem;
  line-height: 1.65;
  white-space: pre-line;
}

.example__line {
  color: var(--text-soft);
  font-size: 0.85rem;
  line-height: 1.65;
  white-space: pre-line;
}

.example__tag {
  margin-right: 0.4rem;
  padding: 0.05rem 0.4rem;
  border-radius: 4px;
  background: color-mix(in srgb, var(--accent, var(--brand)) 14%, transparent);
  color: var(--accent, var(--brand));
  font-size: 0.72rem;
  font-weight: 600;
}
</style>
