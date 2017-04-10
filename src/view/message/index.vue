<!--
 - author: Storm
 - date: 2017/03/29
 -->

<template>
  <div class="MessageExample">
    <h1>Message</h1>

    <section>
      <h3 class="example-title">success - 成功</h3>
      <s-button type="primary" @click="show001">显示</s-button>
    </section>

    <section>
      <h3 class="example-title">warning - 警告</h3>
      <s-button type="primary" @click="show002">显示</s-button>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'MessageExample',
    props: {},
    data () {
      return {
      }
    },
    methods: {
      show001 () {
        this.$Message.success('提交成功!');
      },
      show002 () {
        this.$Message.warning('网络异常,稍后请重试')
          /*.then(() => {
            console.log('demo');
          })*/
      }
    }
  }
</script>

<style scoped>
</style>
