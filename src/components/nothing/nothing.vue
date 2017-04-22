<!--
 - nothing
 -
 - author: Storm
 - date: 2017/04/22
 -->

<template>
  <figure class="s-nothing">
    <img class="s-nothing-img" src="../../assets/no-goods.png" alt="no goods">
    <figcaption class="s-nothing-title">{{title}}</figcaption>
    <p class="s-nothing-subtitle" v-if="subtitle">{{subtitle}}</p>
    <slot></slot>
  </figure>
</template>

<script>
  export default {
    name: 'nothing',
    props: {
      status: {
        type: String,
        validator (val) {
          return ['search', 'network', 'goods'].includes(val);
        }
      },
      title: String,
      subtitle: String
    },
    data () {
      return {
        src: ''
      }
    },
    methods: {},
    created () {
      this.src = `no-${this.status}.png`;
    }
  }
</script>
