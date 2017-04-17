/**
 * example
 *
 * author: Storm
 * date: 2017/04/17
 */

export default {

  path: '/example',
  name: 'Example',
  component: {
    template: '<router-view></router-view>'
  },
  children: [
    {
      path: '',
      name: 'example',
      component: resolve => {
        require(['@/view/example'], resolve);
      }
    },
    {
      path: 'radio',
      name: 'RadioExample',
      component: resolve => {
        require(['@/view/example/radio'], resolve);
      }
    },

    {
      path: 'breadcrumb',
      name: 'BreadcrumbExample',
      component: resolve => {
        require(['@/view/example/breadcrumb'], resolve);
      }
    },

    {
      path: 'checkbox',
      name: 'CheckboxExample',
      component: resolve => {
        require(['@/view/example/checkbox'], resolve);
      }
    },

    {
      path: 'icon',
      name: 'IconExample',
      component: resolve => {
        require(['@/view/example/icon'], resolve);
      }
    },

    {
      path: 'button',
      name: 'ButtonExample',
      component: resolve => {
        require(['@/view/example/button'], resolve);
      }
    },

    {
      path: 'dialog',
      name: 'DialogExample',
      component: resolve => {
        require(['@/view/example/dialog'], resolve);
      }
    },

    {
      path: 'table',
      name: 'TableExample',
      component: resolve => {
        require(['@/view/example/table'], resolve);
      }
    },

    {
      path: 'row',
      name: 'RowExample',
      component: resolve => {
        require(['@/view/example/row'], resolve);
      }
    },

    {
      path: 'col',
      name: 'ColExample',
      component: resolve => {
        require(['@/view/example/col'], resolve);
      }
    },

    {
      path: 'switch',
      name: 'SwitchExample',
      component: resolve => {
        require(['@/view/example/switch'], resolve);
      }
    },

    {
      path: 'tool',
      name: 'Tool',
      component: resolve => {
        require(['@/view/example/tool'], resolve);
      }
    },

    {
      path: 'message',
      name: 'MessageExample',
      component: resolve => {
        require(['@/view/example/message'], resolve);
      }
    },

    {
      path: 'label',
      name: 'LabelExample',
      component: resolve => {
        require(['@/view/example/label'], resolve);
      }
    },

    {
      path: 'flag',
      name: 'FlagExample',
      component: resolve => {
        require(['@/view/example/flag'], resolve);
      }
    },

    {
      path: 'popup',
      name: 'PopupExample',
      component: resolve => {
        require(['@/view/example/popup'], resolve);
      }
    },

    {
      path: 'tabs',
      name: 'TabsExample',
      component: resolve => {
        require(['@/view/example/tabs'], resolve);
      }
    },

    {
      path: 'input',
      name: 'InputExample',
      component: resolve => {
        require(['@/view/example/input'], resolve);
      }
    },

    {
      path: 'search',
      name: 'SearchExample',
      component: resolve => {
        require(['@/view/example/search'], resolve);
      }
    },

    {
      path: 'cell',
      name: 'CellExample',
      component: resolve => {
        require(['@/view/example/cell'], resolve);
      }
    },

    {
      path: 'link',
      name: 'LinkExample',
      component: resolve => {
        require(['@/view/example/link'], resolve);
      }
    }
  ]
}

