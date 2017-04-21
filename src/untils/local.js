/**
 * LocalStorage
 *
 * author: Storm
 * date: 2017/04/21
 */


export default {
  /**
   * 获取本地存储的值
   * @param key
   */
  get (key) {
    let result = window.localStorage.getItem(key);
    try {
      result = JSON.parse(result);
    } catch (e) {
    }
    return result;
  },

  /**
   * 设置本地存储
   * @param key 键
   * @param value 值
   */
  set (key, value) {
    if (typeof value === 'object') value = JSON.stringify(value);
    window.localStorage.setItem(key, value);
  }
}
