<!--
 - 表单控件
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>
  <s-cell
    class="s-form-control"
    :class="classes"
    tag="label">
    <span class="s-form-label" v-html="label"></span>
    <template slot="right"><slot></slot></template>
  </s-cell>
</template>

<script>
  export default {
    name: 'formControl',
    props: {
      label: [Number, String],
      required: Boolean,
      disabled: Boolean,
      readonly: Boolean
    },
    data () {
      return {
      }
    },
    computed: {
      classes () {
        return {
          [`s-form-required`]: !!this.required,
          [`s-form-disabled`]: !!this.disabled,
          [`s-form-readonly`]: !!this.readonly
        }
      }
    },
    methods: {
    }
  }
</script>
