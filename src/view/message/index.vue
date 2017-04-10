<!--
 - author: Storm
 - date: 2017/03/29
 -->

<template>
  <div class="MessageExample">
    <h1>Message</h1>

    <section>
      <h3 class="example-title">success - 成功</h3>
      <s-button type="primary" @click="show001">success</s-button>
    </section>

    <section>
      <h3 class="example-title">warning - 警告</h3>
      <s-button type="primary" @click="show002">warning</s-button>
    </section>

    <section>
      <h3 class="example-title">loading - 警告</h3>
      <s-button type="primary" @click="show003">loading</s-button>
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
      },
      show003 () {
        this.$Message.loading('加载中')
          .then(() => {
            console.log('loading success');
          });
      }
    }
  }
</script>

<style scoped>
</style>
