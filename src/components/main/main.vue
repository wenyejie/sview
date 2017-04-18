<!--
 - Main
 -
 - author: Storm
 - date: 2017/04/17
 -->

<template>
  <div class="s-main" :class="classes"><slot></slot></div>
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
      }
    },
    methods: {}
  }
</script>
