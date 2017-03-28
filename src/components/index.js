/**
 * author: Storm
 * date: 2017/03/28
 */

import Radio from './radio';

const sview = {
  Radio: Radio.Radio,
  RadioGroup: Radio.RadioGroup
};

const install = Vue => {
  Object.keys(sview).forEach(key => {
    Vue.component(key, sview[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default Object.assign(sview, {install});
