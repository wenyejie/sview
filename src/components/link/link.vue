<!--
 - Link
 -
 - author: Storm
 - date: 2017/04/17
 -->

<template>
  <s-cell
    class="s-link"
    tag="router-link"
    :to="to"
    :replace="replace"
  ><slot></slot><span slot="right"><s-icon type="right" class="s-link-icon"></s-icon></span>
  </s-cell>
</template>

<script>
  import Cell from '../cell';
  export default {
    name: 'Link',
    components: {
      sCell: Cell
    },
    props: {
      to: {
        type: String,
        default: ''
      },
      replace: Boolean
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>
