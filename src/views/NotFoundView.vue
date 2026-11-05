<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="not-found">
    <p class="not-found__code">404</p>
    <h1>页面走丢了</h1>
    <p class="not-found__desc">你访问的地址不存在，可能是链接有误或页面已移动。</p>
    <RouterLink class="not-found__link" to="/">返回知识总览</RouterLink>
  </div>
</template>

<style scoped>
.not-found {
  padding: 4rem 1rem;
  text-align: center;
}

.not-found__code {
  color: var(--brand);
  font-family: var(--font-math);
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.not-found h1 {
  margin-top: 0.25rem;
  font-size: 1.4rem;
}

.not-found__desc {
  margin-top: 0.5rem;
  color: var(--muted);
  font-size: 0.9rem;
}

.not-found__link {
  display: inline-block;
  margin-top: 1.2rem;
  padding: 0.45rem 1.15rem;
  border-radius: 999px;
  background: var(--brand);
  color: #fff;
  font-size: 0.86rem;
  text-decoration: none;
}
</style>
