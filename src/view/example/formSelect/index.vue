<!--
 - FormSelect Example
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>

  <div id="app" class="selectGame">
    <s-header>FormSelect</s-header>

    <s-main>
      <s-form-select label="宝石名称"
                     placeholder="请选择"
                     :options="options"
                     name="name"
                     v-model="demo"
                     val="id"
                     required></s-form-select>

      <div>我是DEMO: {{demo}}😂</div>
    </s-main>
  </div>

</template>

<script>
  import FormSelect from '@/components/formSelect';
  export default {
    name: 'FormSelectExample',
    components: {
      sFormSelect: FormSelect
    },
    props: {},
    data () {
      return {
        demo: 1,
        options: [
          {
            name: '提尔之石',
            id: 1
          },
          {
            name: '赫尔精之石',
            id: 2
          },
          {
            name: '氟利嘉之石',
            id: 3
          },
          {
            name: '须弥之石',
            id: 4
          }
        ]
      }
    },
    methods: {}
  }
</script>
