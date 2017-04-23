<!--
 - Title
 -
 - author: Storm
 - date: 2017/04/23
 -->

<template>
  <div class="s-suspension"><slot></slot></div>
</template>

<script>
  export default {
    name: 'suspension',
    data () {
      return {}
    },
    mounted () {
      this.$store.commit('setting', {
        name: 'mainPaddingBottom',
        value: this.$el.clientHeight / window.rootFontSize + 'rem'
      });
    }
  }
</script>
