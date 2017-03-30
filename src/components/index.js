/**
 * author: Storm
 * date: 2017/03/28
 */

import Radio from './radio';
import RadioGroup from './radioGroup';
import Checkbox from './checkbox';
import CheckboxGroup from './checkGroup';
import Breadcrumb from './breadcrumb';
import Icon from './icon';
import Button from './button';
import Dialog from './dialog';
import Table from './table';

const sview = {
  Radio,
  RadioGroup,
  Breadcrumb,
  Checkbox,
  CheckboxGroup,
  Icon,
  sButton: Button,
  sDialog: Dialog,
  sTable: Table
};

const install = Vue => {
  Object.keys(sview).forEach(key => {
    Vue.component(key, sview[key]);
  });

  Vue.prototype.$Dialog = Dialog;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default Object.assign(sview, {install});
