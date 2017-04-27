/**
 * user
 * 登录注册相关模块
 *
 * author: Storm
 * date: 2017/04/27
 */

export default {
  path: '/user',
  component: {
    template: '<router-view></router-view>',
    name: 'user'
  },
  children: [

    // 登录
    {
      path: 'login',
      component: resolve => {
        require(['@/view/user/login'], resolve);
      }
    },

    /*// 注册
    {
      path: 'register',
      component: resolve => {
        require(['@/view/user/register'], resolve);
      }
    },*/


  ]
}
