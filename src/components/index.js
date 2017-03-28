/**
 * author: Storm
 * date: 2017/03/28
 */

import Radio from './radio';
import RadioGroup from './radioGroup';
import Checkbox from './checkbox';
import CheckboxGroup from './checkGroup';
import Breadcrumb from './breadcrumb';

const sview = {
  Radio,
  RadioGroup,
  Breadcrumb,
  Checkbox,
  CheckboxGroup
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
