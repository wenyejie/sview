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
    name: 'formSelect',
    props: {
      label: [Number, String],
      isRequired: Boolean,
      isDisabled: Boolean,
      isReadonly: Boolean
    },
    data () {
      return {
        required: false,
        disabled: false
      }
    },
    computed: {
      classes () {
        return {
          [`s-form-required`]: !!this.isRequired,
          [`s-form-disabled`]: !!this.isDisabled,
          [`s-form-readonly`]: !!this.isReadonly
        }
      }
    },
    methods: {
    }
  }
</script>
