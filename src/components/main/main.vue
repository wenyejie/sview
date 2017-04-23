<!--
 - Main
 -
 - author: Storm
 - date: 2017/04/17
 -->

<template>
  <div class="s-main" :class="classes"><div class="s-main-content" :style="styles"><slot></slot></div></div>
</template>

<script>
  export default {
    name: 'Main',
    props: {
      bgc: {
        type: String
      }
    },
    data () {
      return {}
    },
    computed: {
      classes () {
        return {
          [`s-main-${this.bgc}`]: !!this.bgc
        }
      },
      bottom () {
        return this.$store.state.mainPaddingBottom;
      },
      styles () {
        let sty = {};
        sty.paddingBottom = this.bottom + (/^[\.|\d]+$/.test(this.bottom) ? 'rem' : '');
        return sty;
      }
    },
    methods: {},
    created () {
      this.$store.commit('setting', {
        name: 'mainPaddingBottom',
        value: '.24'
      });
    }
  }
</script>
