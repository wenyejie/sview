<!--
 - author: Storm
 - date: 2017/03/28
 -->

<template>
  <div class="s-breadcrumb">
    <ul class="s-breadcrumb-list">
      <li
        class="s-breadcrumb-item"
        v-for="(item, index) in list"
      >
        <template v-if="list.length > index + 1"><a :href="item.link">{{item.label}}</a></template>
        <template v-else><span>{{item.label}}</span></template>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    props: {
      list: Array
    },
    data () {
      return {
      }
    },
    methods: {},
    watch: {
      value (val) {
        this.list = val;
      }
    }
  }
</script>
