import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../components/Posts.vue')
    },
    {
      path: '/user',
      name: 'user',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:() => import('../components/User.vue')
    },
    {
      path: '/post/:id',
      name: 'post',
      component:() => import('../components/Post.vue'),
      props:true,
    },
  ]
})

export default router
