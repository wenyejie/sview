/**
 * 商品信息
 *
 * author: Storm
 * date: 2017/04/22
 */

export default {
  path: '/goods',
  component: {
    template: '<router-view></router-view>',
    name: 'goods'
  },
  children: [

    // 全部商品
    {
      path: '',
      name: 'indexGoods',
      component: resolve => {
        require(['@/view/goods'], resolve);
      }
    },

    /*// 修改商品信息
    {
      path: 'goodsModify',
      name: 'goodsModifyRelease',
      component: resolve => {
        require(['@/view/release/goodsModify'], resolve);
      }
    },*/


  ]
}
