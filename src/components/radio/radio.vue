<!--
 - author: Storm
 - date: 2017/03/28
 -->

<template>
  <label class="s-radio">
    <input
      class="s-radio-input"
      type="radio"
      :name="name"
      :disabled="disabled"
    >
    <span class="s-radio-inner"></span>
    <span class="s-radio-text"><slot>{{label}}</slot></span>
  </label>
</template>

<script>
  import '../../styles/radio.scss';
  const prefix = 's-radio';
  export default {
    name: 'name',
    props: {
      type: {
        type: String
      },
      size: {

      },
      label: {
        type: [String, Number]
      },
      name: String,
      disabled: Boolean
    },
    data () {
      return {
        prefix: prefix
      }
    },
    methods: {}
  }
</script>
