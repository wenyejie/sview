<!--
 - author: Storm
 - date: 2017/03/28
 -->

<template>
  <div class="breadcrumbExample">
    <breadcrumb :list="list"></breadcrumb>
    <div><button type="button" @click="change">push</button></div>
  </div>
</template>

<script>
  export default {
    name: 'BreadcrumbExample',
    props: {},
    data () {
      return {
        list: [{
          label: '运营管理后台',
          link: '/'
        }, {
          label: '查看游戏',
          link: '/'
        }, {
          label: '添加游戏',
          link: '/'
        }]
      }
    },
    methods: {
      change () {
        this.list.push({
          label: '创建游戏',
          link: '/'
        });
      }
    }
  }
</script>

<style scoped>
</style>
