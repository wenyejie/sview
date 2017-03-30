<!--
 - author: Storm
 - date: 2017/03/29
 -->

<template>
  <div class="s-table">
    <table>
      <thead>
      <tr>
        <th v-for="item in options" :title="item.title">{{item.label}}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in data">
        <td v-for="(opt, key) in options">{{item[key]}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Table',
    props: {
      options: {
        type: Object,
      },
      data: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
      }
    },
    methods: {
    },
    mounted () {
    }
  }
</script>
