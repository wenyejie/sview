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
        }
      },
      styles () {
        let ret = {};
        if(this.gutter) {
          ret.paddingLeft = this.gutter + (typeof this.gutter === 'string' ? '' : 'px');
          ret.paddingRight = ret.paddingLeft;
        }
        console.log(ret);
        return ret;
      },
    },
    mounted () {

    }
  }
</script>

<style scoped>
</style>
