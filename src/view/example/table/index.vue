<!--
 - author: Storm
 - date: 2017/03/29
 -->

<template>
  <div class="TableExample">
    <h1>Table</h1>

    <section>
      <h3 class="example-title">default - 默认</h3>
      <s-table :data="data" :options="options"></s-table>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'TableExample',
    props: {},
    data () {
      return {
        options: {
          date: {
            label: '日期',
            title: '我是日期，我是日期'
          },
          orderNo: {
            label: '订单编号'
          },
          game: {
            label: '所属游戏'
          }
        },
        data: [{
          date: '2017-03-29',
          orderNo: '1234567890',
          game: '英雄之战'
        }]
      }
    },
    methods: {}
  }
</script>
