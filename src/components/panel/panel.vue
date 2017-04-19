<!--
 - Panel
 -
 - author: Storm
 - date: 2017/04/19
 -->

<template>
  <section class="s-panel">
    <header class="s-panel-header" v-if="hasHeader">
      <slot name="header"><h4>{{title}}</h4></slot>
    </header>
    <div class="s-panel-body"><slot></slot></div>
    <footer class="s-panel-footer" v-if="hasFooter"><slot name="footer"></slot></footer>
  </section>
</template>

<script>
  export default {
    name: 'Panel',
    props: {
      title: String
    },
    data () {
      return {
        hasHeader: null,
        hasFooter: null
      }
    },
    methods: {},
    created () {
      this.hasHeader = !!this.title || !!this.$slots.header;
      this.hasFooter = !!this.$slots.footer;
    }
  }
</script>
