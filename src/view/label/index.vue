<!--
 - Label example
 -
 - author: Storm
 - date: 2017/04/10
 -->

<template>

  <div class="labelExample">

    <s-header title="Label"></s-header>

    <section>
      <h3>default - 默认</h3>
      <s-label>账号</s-label>
    </section>

    <section>
      <h3>type - 类型</h3>
      <s-label type="primary">primary</s-label>
      <s-label type="warning">warning</s-label>
      <s-label type="info">info</s-label>
    </section>

  </div>

</template>

<script>
  import Label from '../../components/label';
  export default {
    name: 'LabelExample',
    components: {
      sLabel: Label
    },
    props: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .labelExample {
    font-size: .24rem;
  }
</style>
