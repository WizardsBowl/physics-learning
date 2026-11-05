<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { chapters, findChapter } from './data/chapters'

const route = useRoute()

/** 当前章节：只有章节页才在导航栏显示「本页目录」按钮 */
const activeChapter = computed(() =>
  findChapter(typeof route.params.id === 'string' ? route.params.id : ''),
)
const tocPoints = computed(() => activeChapter.value?.points ?? [])

const tocOpen = ref(false)
const tocMenu = ref<HTMLDivElement | null>(null)
const tocButton = ref<HTMLButtonElement | null>(null)

function closeToc() {
  tocOpen.value = false
}

function handleOutsidePointerDown(event: PointerEvent) {
  if (!tocMenu.value?.contains(event.target as Node)) closeToc()
}

function handleEscape(event: KeyboardEvent) {
  if (event.key !== 'Escape') return
  closeToc()
  tocButton.value?.focus()
}

watch(tocOpen, (open) => {
  if (open) {
    document.addEventListener('pointerdown', handleOutsidePointerDown)
    document.addEventListener('keydown', handleEscape)
    return
  }
  document.removeEventListener('pointerdown', handleOutsidePointerDown)
  document.removeEventListener('keydown', handleEscape)
})

// 切换章节或返回总览时收起下拉
watch(() => route.fullPath, closeToc)

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', handleOutsidePointerDown)
  document.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <div class="app-shell">
    <header class="app-header">
      <RouterLink class="brand" to="/">
        <span class="brand-mark" aria-hidden="true">Φ</span>
        <span class="brand-text">
          <strong>大学物理知识库</strong>
          <small>Physics Learning Notes</small>
        </span>
      </RouterLink>

      <div v-if="activeChapter" ref="tocMenu" class="toc-menu">
        <button
          ref="tocButton"
          type="button"
          class="toc-toggle"
          aria-controls="chapter-toc-panel"
          :aria-expanded="tocOpen"
          @click="tocOpen = !tocOpen"
        >
          本页目录
          <span class="toc-toggle__chevron" aria-hidden="true">▾</span>
        </button>

        <nav
          v-show="tocOpen"
          id="chapter-toc-panel"
          class="toc-panel"
          :aria-label="`${activeChapter.title} · 本页目录`"
        >
          <ul class="toc-panel__list">
            <li v-for="(point, index) in tocPoints" :key="point.id">
              <a class="toc-panel__link" :href="`#${point.id}`" @click="closeToc">
                <span class="toc-panel__no">{{ String(index + 1).padStart(2, '0') }}</span>
                {{ point.title }}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <nav class="app-nav" aria-label="章节导航">
        <RouterLink class="nav-link" to="/">总览</RouterLink>
        <RouterLink
          v-for="chapter in chapters"
          :key="chapter.id"
          class="nav-link"
          :to="{ name: 'chapter', params: { id: chapter.id } }"
        >
          {{ chapter.title }}
        </RouterLink>
      </nav>
    </header>

    <main class="app-main">
      <RouterView />
    </main>

    <footer class="app-footer">
      <p>Vue 3 · TypeScript · Vite ｜ 大学物理知识点持续整理中</p>
    </footer>
  </div>
</template>

<style scoped>
.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1.5rem;
  padding: 0.85rem clamp(1rem, 4vw, 3rem);
  border-bottom: 1px solid var(--border);
  background: color-mix(in srgb, var(--surface) 88%, transparent);
  backdrop-filter: blur(12px);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  color: inherit;
  text-decoration: none;
}

.brand-mark {
  display: grid;
  width: 2.4rem;
  height: 2.4rem;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.25;
}

.brand-text strong {
  font-size: 1rem;
  letter-spacing: 0.02em;
}

.brand-text small {
  color: var(--muted);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.app-nav {
  display: flex;
  gap: 0.35rem;
  margin-left: auto;
  padding-bottom: 0.15rem;
  overflow-x: auto;
  scrollbar-width: none;
}

.app-nav::-webkit-scrollbar {
  display: none;
}

.nav-link {
  flex: none;
  padding: 0.35rem 0.72rem;
  border-radius: 999px;
  color: var(--text-soft);
  font-size: 0.86rem;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.nav-link:hover {
  background: var(--surface-soft);
  color: var(--text);
}

.nav-link.router-link-exact-active {
  background: var(--brand);
  color: #fff;
}

/* ---------- 移动端「本页目录」：挂在导航栏上的下拉菜单（仅章节页渲染） ---------- */
.toc-menu {
  position: relative;
  display: none;
  margin-left: auto;
}

.toc-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.85rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface-soft);
  color: var(--text);
  font-size: 0.82rem;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.toc-toggle:hover,
.toc-toggle[aria-expanded='true'] {
  border-color: var(--brand);
  color: var(--brand);
}

.toc-toggle:focus-visible {
  outline: 2px solid var(--brand);
  outline-offset: 2px;
}

.toc-toggle__chevron {
  color: var(--muted);
  font-size: 0.68rem;
  line-height: 1;
  transition: transform 0.2s ease;
}

.toc-toggle[aria-expanded='true'] .toc-toggle__chevron {
  transform: rotate(180deg);
}

.toc-panel {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  z-index: 2;
  width: min(17rem, calc(100vw - 2rem));
  max-height: min(60vh, 22rem);
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 0.4rem;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface);
  box-shadow: 0 18px 40px rgb(15 23 42 / 16%);
}

.toc-panel__list {
  display: grid;
  gap: 0.1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.toc-panel__link {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 0.6rem;
  border-radius: 8px;
  color: var(--text-soft);
  font-size: 0.86rem;
  line-height: 1.4;
  text-decoration: none;
  transition: background-color 0.18s ease, color 0.18s ease;
}

.toc-panel__link:hover {
  background: var(--surface-soft);
  color: var(--brand);
}

.toc-panel__link:focus-visible {
  outline: 2px solid var(--brand);
  outline-offset: -2px;
}

.toc-panel__no {
  flex: none;
  color: var(--muted);
  font-family: var(--font-math);
  font-size: 0.76rem;
}

.app-main {
  flex: 1;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: clamp(1.5rem, 4vw, 3rem) clamp(1rem, 4vw, 2.5rem) 3rem;
}

.app-footer {
  border-top: 1px solid var(--border);
  padding: 1.4rem clamp(1rem, 4vw, 3rem);
  color: var(--muted);
  font-size: 0.82rem;
  text-align: center;
}

.app-footer p {
  margin: 0;
}

@media (max-width: 860px) {
  /* 与章节页目录的断点保持一致：窄屏改用导航栏下拉 */
  .toc-menu {
    display: block;
  }

  .app-nav {
    margin-left: 0;
  }
}

@media (max-width: 720px) {
  .app-nav {
    width: 100%;
    margin-left: 0;
  }
}
</style>
