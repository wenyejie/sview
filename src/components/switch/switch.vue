<!--
 - author: Storm
 - date: 2017/04/01
 -->

<template>
  <label class="s-switch">
    <input type="checkbox" class="s-switch-input">
    <span class="s-switch-inner">
      <span class="s-switch-on">ON</span>
      <span class="s-switch-off">OFF</span>
    </span>
  </label>
</template>

<script>
  export default {
    name: 'Switch',
    props: {
      value: {
        type: Boolean
      },
      disabled: {
        type: Boolean
      }
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
</style>
