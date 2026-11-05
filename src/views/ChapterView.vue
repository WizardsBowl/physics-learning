<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import KnowledgePointCard from '../components/KnowledgePointCard.vue'
import { findChapter, findChapterNeighbors } from '../data/chapters'

const route = useRoute()

const chapter = computed(() =>
  findChapter(typeof route.params.id === 'string' ? route.params.id : ''),
)

const neighbors = computed(() => findChapterNeighbors(chapter.value?.id ?? ''))

const accentStyle = computed(() => ({ '--accent': chapter.value?.accent ?? 'var(--brand)' }))
</script>

<template>
  <div v-if="chapter" class="chapter" :style="accentStyle">
    <header class="chapter__intro">
      <RouterLink class="chapter__back" to="/">← 返回总览</RouterLink>
      <p class="chapter__eyebrow">{{ chapter.enTitle }}</p>
      <h1 class="chapter__title">{{ chapter.title }}</h1>
      <p class="chapter__desc">{{ chapter.description }}</p>
      <p class="chapter__meta">{{ chapter.points.length }} 个知识点</p>
    </header>

    <div class="chapter__body">
      <aside class="chapter__toc" aria-label="本页目录">
        <p class="chapter__toc-title">本页目录</p>
        <a
          v-for="(point, index) in chapter.points"
          :key="point.id"
          class="chapter__toc-link"
          :href="`#${point.id}`"
        >
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          {{ point.title }}
        </a>
      </aside>

      <div class="chapter__points">
        <KnowledgePointCard
          v-for="(point, index) in chapter.points"
          :key="point.id"
          :point="point"
          :index="index"
        />
      </div>
    </div>

    <nav class="chapter__pager" aria-label="章节翻页">
      <RouterLink
        v-if="neighbors.prev"
        class="pager-link"
        :to="{ name: 'chapter', params: { id: neighbors.prev.id } }"
      >
        <small>上一章</small>
        <span>← {{ neighbors.prev.title }}</span>
      </RouterLink>
      <span v-else class="pager-link pager-link--disabled">
        <small>上一章</small>
        <span>已经是第一章</span>
      </span>

      <RouterLink
        v-if="neighbors.next"
        class="pager-link pager-link--right"
        :to="{ name: 'chapter', params: { id: neighbors.next.id } }"
      >
        <small>下一章</small>
        <span>{{ neighbors.next.title }} →</span>
      </RouterLink>
      <span v-else class="pager-link pager-link--right pager-link--disabled">
        <small>下一章</small>
        <span>已经是最后一章</span>
      </span>
    </nav>
  </div>

  <div v-else class="chapter-missing">
    <h1>未找到该章节</h1>
    <p>它可能已被重命名，或还没有开始整理。</p>
    <RouterLink class="chapter-missing__link" to="/">返回知识总览</RouterLink>
  </div>
</template>

<style scoped>
.chapter {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.chapter__intro {
  padding: 1.5rem 1.6rem;
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius);
  background: var(--surface);
  box-shadow: var(--shadow);
}

.chapter__back {
  color: var(--muted);
  font-size: 0.82rem;
  text-decoration: none;
}

.chapter__back:hover {
  color: var(--accent);
}

.chapter__eyebrow {
  margin-top: 0.75rem;
  color: var(--accent);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.chapter__title {
  margin-top: 0.25rem;
  font-size: clamp(1.5rem, 3vw, 2rem);
}

.chapter__desc {
  max-width: 46rem;
  margin-top: 0.5rem;
  color: var(--text-soft);
  font-size: 0.92rem;
}

.chapter__meta {
  margin-top: 0.6rem;
  color: var(--muted);
  font-size: 0.78rem;
}

.chapter__body {
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  gap: 1.5rem;
  align-items: start;
}

.chapter__toc {
  position: sticky;
  top: 5.5rem;
  display: grid;
  gap: 0.15rem;
  padding: 0.9rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
}

.chapter__toc-title {
  margin-bottom: 0.35rem;
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.chapter__toc-link {
  display: flex;
  gap: 0.45rem;
  padding: 0.3rem 0.4rem;
  border-radius: 8px;
  color: var(--text-soft);
  font-size: 0.84rem;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.chapter__toc-link span {
  color: var(--muted);
  font-family: var(--font-math);
  font-size: 0.76rem;
}

.chapter__toc-link:hover {
  background: var(--surface-soft);
  color: var(--accent);
}

.chapter__points {
  display: grid;
  gap: 1rem;
}

.chapter__pager {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: space-between;
}

.pager-link {
  display: flex;
  flex: 1 1 220px;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.85rem 1.1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  color: inherit;
  text-decoration: none;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.pager-link small {
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
}

.pager-link span {
  font-size: 0.9rem;
  font-weight: 600;
}

.pager-link:not(.pager-link--disabled):hover {
  transform: translateY(-2px);
  border-color: var(--accent);
}

.pager-link--right {
  align-items: flex-end;
  text-align: right;
}

.pager-link--disabled {
  color: var(--muted);
  opacity: 0.7;
}

.chapter-missing {
  padding: 3rem 1rem;
  text-align: center;
}

.chapter-missing h1 {
  font-size: 1.4rem;
}

.chapter-missing p {
  margin-top: 0.5rem;
  color: var(--muted);
  font-size: 0.9rem;
}

.chapter-missing__link {
  display: inline-block;
  margin-top: 1.1rem;
  padding: 0.45rem 1.1rem;
  border-radius: 999px;
  background: var(--brand);
  color: #fff;
  font-size: 0.86rem;
  text-decoration: none;
}

@media (max-width: 860px) {
  .chapter__body {
    grid-template-columns: minmax(0, 1fr);
  }

  .chapter__toc {
    position: static;
    display: flex;
    gap: 0.35rem;
    overflow-x: auto;
    padding: 0.6rem;
  }

  .chapter__toc-title {
    display: none;
  }

  .chapter__toc-link {
    flex: none;
    padding: 0.25rem 0.6rem;
    border: 1px solid var(--border);
    border-radius: 999px;
    white-space: nowrap;
  }
}
</style>
