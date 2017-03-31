<!--
 - author: Storm
 - date: 2017/03/31
 -->

<template>
  <div class="ColExample">
    <s-row :gutter="10">
      <s-col :span="6" class="ColExample-col">DMEO</s-col>
      <s-col :span="6" class="ColExample-col">DMEO</s-col>
      <s-col :span="6" :offset="6" class="ColExample-col">DMEO</s-col>
    </s-row>
  </div>
</template>

<script>
  export default {
    name: 'ColExample',
    props: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .ColExample-col {
    min-height: 36px;
    line-height: 36px;
    text-align: center;
  }
  .ColExample-col:nth-child(odd) {
    background-color: #d3dce6;
  }
  .ColExample-col:nth-child(even) {
    background-color: #e5e9f2;
  }
</style>
