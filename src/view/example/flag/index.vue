<!--
 - FlagExample
 -
 - author: Storm
 - date: 2017/04/10
 -->

<template>
  <div class="FlagExample">
    <s-header>Flag</s-header>
    <div class="demo">
      <s-flag-group>
        <s-flag>热门商品</s-flag>
        <s-flag type="warning"><span>9.9</span>折</s-flag>
        <s-flag type="info">闪电发货</s-flag>
      </s-flag-group>
    </div>
  </div>
</template>

<script>
  import FlagGroup from '@/components/flagGroup';
  import Flag from '@/components/flag';
  export default {
    name: 'FlagExample',
    components: {
      sFlagGroup: FlagGroup,
      sFlag: Flag
    },
    props: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .demo {
    position: relative;
  }
</style>
