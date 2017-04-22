<!--
 - Cell Example
 -
 - author: Storm
 - date: 2017/04/16
 -->

<template>
  <div class="CellExample">
    <s-header title="Cell"></s-header>

    <section>
      <h3>default</h3>
      <s-cell tag="router-link" to="">账号</s-cell>
    </section>

    <section>
      <h3>size</h3>
      <s-cell size="lg">道具</s-cell>
      <s-cell size="md">道具</s-cell>
      <s-cell>道具</s-cell>
    </section>

    <section>
      <h3>right</h3>
      <s-cell>道具<span slot="right">1</span></s-cell>
    </section>

    <section>
      <h3>title</h3>
      <s-cell-intro>目前【热血传奇手机版】支持出售的商品类型如下：</s-cell-intro>
      <s-cell>道具<span slot="right">1</span></s-cell>
    </section>

    <section>
      <h3>title icon</h3>
      <s-cell-intro icon="warning">目前【热血传奇手机版】支持出售的商品类型如下：</s-cell-intro>
      <s-cell>道具<span slot="right">1</span></s-cell>
    </section>

    <section>
      <h3>title type</h3>
      <s-cell-intro type="primary" icon="warning">目前【热血传奇手机版】支持出售的商品类型如下：</s-cell-intro>
      <s-cell>道具<span slot="right">1</span></s-cell>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'CellExample',
    props: {
      size: {
        type: String,
        validator () {

        }
      }
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
