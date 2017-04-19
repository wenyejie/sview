<!--
 - 发布成功
 -
 - author: Storm
 - date: 2017/04/19
 -->

<template>

  <div id="app">
    <s-header>发布成功</s-header>

    <s-main>

      <s-steps :active="1" status="error">
        <s-step label="发布成功,等待商品审核">03-30 14:53</s-step>
        <s-step label="审核通过，商品自动上架">约30分钟</s-step>
        <s-step label="等待玩家购买"></s-step>
      </s-steps>

      <s-panel>
        <p>每日发布商品数： <span style="color: #FF9616">1</span> / 10</p>

        <template slot="footer">
          <s-row gutter=".1rem">
            <s-col span="12">
              <s-button block>继续发布同类商品</s-button>
            </s-col>
            <s-col span="12">
              <s-button block outline>查看同类商品</s-button>
            </s-col>
          </s-row>
        </template>
      </s-panel>

    </s-main>
  </div>

</template>

<script>
  import steps from '@/components/steps';
  import step from '@/components/step';
  export default {
    name: 'Success',
    components: {
      sSteps: steps,
      sStep: step
    },
    props: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>
