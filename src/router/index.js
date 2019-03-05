import Vue from 'vue'
import Router from 'vue-router'
import Control from 'components/control/control'
import Redeem from 'components/redeem/redeem'
import Site from 'components/site/site'
<<<<<<< HEAD
import BillData from 'components/data/data'
import BillFail from 'components/fail/fail'
import SignIn from 'components/signin/signin'
=======
import Policy from 'components/policy/policy'
>>>>>>> dev

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/signin'
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
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
