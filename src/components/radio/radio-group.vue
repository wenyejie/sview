<!--
 - author: Storm
 - date: 2017/03/28
 -->

<template>
  <div class="s-radio-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'RadioGroup',
    props: {
      value: {},
      size: String,
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
</style>
