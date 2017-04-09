<!--
 - author: Storm
 - date: 2017/03/29
 -->

<template>
  <div class="DialogExample">
    <h1>Dialog</h1>

    <section>
      <h3 class="example-title">innerHTML - 内置</h3>
      <s-button type="primary" @click="show001 = true">显示</s-button>
      <s-dialog v-model="show001" title="提示">
        <table>
          <thead>
          <tr>
            <th>编号</th>
            <th>生产日期</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>123456789</td>
            <td>2017-03-28</td>
          </tr>
          </tbody>
        </table>
      </s-dialog>
    </section>

    <section>
      <h3 class="example-title">function - 函数</h3>
      <s-button type="primary" @click="show002">显示</s-button>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'DialogExample',
    props: {},
    data () {
      return {
        show001: false
      }
    },
    methods: {
      show002 () {
        this.$Dialog.confirm('请登录游戏！')
          .then(() => {
            console.log('demo');
          })
      }
    }
  }
</script>

<style scoped>
</style>
