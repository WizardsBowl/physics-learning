import { createRouter, createWebHistory } from 'vue-router'
import { chapters } from '../data/chapters'

const DEFAULT_TITLE = '大学物理知识库'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title: '知识总览' },
    },
    {
      path: '/chapter/:id',
      name: 'chapter',
      component: () => import('../views/ChapterView.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: { title: '页面不存在' },
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
})

router.afterEach((to) => {
  const routeId = typeof to.params.id === 'string' ? to.params.id : ''
  const chapter = chapters.find((item) => item.id === routeId)
  const pageTitle = chapter?.title ?? (to.meta.title as string | undefined)
  document.title = pageTitle ? `${pageTitle} · ${DEFAULT_TITLE}` : DEFAULT_TITLE
})

export default router
