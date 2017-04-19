<!--
 - author: Storm
 - date: 2017/04/01
 -->

<template>
  <div class="SwitchExample">
    <h1>Switch</h1>
    <section>
      <h3 class="example-title">default - 默认</h3>
      <s-switch v-model="demo" checked></s-switch>{{demo}}
    </section>
    <section>
      <h3 class="example-title">disabled - 禁用</h3>
      <s-switch disabled checked></s-switch>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'SwitchExample',
    props: {},
    data () {
      return {
        demo: false
      }
    },
    methods: {}
  }
</script>
