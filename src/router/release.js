/**
 * 商品发布
 *
 * author: Storm
 * date: 2017/04/17
 */

export default {
  path: '/release',
  name: 'Release',
  component: resolve => {
    require(['@/view/release'], resolve);
  },
  children: [

    // 选择商品分类
    {
      path: 'selectGame',
      name: 'SelectGame',
      component: resolve => {
        require(['@/view/release/selectGame/index'], resolve);
      }
    },
    {
      path: 'selectClass',
      name: 'SelectClass',
      component: resolve => {
        require(['@/view/release/selectClass/index'], resolve);
      }
    },

    // 选择商品类型
    {
      path: 'selectType',
      name: 'SelectType',
      component: resolve => {
        require(['@/view/release/selectType/index'], resolve);
      }
    },

    // 选择客户端
    {
      path: 'selectClient',
      name: 'SelectClient',
      component: resolve => {
        require(['@/view/release/selectClient/index'], resolve);
      }
    },

    // 选择服务区
    {
      path: 'selectArea',
      name: 'SelectArea',
      component: resolve => {
        require(['@/view/release/selectArea/index'], resolve);
      }
    },

    // 选择服务器
    {
      path: 'selectServer',
      name: 'selectServer',
      component: resolve => {
        require(['@/view/release/selectServer/index'], resolve);
      }
    },

    // 填写商品描述
    {
      path: 'goodsInfo',
      name: 'goodsInfo',
      component: resolve => {
        require(['@/view/release/goodsInfo/index'], resolve);
      }
    }


  ]
}
