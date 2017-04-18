/**
 * Cell
 *
 * author: Storm
 * date: 2017/04/17
 */
export default {
  name: 'Cell',
  render (h) {
    return h(
      this.tag,
      {
        'class': this.classes,
        'style': this.styles,
        props: {
          'to': this.to
        }
      },
      [
        h(
          'div',
          {
            attrs: {
              'class': 's-cell-left'
            }
          },
          this.$slots.default
        ),
        h(
          'div',
          {
            attrs: {
              'class': 's-cell-right'
            }
          },
          this.$slots.right
        )
      ]
    )
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
    padding: [Number, String]
  },
  data () {
    return {}
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
  methods: {}
}
