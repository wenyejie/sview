<!--
 - author: Storm
 - date: 2017/03/28
 -->

<template>
  <div class="radioExample">
    <radio v-model="demo">DEMO</radio>

    <radio-group v-model="city" @change="change">
      <radio label="beijing" name="city">北京</radio>
      <radio label="shanghai" name="city">上海</radio>
      <radio label="guangzhou" name="city">广州</radio>
      <radio label="hangzhou" name="city">杭州</radio>
      <radio label="shenzhen" name="city">深圳</radio>
    </radio-group>

    <button type="button" @click="changeValue">change</button>

    <div>city: {{city}}, demo: {{demo}}</div>
  </div>
</template>

<script>
  export default {
    name: 'RadioExample',
    props: {},
    data () {
      return {
        city: 'beijing',
        demo: false
      }
    },
    methods: {
      change (value) {
        console.log(value);
      },
      changeValue () {
        this.city = 'shanghai';
      }
    }
  }
</script>
