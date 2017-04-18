<!--
 - 选择游戏
 -
 - author: Storm
 - date: 2017/04/17
 -->

<template>
  <div class="selectGame" id="app">
    <s-header>选择游戏</s-header>

    <s-main bgc="white">
        <s-search></s-search>
    </s-main>
  </div>
</template>

<script>
  import Search from '@/components/search';
  export default {
    name: 'ReleaseSelectGame',
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
