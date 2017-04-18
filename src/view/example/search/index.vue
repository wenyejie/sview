<!--
 - SearchExample
 -
 - author: Storm
 - date: 2017/04/13
 -->

<template>
  <div class="SearchExample">
    <s-search @on-submit="submit" type="primary" text="取消" placeholder="请输入游戏名称"></s-search>

    <s-search placeholder="请输入游戏名称" text="搜索" style="margin-top: .2rem"></s-search>
  </div>
</template>

<script>
  import Search from '@/components/search';
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
