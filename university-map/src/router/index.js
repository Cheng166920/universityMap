import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/MapView.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/ListView.vue'),
    },
    {
          path:"/DisciplineTab",
          name:"DisciplineTab",
          component: () => import('../components/list/DisciplineTab.vue')        
    },
    {
          path:"/UniversityTab",
          name:"UniversityTab",
          component: () => import('../components/list/UniversityTab.vue')
    },
    {
          path:"/AreaTab",
          name:"AreaTab",
          component: () => import('../components/list/AreaTab.vue'),
    },
    {
      path:"/Areatouniversity/:provinces",
      name:"Areatouniversity",
      component: () => import('../components/list/Areatouniversity.vue')
    },
    {
      path:"/Disciplinetosubject/:discipline_name",
      name:"Disciplinetosubject",
      component: () => import('../components/list/Disciplinetosubject.vue')
    }
  ]
})

export default router