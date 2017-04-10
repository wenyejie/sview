<!--
 - Label
 -
 - author: Storm
 - date: 2017/04/10
 -->

<template>
  <span
    class="s-label"
    :class="classes"
  >
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'Label',
    props: {
      type: {
        type: String,
        default: 'primary',
        validator (val) {
          return ['primary', 'warning', 'info'].includes(val);
        }
      }
    },
    data () {
      return {}
    },
    computed: {
      classes () {
        return {
          [`s-label-${this.type}`]: !!this.type
        };
      }
    },
    methods: {}
  }
</script>

<style scoped>
</style>
