/**
 * author: Storm
 * date: 2017/04/29
 */

import Vue from 'vue';
import Message from './message.vue';
import props2string from '../../untils/props2string';

let vmInstance;

/**
 * 实例化一个Message对象，new一个Vue来存放对象
 * @param opts
 * @returns {*}
 */
const newInstance = opts => {
  let props = props2string(opts);

  const $warp = document.createElement('div');
  $warp.classList.add('s-message-wrap');
  $warp.innerHTML = `<s-message${props} v-model="visible" @ok="ok"></s-message>`;
  document.body.appendChild($warp);

  const vm = new Vue({
    el: $warp,
    data () {
      return Object.assign({}, opts, {
        visible: false
      })
    },
    methods: {
      ok () {
        this.onOk();
        this.remove();
      },
      remove () {
        setTimeout(this.destroy, 300);
      },
      destroy () {
        this.$destroy();
        document.body.removeChild(this.$el);
        this.onRemove();
      },
      onRemove () {
        vmInstance = null;
      },
      onOk () {
      }
    }
  }).$children[0];

  return {
    show (opts) {
      Object.keys(opts).forEach(key => {
        vm.$parent[key] = opts[key];
      });
      vm.visible = true;
    },
    remove () {
      vm.visible = false;
      vm.remove();
    }
  }
};

/**
 * 获取message实例
 * @param opts 选项
 * @returns {*|{show, remove}} 返回message实例
 */
const getInstance = (opts) => {
  vmInstance = vmInstance || newInstance(opts);
  return vmInstance;
};

/**
 * 初始化message实例
 * @param text 提示文本
 * @param opts 实例化选项
 * @returns {Promise} 返回一个Promise
 */
Message.init = (text = '', opts = {}) => {
  return new Promise((resolve) => {
    if (typeof text === 'string') {
      opts.body = text;
    } else if (typeof text === 'object') {
      opts = text;
    }
    const vm = getInstance(opts);
    opts.onOk = resolve;
    vm.show(opts);
  });
};

/**
 * 成功弹出框
 * @param text 弹出框文本
 * @param opts 弹出框选项
 * @returns {Promise} 返回一个Promise对象
 */
Message.success = (text = '', opts = {}) => {
  opts.type = 'success';
  opts.icon = 'roundcheckfill';
  return Message.init(text, opts);
};

/**
 * 警告弹出框
 * @param text 提示框文本
 * @param opts 提示框选项
 * @returns {Promise} 返回一个Promise对象
 */
Message.warning = (text = '', opts = {}) => {
  opts.type = 'warning';
  opts.icon = 'warnfill';
  return Message.init(text, opts);
};

/**
 * 默认提示提示框
 * @param text 提示框文本
 * @param opts 提示框选项
 * @returns {Promise}
 */
Message.default = (text = '', opts = {}) => {
  return Message.init(text, opts);
};

/**
 * 错误提示框
 * @param text 提示框文本
 * @param opts 提示框选项
 * @returns {Promise}
 */
Message.error = (text = '', opts = {}) => {
  opts.type = 'error';
  opts.icon = 'roundclosefill';
  return Message.init(text, opts);
};

/**
 * loading提示框
 * @param text 提示框文本
 * @param opts 提示框选项
 * @returns {Promise}
 */
Message.loading = (text = '', opts = {}) => {
  opts.type = 'loading';
  opts.icon = 'loading';
  return Message.init(text, opts);
};

/**
 * 移除弹出框
 */
Message.remove = () => {

  // 判断是否存在实例对象
  if (!vmInstance) return false;

  // 获取当前实例，执行remove方法
  const vmInstance = getInstance();
  vmInstance.remove();
};

export default Message;
