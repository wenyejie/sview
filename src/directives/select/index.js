/**
 * form select
 *
 * author: Storm
 * date: 2017/04/20
 */
import $ from 'jquery/dist/jquery.slim.min';
export default {
  name: 'select',
  bind (el, binding, vnode) {
    const $el = $(el);
  },
  inserted (el, binding, vnode) {
    // el.style.display = 'none';

    console.log(el, binding, vnode);
    let $el = $(el);

    setTimeout(function () {
      $el.insertBefore('<div>ddd</div>');
    }, 100);

    //$el.insertBefore('<div>ddd</div>');
    /*let formSelect = document.createElement('div');
    el.parentElement.insertBefore(formSelect, el);*/
  }
}
