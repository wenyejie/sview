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
    {
      path: 'selectType',
      name: 'SelectType',
      component: resolve => {
        require(['@/view/release/selectType/index'], resolve);
      }
    },
    {
      path: 'selectClient',
      name: 'SelectClient',
      component: resolve => {
        require(['@/view/release/selectClient/index'], resolve);
      }
    },
    {
      path: 'selectArea',
      name: 'SelectArea',
      component: resolve => {
        require(['@/view/release/selectArea/index'], resolve);
      }
    },
    {
      path: 'selectServer',
      name: 'selectServer',
      component: resolve => {
        require(['@/view/release/selectServer/index'], resolve);
      }
    }
  ]
}
