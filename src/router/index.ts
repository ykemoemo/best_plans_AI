import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
/*import HomeVue from '../views/HomeVue.vue'*/

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomeVue',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeVue.vue')
  },
  {
    path: '/WhatToDo',
    name: 'WhatToDo',
    component: () => import(/* webpackChunkName: "about" */ '../views/WhatToDo.vue')
  },
  {
    path: '/WhatToEat',
    name: 'WhatToEat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/WhatToEat.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
