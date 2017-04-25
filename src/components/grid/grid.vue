<!--
 - grid
 -
 - author: Storm
 - date: 2017/04/25
 -->

<template>
  <ul class="s-grid" :class="classes"><solt></solt></ul>
</template>

<script>
  export default {
    name: 'grid',
    props: {
      col: {
        type: [Number, String],
        default: 3
      }
    },
    computed: {
      classes () {
        return {
          [`s-grid-${this.col}`]: !!this.col
        }
      }
    },
    data () {
      return {}
    }
  }
</script>
