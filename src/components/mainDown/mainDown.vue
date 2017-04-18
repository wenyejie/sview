<!--
 - footer
 - 居于底部，沉底的组件
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>
  <footer class="s-main-down"><slot></slot></footer>
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
      console.log([this.$el]);
      this.$store.commit('setting', {
        name: 'mainDown',
        value: this.$el.clientHeight + 'px'
      });
    }
  }
</script>
