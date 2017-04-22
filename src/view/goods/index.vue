<!--
 - Title
 -
 - author: Storm
 - date: 2017/04/22
 -->

<template>

  <s-app>

    <s-header>游戏名称</s-header>

    <s-main>

      <section class="mt-20">

        <!--AUDITING(1, "审核中"),HAS_PUTAWAY(2, "已上架"),UNDER(3, "已下架"),-->
        <s-link to="release/goodsClass?status=1">审核中<span class="c-primary" slot="right">{{goods.auditing}}</span></s-link>
        <s-link to="release/goodsClass?status=2">已上架<span class="c-primary" slot="right">{{goods.putaway}}</span></s-link>
        <s-link to="release/goodsClass?status=3">已下架<span class="c-primary" slot="right">{{goods.under}}</span></s-link>
      </section>

    </s-main>

  </s-app>

</template>

<script>
  export default {
    name: 'index',
    props: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>
