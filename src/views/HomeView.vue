<script setup lang="ts">
import { computed, ref } from 'vue'
import ChapterCard from '../components/ChapterCard.vue'
import { chapterCount, chapters, knowledgePointCount } from '../data/chapters'
import type { Chapter } from '../types/physics'

const keyword = ref('')

function matches(chapter: Chapter, query: string): boolean {
  const haystack = [
    chapter.title,
    chapter.enTitle,
    chapter.description,
    ...chapter.points.flatMap((point) => [
      point.title,
      point.summary,
      ...point.keyPoints,
      ...(point.formulas?.map((formula) => formula.expression) ?? []),
    ]),
  ]
  return haystack.some((item) => item.toLowerCase().includes(query))
}

const visibleChapters = computed(() => {
  const query = keyword.value.trim().toLowerCase()
  return query ? chapters.filter((chapter) => matches(chapter, query)) : chapters
})

const stats = computed(() => [
  { label: '章节', value: chapterCount },
  { label: '知识点', value: knowledgePointCount },
  {
    label: '核心公式',
    value: chapters.reduce(
      (total, chapter) =>
        total + chapter.points.reduce((sum, point) => sum + (point.formulas?.length ?? 0), 0),
      0,
    ),
  },
])
</script>

<template>
  <div class="home">
    <section class="hero">
      <p class="hero__eyebrow">University Physics · 知识整理</p>
      <h1 class="hero__title">把大学物理的知识点<br />串成一张可检索的地图</h1>
      <p class="hero__desc">
        按章节整理力学、振动与波动、热学、电磁学、光学与近代物理的核心概念、公式与易错点，
        方便随时复习与查阅。
      </p>

      <dl class="hero__stats">
        <div v-for="stat in stats" :key="stat.label" class="hero__stat">
          <dd>{{ stat.value }}</dd>
          <dt>{{ stat.label }}</dt>
        </div>
      </dl>

      <label class="search">
        <span class="search__icon" aria-hidden="true">⌕</span>
        <input
          v-model="keyword"
          class="search__input"
          type="search"
          placeholder="搜索章节、知识点或公式，例如：动量、熵、偏振"
          aria-label="搜索知识点"
        />
        <button v-if="keyword" class="search__clear" type="button" @click="keyword = ''">
          清除
        </button>
      </label>
    </section>

    <section class="chapters">
      <header class="chapters__head">
        <h2>章节总览</h2>
        <span>共 {{ visibleChapters.length }} 章</span>
      </header>

      <div v-if="visibleChapters.length" class="chapters__grid">
        <ChapterCard v-for="chapter in visibleChapters" :key="chapter.id" :chapter="chapter" />
      </div>
      <p v-else class="chapters__empty">
        没有找到与“{{ keyword }}”相关的内容，试试「动量」「熵」「偏振」「相对论」。
      </p>
    </section>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
}

.hero {
  position: relative;
  padding: clamp(1.5rem, 4vw, 2.75rem);
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 22px;
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--brand) 10%, var(--surface)), var(--surface) 55%);
  box-shadow: var(--shadow);
}

.hero::after {
  position: absolute;
  top: -70px;
  right: -60px;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: radial-gradient(circle, color-mix(in srgb, var(--brand) 22%, transparent), transparent 70%);
  content: '';
}

.hero__eyebrow {
  color: var(--brand);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.hero__title {
  margin-top: 0.6rem;
  font-size: clamp(1.7rem, 4vw, 2.6rem);
  line-height: 1.3;
}

.hero__desc {
  max-width: 48rem;
  margin-top: 0.75rem;
  color: var(--text-soft);
  font-size: 0.95rem;
}

.hero__stats {
  display: flex;
  flex-wrap: wrap;
  gap: 1.75rem;
  margin: 1.35rem 0 0;
}

.hero__stat dd {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.hero__stat dt {
  color: var(--muted);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
}

.search {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 34rem;
  margin-top: 1.5rem;
  padding: 0.45rem 0.6rem 0.45rem 0.85rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  box-shadow: 0 6px 20px -16px rgb(15 23 42 / 0.5);
}

.search:focus-within {
  border-color: var(--brand);
}

.search__icon {
  color: var(--muted);
  font-size: 1.1rem;
  line-height: 1;
}

.search__input {
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  color: var(--text);
  font-family: inherit;
  font-size: 0.9rem;
  outline: none;
}

.search__clear {
  flex: none;
  padding: 0.2rem 0.6rem;
  border: none;
  border-radius: 999px;
  background: var(--surface-soft);
  color: var(--muted);
  font-family: inherit;
  font-size: 0.76rem;
  cursor: pointer;
}

.search__clear:hover {
  color: var(--text);
}

.chapters__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 0.9rem;
}

.chapters__head h2 {
  font-size: 1.15rem;
}

.chapters__head span {
  color: var(--muted);
  font-size: 0.8rem;
}

.chapters__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}

.chapters__empty {
  padding: 2rem 1.25rem;
  border: 1px dashed var(--border);
  border-radius: var(--radius);
  color: var(--muted);
  font-size: 0.9rem;
  text-align: center;
}
</style>
