/**
 * 商品发布
 *
 * author: Storm
 * date: 2017/04/17
 */

export default {
  path: '/release',
  name: 'Release',
  component: {
    template: '<router-view></router-view>'
  },
  children: [
    {
      path: '',
      name: 'ReleaseHome',
      component: resolve => {
        require(['@/view/release'], resolve);
      }
    },
    {
      path: 'selectGame',
      name: 'ReleaseSelectGame',
      component: resolve => {
        require(['@/view/release/selectGame/index'], resolve);
      }
    }
  ]
}
