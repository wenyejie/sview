<!--
 - author: Storm
 - date: 2017/03/31
 -->

<template>
  <div class="s-row" :style="styles" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Row',
    props: {
      gutter: {
        type: [Number, String],
        default: 10
      },
      align: {
        type: String,
        validator (val) {
          return ['top', 'bottom', 'center', 'stretch'].includes(val)
        }
      },
      justify: {
        type: String,
        validator (val) {
          return ['left', 'right', 'center', 'between', 'around'].includes(val)
        }
      }
    },
    data () {
      return {}
    },
    computed: {
      styles () {
        let ret = {};
        if(this.gutter) {
          ret.marginLeft = -this.gutter + (typeof this.gutter === 'string' ? '' : 'px');
          ret.marginRight = ret.marginLeft;
        }
        return ret;
      },
      classes () {
        return {
          [`s-row-justify-${this.justify}`]: !!this.justify,
          [`s-row-justify-${this.align}`]: !!this.align
        }
      }
    }
  }
</script>
