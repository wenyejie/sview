<!--
 - footer
 - 居于底部，沉底的组件
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>
  <footer class="s-sedimentation">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'footer',
    props: {},
    data () {
      return {}
    },
    methods: {},
    mounted () {
      this.$store.commit('setting', {
        name: 'mainPaddingBottom',
        value: this.$el.clientHeight / window.rootFontSize + 'rem'
      });
    }
  }
</script>
