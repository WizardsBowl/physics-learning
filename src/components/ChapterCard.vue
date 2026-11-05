<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { Chapter } from '../types/physics'

const props = defineProps<{ chapter: Chapter }>()

const accentStyle = computed(() => ({ '--accent': props.chapter.accent }))
</script>

<template>
  <RouterLink
    class="chapter-card"
    :style="accentStyle"
    :to="{ name: 'chapter', params: { id: chapter.id } }"
  >
    <span class="chapter-card__badge">{{ chapter.enTitle }}</span>
    <h3 class="chapter-card__title">{{ chapter.title }}</h3>
    <p class="chapter-card__desc">{{ chapter.description }}</p>

    <ul class="chapter-card__points">
      <li v-for="point in chapter.points.slice(0, 3)" :key="point.id">
        {{ point.title }}
      </li>
    </ul>

    <footer class="chapter-card__footer">
      <span>{{ chapter.points.length }} 个知识点</span>
      <span class="chapter-card__more">进入章节 →</span>
    </footer>
  </RouterLink>
</template>

<style scoped>
.chapter-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  padding: 1.35rem 1.4rem 1.15rem;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  box-shadow: var(--shadow);
  color: inherit;
  text-decoration: none;
  transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
}

.chapter-card::before {
  position: absolute;
  inset: 0 0 auto;
  height: 4px;
  background: var(--accent);
  content: '';
}

.chapter-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
  box-shadow: 0 24px 45px -26px rgb(15 23 42 / 0.5);
}

.chapter-card__badge {
  align-self: flex-start;
  padding: 0.1rem 0.55rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--accent) 14%, transparent);
  color: var(--accent);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.chapter-card__title {
  font-size: 1.25rem;
}

.chapter-card__desc {
  color: var(--text-soft);
  font-size: 0.9rem;
}

.chapter-card__points {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.15rem;
}

.chapter-card__points li {
  padding: 0.1rem 0.5rem;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--surface-soft);
  color: var(--muted);
  font-size: 0.76rem;
}

.chapter-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 0.75rem;
  color: var(--muted);
  font-size: 0.8rem;
}

.chapter-card__more {
  color: var(--accent);
  font-weight: 600;
}
</style>
