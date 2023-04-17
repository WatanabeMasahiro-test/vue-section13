import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UsersView from '@/views/UsersView.vue'

const routes = [
    {
      path: '/',
      name: 'homeView',
      component: HomeView
    },
    {
      path: '/users',
      name: 'usersView',
      component: UsersView
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router