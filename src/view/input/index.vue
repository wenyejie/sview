<!--
 - Input Example
 -
 - author: Storm
 - date: 2017/04/12
 -->

<template>
  <div class="InputExample">
    <s-header title="Input"></s-header>

    <section>
      <h3>type - 类型</h3>
      <s-input type="text" block placeholder="text" v-model="demo"></s-input>
      <s-input type="password" block placeholder="password"></s-input>
      {{demo}}
    </section>

  </div>
</template>

<script>
  import Input from '../../components/input';
  export default {
    name: 'InputExample',
    components: {
      sInput: Input
    },
    props: {},
    data () {
      return {
        demo: ''
      }
    },
    methods: {}
  }
</script>
