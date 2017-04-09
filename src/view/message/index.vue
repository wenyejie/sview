<!--
 - author: Storm
 - date: 2017/03/29
 -->

<template>
  <div class="MessageExample">
    <h1>Message</h1>

    <section>
      <h3 class="example-title">innerHTML - 内置</h3>
      <s-button type="primary" @click="show001 = true">显示</s-button>
      <s-dialog v-model="show001"></s-dialog>
    </section>

    <section>
      <h3 class="example-title">function - 函数</h3>
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
        show001: false
      }
    },
    methods: {
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
