import { createRouter, createWebHistory } from 'vue-router'
import TopPage from '@/view/TopPage.vue'
import BookRegister from '@/view/BookRegister.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: TopPage,
    },
    {
      path: '/book-register',
      component: BookRegister,
    },
    {
      path: '/book-return',
      component: BookRegister,
    },
    {
      path: '/book-list',
      component: BookRegister,
    },
  ],
})

export default router