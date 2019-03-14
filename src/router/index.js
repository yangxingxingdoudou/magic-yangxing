import Vue from 'vue'
import Router from 'vue-router'
import MagicTask from '@/pages/task/MagicTask'
import MagicGai from '@/pages/task/MagicGai'
import MagicMyTask from '@/pages/task/MagicMyTask'
import MagicCheckTask from '@/pages/task/MagicCheckTask'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MagicTask',
      redirect:'MagicTask'
    },
    {
      path: '/MagicTask',
      name: 'MagicTask',
      component:MagicTask
    },
    {
      path: '/MagicGai',
      name: 'MagicGai',
      component: MagicGai
    },
    {
      path: '/MagicMyTask',
      name: 'MagicMyTask',
      component: MagicMyTask
    },
    {
      path: '/MagicCheckTask',
      name: 'MagicCheckTask',
      component: MagicCheckTask
    }
  ]
})
