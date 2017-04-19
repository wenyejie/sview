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
    template: '<router-view></router-view>',
    name: 'Release'
  },
  children: [

    // 选择商品分类
    {
      path: 'selectGame',
      name: 'SelectGame',
      component: resolve => {
        require(['@/view/release/selectGame/index.vue'], resolve);
      }
    },
    {
      path: 'selectClass',
      name: 'SelectClass',
      component: resolve => {
        require(['@/view/release/selectClass'], resolve);
      }
    },

    // 选择商品类型
    {
      path: 'selectType',
      name: 'SelectType',
      component: resolve => {
        require(['@/view/release/selectType'], resolve);
      }
    },

    // 选择客户端
    {
      path: 'selectClient',
      name: 'SelectClient',
      component: resolve => {
        require(['@/view/release/selectClient'], resolve);
      }
    },

    // 选择服务区
    {
      path: 'selectArea',
      name: 'SelectArea',
      component: resolve => {
        require(['@/view/release/selectArea'], resolve);
      }
    },

    // 选择服务器
    {
      path: 'selectServer',
      name: 'selectServer',
      component: resolve => {
        require(['@/view/release/selectServer'], resolve);
      }
    },

    // 填写商品描述
    {
      path: 'goodsInfo',
      name: 'goodsInfo',
      component: resolve => {
        require(['@/view/release/goodsInfo'], resolve);
      }
    },

    // 填写寄售账号信息
    {
      path: 'accountInfo',
      name: 'accountInfo',
      component: resolve => {
        require(['@/view/release/accountInfo'], resolve);
      }
    },

    // 发布成功
    {
      path: 'success',
      name: 'success',
      component: resolve => {
        require(['@/view/release/success'], resolve);
      }
    }


  ]
}
