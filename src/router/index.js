import Vue from 'vue';
import Router from 'vue-router';

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

    {
      path: '/radio',
      name: 'RadioExample',
      component: resolve => {
        require(['@/view/radio'], resolve);
      }
    },

    {
      path: '/breadcrumb',
      name: 'BreadcrumbExample',
      component: resolve => {
        require(['@/view/breadcrumb'], resolve);
      }
    },

    {
      path: '/checkbox',
      name: 'CheckboxExample',
      component: resolve => {
        require(['@/view/checkbox'], resolve);
      }
    },

    {
      path: '/icon',
      name: 'IconExample',
      component: resolve => {
        require(['@/view/icon'], resolve);
      }
    },

    {
      path: '/button',
      name: 'ButtonExample',
      component: resolve => {
        require(['@/view/button'], resolve);
      }
    },

    {
      path: '/dialog',
      name: 'DialogExample',
      component: resolve => {
        require(['@/view/dialog'], resolve);
      }
    },

    {
      path: '/table',
      name: 'TableExample',
      component: resolve => {
        require(['@/view/table'], resolve);
      }
    },

    {
      path: '/row',
      name: 'RowExample',
      component: resolve => {
        require(['@/view/row'], resolve);
      }
    },

    {
      path: '/col',
      name: 'ColExample',
      component: resolve => {
        require(['@/view/col'], resolve);
      }
    },

    {
      path: '/switch',
      name: 'SwitchExample',
      component: resolve => {
        require(['@/view/switch'], resolve);
      }
    },

    {
      path: '/tool',
      name: 'Tool',
      component: resolve => {
        require(['@/view/tool'], resolve);
      }
    },

    {
      path: '/message',
      name: 'MessageExample',
      component: resolve => {
        require(['@/view/message'], resolve);
      }
    },

    {
      path: '/label',
      name: 'LabelExample',
      component: resolve => {
        require(['@/view/label'], resolve);
      }
    },

    {
      path: '/flag',
      name: 'FlagExample',
      component: resolve => {
        require(['@/view/flag'], resolve);
      }
    },

    {
      path: '/popup',
      name: 'PopupExample',
      component: resolve => {
        require(['@/view/popup'], resolve);
      }
    },

    {
      path: '/tabs',
      name: 'TabsExample',
      component: resolve => {
        require(['@/view/tabs'], resolve);
      }
    },

    {
      path: '/input',
      name: 'InputExample',
      component: resolve => {
        require(['@/view/input'], resolve);
      }
    },

    {
      path: '/search',
      name: 'SearchExample',
      component: resolve => {
        require(['@/view/search'], resolve);
      }
    }

  ]
})
