<!--
 - 个人中心
 -
 - author: Storm
 - date: 2017/04/26
 -->

<template>

  <s-app class="personal">
    <s-header title="个人中心" type="transparent"></s-header>

    <s-main>

      <header class="personal-header">
      </header>

      <s-link to="/release">全部商品</s-link>

    </s-main>
  </s-app>

</template>

<script>
  import './index.scss';
  export default {
    name: 'personal',
    props: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>
