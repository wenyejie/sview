import Vue from 'vue';
import Router from 'vue-router';
import Example from './example';

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

    Example,

    {
      path:'*',
      name: 'error404',
      component: resolve => {
        require(['@/view/404.vue'], resolve);
      }
    }

  ]
})
