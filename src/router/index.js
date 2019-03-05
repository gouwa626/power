import Vue from 'vue'
import Router from 'vue-router'
import Control from 'components/control/control'
import Redeem from 'components/redeem/redeem'
import Site from 'components/site/site'
import Policy from 'components/policy/policy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/control'
    },
    {
      path: '/control',
      name: 'Control',
      component: Control
    },
    {
      path: '/redeem',
      name: 'Redeem',
      component: Redeem
    },
    {
      path: '/site',
      name: 'Site',
      component: Site
    },
    {
      path: '/policy',
      name: 'Policy',
      component: Policy
    }
  ]
})
