import Vue from 'vue';
import Router from 'vue-router';
// import Example from './example';
import Release from './release';
import Goods from './goods';
import Personal from './personal';

Vue.use(Router);

export default new Router({

  // 开启 HTML5 History 模式
  // mode: 'history',

  // 路由变更之后的滚动行为
  scrollBehavior (to, form, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return {x: 0, y: 0}
  },

  routes: [

    {
      path: '/',
      name: 'App',
      component: resolve => {
        require(['@/view'], resolve);
      }
    },

    //Example,

    Release,

    Goods,

    Personal,

    {
      path:'*',
      name: 'Page404',
      component: resolve => {
        require(['@/view/404.vue'], resolve);
      }
    }

  ]
})
