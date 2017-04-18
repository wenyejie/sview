<!--
 - 表单控件
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>
  <s-cell tag="label">
    <span v-if="required" class="text-primary">*&nbsp;</span><span><slot></slot></span>

  </s-cell>
</template>

<script>
  export default {
    name: 'formControl',
    props: {
      required: Boolean,
      name: String
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>
