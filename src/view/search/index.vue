<!--
 - SearchExample
 -
 - author: Storm
 - date: 2017/04/13
 -->

<template>
  <div class="SearchExample">
    <s-header title="Search">
      <s-search @on-submit="submit" placeholder="请输入游戏名称"></s-search>
    </s-header>
  </div>
</template>

<script>
  import Search from '../../components/search';
  export default {
    name: 'SearchExample',
    components: {
      sSearch: Search
    },
    props: {},
    data () {
      return {
        demo: ''
      }
    },
    methods: {
      submit () {
        alert('发送事件');
      }
    }
  }
</script>
