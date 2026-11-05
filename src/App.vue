<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { chapters } from './data/chapters'
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

@media (max-width: 720px) {
  .app-nav {
    width: 100%;
    margin-left: 0;
  }
}
</style>
