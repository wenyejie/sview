<!--
 - TabsPanel
 -
 - author: Storm
 - date: 2017/04/10
 -->

<template>
  <transition name="s-tabs-panel">
    <div v-show="visible" class="s-tabs-panel" :class="classes"><slot></slot></div>
  </transition>
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
      return {
        visible: false
      }
    },
    methods: {},
    computed: {
      classes () {
        this.visible = this.$parent.activeIndex === this._uid;
        return this.visible ? 'on' : '';
      }
    },
    watch: {
      'this.$parent.activeIndex' () {
        this.visible = this.$parent.activeIndex === this._uid;
      }
    }
  }
</script>

<style scoped>
</style>
