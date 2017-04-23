/**
 * author: Storm
 * date: 2017/03/28
 */

import Radio from './radio';
import RadioGroup from './radioGroup';
import Checkbox from './checkbox';
import CheckboxGroup from './checkGroup';
import Icon from './icon';
import Button from './button';
import Dialog from './dialog';
import Row from './row';
import Col from './col';
import Switch from './switch';
import Message from './message';
import Header from './header';
import Cell from './cell';
import CellIntro from './cellIntro';
import Link from './link';
import Main from './main';
import Panel from './panel';
import App from './app';

const sview = {
  sRadio: Radio,
  sRadioGroup: RadioGroup,
  sCheckbox: Checkbox,
  sCheckboxGroup: CheckboxGroup,
  sIcon: Icon,
  sButton: Button,
  sDialog: Dialog,
  sRow: Row,
  sCol: Col,
  sSwitch: Switch,
  sMessage: Message,
  sHeader: Header,
  sCell: Cell,
  sCellIntro: CellIntro,
  sLink: Link,
  sMain: Main,
  sPanel: Panel,
  sApp: App
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
