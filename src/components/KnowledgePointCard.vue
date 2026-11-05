<script setup lang="ts">
import { computed } from 'vue'
import KaTeXFormula from './KatexFormula.vue'
import type { KnowledgePoint } from '../types/physics'

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
</style>
