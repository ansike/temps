import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/login'
import Intex from '@/components/index'
import Village from '@/components/choseVillage/Village'
import Dk from '@/components/dkSearch/dksearch'
import DkHistory from '@/components/dkSearch/DkHistory/DkHistory'
import Dkmessage from '@/components/dkSearch/dkmessage/dkmessage'
import DETAIL from '@/components/details/details'
import ADDPEOPLE from '@/components/addpeople/addpeople'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Intex
    },
    {
      path: '/Village',
      name: 'Village',
      component: Village
    },
    {
      path: '/Dk',
      name: 'Dk',
      component: Dk,
      children: [
        {
          path: '/',
          name: '/History',
          component: DkHistory
        },
        {
          path: '/dkmessage',
          name: '/dkmessage',
          component: Dkmessage
        }
      ]
    },
    {
      path: '/DETAIL',
      name: 'DETAIL',
      component: DETAIL
    },
    {
      path: '/ADDPEOPLE',
      name: 'ADDPEOPLE',
      component: ADDPEOPLE
    }
  ]
})
