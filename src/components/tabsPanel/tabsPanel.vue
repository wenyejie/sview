<!--
 - TabsPanel
 -
 - author: Storm
 - date: 2017/04/10
 -->

<template>
  <div class="s-tabs-panel" :class="classes"><slot></slot></div>
</template>

<script>
  export default {
    name: 'TabsPanel',
    props: {
      label: {
        required: true,
        type: String
      }
    },
    data () {
      return {}
    },
    methods: {},
    computed: {
      classes () {
        return this.$parent.activeIndex === this._uid ? 'on' : '';
      }
    }
  }
</script>

<style scoped>
</style>
