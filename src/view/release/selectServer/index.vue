<!--
 - 选择服务器
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>
  <div id="app">
    <s-header>选择服务器</s-header>

    <s-main>

      <s-search placeholder="请输入游戏名称"></s-search>

      <section>
        <s-cell-intro>请选择商品所在服务器：</s-cell-intro>
        <s-link>智慧之泉</s-link>
        <s-link>背水一战</s-link>
      </section>

    </s-main>
  </div>
</template>

<script>
  import Search from '@/components/search'
  export default {
    name: 'selectServer',
    components: {
      sSearch: Search
    },
    props: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
</style>
