<!--
 - Label example
 -
 - author: Storm
 - date: 2017/04/10
 -->

<template>

  <div class="labelExample">

    <s-header>Label</s-header>

    <section>
      <h3>default - 默认</h3>
      <s-label>账号</s-label>
    </section>

    <section>
      <h3>type - 类型</h3>
      <s-label type="primary">账号</s-label>
      <s-label type="warning">游戏币</s-label>
      <s-label type="info">装备</s-label>
      <s-label type="android">安卓</s-label>
      <s-label type="ios">ios</s-label>
      <s-label type="jailbreak">苹果越狱</s-label>
      <s-label type="outline">账号</s-label>
    </section>

  </div>

</template>

<script>
  import Label from '@/components/label';
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
