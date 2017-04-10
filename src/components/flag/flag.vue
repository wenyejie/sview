<!--
 - Flag
 -
 - author: Storm
 - date: 2017/04/10
 -->

<template>
  <div
    class="s-flag"
    :class="classes"
  ><slot></slot></div>
</template>

<script>
  export default {
    name: 'Flag',
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
          [`s-flag-${this.type}`]: !!this.type
        };
      }
    },
    methods: {}
  }
</script>
