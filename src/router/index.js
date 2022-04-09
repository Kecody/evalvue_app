import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
//configuration de nos route
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
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
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:() => import('../components/Login.vue')
    },
    {
      path: '/doc',
      name: 'doc',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:() => import('../components/Doc.vue')
    },
    {
      path: '/iceberg',
      name: 'iceberg',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:() => import('../components/Iceberg.vue')
    },
    {
      path: '/post/:id',// parametre variable, la librairie va recupere le paramètre dans une variable du meme nom
      name: 'post',
      component:() => import('../components/Post.vue'),
      props:true,
    },
    {
      path: '/mep',// parametre variable, la librairie va recupere le paramètre dans une variable du meme nom
      name: 'mep',
      component:() => import('../components/Mep.vue'),
    },
  ]
})

export default router
