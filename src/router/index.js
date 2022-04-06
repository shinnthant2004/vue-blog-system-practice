import CreateVue from '@/views/Create.vue'
import DetailVue from '@/views/Detail.vue'
import TagVue from '@/views/Tag.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeVue
  },
  {
    path: '/Detail',
    name: 'detail',
    component: DetailVue,
    props:true
  },
  {
    path:'/Create',
    name:'create',
    component:CreateVue
  },
  {
    path:'/tags/:tag',
    name:'tag',
    component:TagVue,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
