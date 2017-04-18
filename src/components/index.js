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
import Row from './row';
import Col from './col';
import Switch from './switch';
import Message from './message';
import Header from './header';
import Cell from './cell';
import CellIntro from './cellIntro';
import Link from './link';
import Main from './main';

const sview = {
  sRadio: Radio,
  sRadioGroup: RadioGroup,
  sBreadcrumb: Breadcrumb,
  sCheckbox: Checkbox,
  sCheckboxGroup: CheckboxGroup,
  sIcon: Icon,
  sButton: Button,
  sDialog: Dialog,
  sTable: Table,
  sRow: Row,
  sCol: Col,
  sSwitch: Switch,
  sMessage: Message,
  sHeader: Header,
  sCell: Cell,
  sCellIntro: CellIntro,
  sLink: Link,
  sMain: Main
};

const install = Vue => {
  Object.keys(sview).forEach(key => {
    Vue.component(key, sview[key]);
  });

  Vue.prototype.$Dialog = Dialog;
  Vue.prototype.$Message = Message;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default Object.assign(sview, {install});
