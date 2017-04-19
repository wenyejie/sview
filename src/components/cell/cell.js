/**
 * Cell
 *
 * author: Storm
 * date: 2017/04/17
 */
export default {
  name: 'Cell',
  render (h) {
    let array =  [
      h(
        'div',
        {
          attrs: {
            'class': 's-cell-left'
          }
        },
        this.$slots.default
      )
    ];

    if (this.hasRight) {
      array.push(h(
        'div',
        {
          attrs: {
            'class': 's-cell-right'
          },

        },
        this.$slots.right
      ));
    }

    return h(
      this.tag,
      {
        'class': this.classes,
        'style': this.styles,
        props: {
          'to': this.to
        }
      },
      array
    );
  },
  props: {
    label: String,
    tag: {
      type: String,
      default: 'div'
    },
    to: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      validator (val) {
        return ['lg', 'sm'].includes(val)
      }
    },
    padding: [Number, String],
  },
  data () {
    return {
      hasRight: null
    }
  },
  computed: {
    classes () {
      return [
        's-cell',
        {
          [`s-cell-${this.size}`]: !!this.size,
          [`s-cell-noPadding`]: !!this.padding
        }
      ];
    },
    styles () {
      let styles = {};
      styles.paddingLeft = this.padding + (/^\d+$/.test(this.gutter) ? 'px' : '');
      styles.paddingRight = styles.paddingLeft;
      return styles;
    }
  },
  mounted () {
    this.hasRight = !! this.$slots.right;
  }
}
