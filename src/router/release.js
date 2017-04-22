/**
 * 商品发布
 *
 * author: Storm
 * date: 2017/04/17
 */

export default {
  path: '/release',
  component: {
    template: '<router-view></router-view>',
    name: 'Release'
  },
  children: [

    // 全部商品
    {
      path: '',
      name: 'indexRelease',
      component: resolve => {
        require(['@/view/release'], resolve);
      }
    },

    // 修改商品信息
    {
      path: 'goodsModify',
      name: 'goodsModifyRelease',
      component: resolve => {
        require(['@/view/release/goodsModify'], resolve);
      }
    },

    // 商品分类详情
    {
      path: 'goodsClass',
      name: 'goodsClassRelease',
      component: resolve => {
        require(['@/view/release/goodsClass'], resolve);
      }
    },

    // 选择商品分类
    {
      path: 'selectGame',
      name: 'selectGameRelease',
      component: resolve => {
        require(['@/view/release/selectGame/index.vue'], resolve);
      }
    },
    {
      path: 'selectClass',
      name: 'selectClassRelease',
      component: resolve => {
        require(['@/view/release/selectClass'], resolve);
      }
    },

    // 选择商品类型
    {
      path: 'selectType',
      name: 'selectTypeRelease',
      component: resolve => {
        require(['@/view/release/selectType'], resolve);
      }
    },

    // 选择客户端
    {
      path: 'selectClient',
      name: 'selectClientRelease',
      component: resolve => {
        require(['@/view/release/selectClient'], resolve);
      }
    },

    // 选择服务区
    {
      path: 'selectArea',
      name: 'selectAreaRelease',
      component: resolve => {
        require(['@/view/release/selectArea'], resolve);
      }
    },

    // 选择服务器
    {
      path: 'selectServer',
      name: 'selectServerRelease',
      component: resolve => {
        require(['@/view/release/selectServer'], resolve);
      }
    },

    // 填写商品描述
    {
      path: 'goodsInfo',
      name: 'goodsInfoRelease',
      component: resolve => {
        require(['@/view/release/goodsInfo'], resolve);
      }
    },

    // 填写寄售账号信息
    {
      path: 'accountInfo',
      name: 'accountInfoRelease',
      component: resolve => {
        require(['@/view/release/accountInfo'], resolve);
      }
    },

    // 发布成功
    {
      path: 'success',
      name: 'successRelease',
      component: resolve => {
        require(['@/view/release/success'], resolve);
      }
    },

    // 选择账号类型
    {
      path: 'selectAccount',
      name: 'selectAccountRelease',
      component: resolve => {
        require(['@/view/release/selectAccount'], resolve);
      }
    }


  ]
}
