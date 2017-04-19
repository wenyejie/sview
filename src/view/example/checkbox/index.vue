<!--
 - author: Storm
 - date: 2017/03/28
 -->

<template>
  <div class="checkboxExample">

    <h1>Checkboxf</h1>

    <section>
      <h3 class="example-title">default - 默认</h3>
      <checkbox v-model="default001">DEMO</checkbox>

      <div>group: {{default001}}</div>
    </section>

    <section>
      <h3 class="example-title">group - 群组</h3>
      <checkbox-group v-model="group">
        <checkbox label="beijing" name="city">北京</checkbox>
        <checkbox label="shanghai" name="city">上海</checkbox>
        <checkbox label="guangzhou" name="city">广州</checkbox>
        <checkbox label="hangzhou" name="city">杭州</checkbox>
        <checkbox label="shenzhen" name="city">深圳</checkbox>
      </checkbox-group>

      <div>group: {{group}}</div>

      <s-button @click="changeGroup">change</s-button>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'CheckboxExample',
    props: {},
    data () {
      return {
        group: ['beijing'],
        default001: true
      }
    },
    methods: {
      changeGroup () {
        if (this.group.includes('shanghai')) return false;
        this.group.push('shanghai');
      }
    }
  }
</script>
