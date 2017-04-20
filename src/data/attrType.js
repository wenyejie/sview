/**
 * 属性类型
 *
 * author: Storm
 * date: 2017/04/19
 */

export default {
  list: [
    {
      id: 1,
      name: '游戏账号'
    },
    {
      id: 2,
      name: '游戏密码'
    },
    {
      id: 3,
      name: '密保手机'
    },
    {
      id: 4,
      name: '密保问题'
    },
    {
      id: 5,
      name: '密保答案'
    },
    {
      id: 6,
      name: '密保邮箱'
    },
    {
      id: 7,
      name: '密保邮箱密码'
    },
    {
      id: 8,
      name: '账号支付密码'
    },
    {
      id: 9,
      name: '角色名称'
    },
    {
      id: 10,
      name: '二级密码'
    },
    {
      id: 11,
      name: '门派/职业/英雄'
    },
    {
      id: 12,
      name: '等级'
    },
    {
      id: 13,
      name: '装备'
    },
    {
      id: 14,
      name: '宠物'
    },
    {
      id: 15,
      name: '游戏币'
    },
    {
      id: 16,
      name: '道具'
    },
    {
      id: 17,
      name: '补充说明'
    },
    {
      id: 18,
      name: '联系手机'
    },
    {
      id: 20,
      name: '游戏币'
    },
    {
      id: 19,
      name: '其他'
    }
  ],

  /**
   * 根据所给的值，名称，返回所在属性的键值
   * @param value 值
   * @param name 名称
   * @param key 键值
   * @returns {*}
   */
  get (value, name, key) {
    return this.list.find(item => item[name] === value)[key];
  },

  getNameById (id) {

    return this.get(id, 'id', 'name');
  }
}
