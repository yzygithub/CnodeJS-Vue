import Vue from 'vue'
import Router from 'vue-router'

import articleComp from '@/components/articleComp'
import userComp from '@/components/userComp'
import mainSec from '@/components/mainSec'
import sideSec from '@/components/sideSec'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'rootPath',
      components: {//s!
        main:mainSec,
      }
    },{
      path: '/topic/:id',
      name: 'ArticleRoute',
      components: {
        main: articleComp,
        side: sideSec,
      }
    },{
      path: '/user/:name',
      name: 'UserRoute',
      components: {
        main: userComp,
        side: sideSec,
      }
    },{
      path: '/user/:name',
      redirect: '/user:name',
    },
  ]
})
