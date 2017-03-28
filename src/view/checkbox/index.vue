<!--
 - author: Storm
 - date: 2017/03/28
 -->

<template>
  <div class="checkboxExample">

    <checkbox>DEMO</checkbox>

    <checkbox-group>
      <checkbox label="beijing" name="city">北京</checkbox>
      <checkbox label="shanghai" name="city">上海</checkbox>
      <checkbox label="guangzhou" name="city">广州</checkbox>
      <checkbox label="hangzhou" name="city">杭州</checkbox>
      <checkbox label="shenzhen" name="city">深圳</checkbox>
    </checkbox-group>

  </div>
</template>

<script>
  export default {
    name: 'CheckboxExample',
    props: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
</style>
