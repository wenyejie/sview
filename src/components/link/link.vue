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
    :size="size"
  ><slot></slot><template slot="right"><slot name="right"></slot><s-icon type="right" class="s-link-icon"></s-icon></template>
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
      replace: Boolean,
      size: {
        type: String,
        validator (val) {
          return ['lg', 'md', 'sm'].includes(val);
        }
      }
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>
