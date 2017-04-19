<!--
 - author: Storm
 - date: 2017/03/31
 -->

<template>
  <div class="s-col" :class="classes" :style="styles"><slot></slot></div>
</template>

<script>
  export default {
    name: 'Col',
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
      lg: {
        type: [Number, String]
      },
      md: {
        type: [Number, String]
      },
      sm: {
        type: [Number, String]
      },
      xs: {
        type: [Number, String]
      },
      align: {
        type: String
      }
    },
    data () {
      return {}
    },
    computed: {
      gutter() {
        return this.$parent.gutter;
      },
      classes () {
        return {
          [`s-col-${this.span}`]: !!this.span,
          [`s-col-offset-${this.offset}`]: !!this.offset,
          [`s-col-lg-${this.lg}`]: !!this.lg,
          [`s-col-md-${this.md}`]: !!this.md,
          [`s-col-sm-${this.sm}`]: !!this.sm,
          [`s-col-xs-${this.xs}`]: !!this.xs,
          [`s-col-align-${this.align}`]: !!this.align,
        }
      },
      styles () {
        let ret = {};
        if(this.gutter) {
          ret.paddingLeft = this.gutter + (/^\d+$/.test(this.gutter) ? 'px' : '');
          ret.paddingRight = ret.paddingLeft;
        }
        return ret;
      },
    },
    mounted () {

    }
  }
</script>
