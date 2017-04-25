/**
 * 商品信息
 *
 * author: Storm
 * date: 2017/04/22
 */

export default {
  path: '/personal',
  component: {
    template: '<router-view></router-view>',
    name: 'personal'
  },
  children: [

    // 个人中心
    {
      path: '',
      name: 'indexPersonal',
      component: resolve => {
        require(['@/view/personal'], resolve);
      }
    }/*,

    // 商品详情
    {
      path: 'detail',
      name: 'detailGoods',
      component: resolve => {
        require(['@/view/personal/detail'], resolve);
      }
    },*/


  ]
}
