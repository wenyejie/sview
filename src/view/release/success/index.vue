<!--
 - 发布成功
 -
 - author: Storm
 - date: 2017/04/19
 -->

<template>

  <s-app>
    <s-header>发布成功</s-header>

    <s-main>

      <s-steps :active="0" status="success">
        <s-step label="发布成功,等待商品审核">03-30 14:53</s-step>
        <s-step label="审核通过，商品自动上架">约30分钟</s-step>
        <s-step label="等待玩家购买"></s-step>
      </s-steps>

      <s-panel>
        <p>每日发布商品数： <span style="color: #ff9616">{{surplusTimes}}</span> / 10</p>

        <template slot="footer">
          <s-row gutter=".1rem">
            <s-col span="12">
              <s-button block @click="continueRelease">继续发布同类商品</s-button>
            </s-col>
            <s-col span="12">
              <s-button block outline>查看同类商品</s-button>
            </s-col>
          </s-row>
        </template>
      </s-panel>

      <s-panel title="交易安全防骗提醒" class="mt-20">

        <ul class="content-neg c-9">
          <s-cell tag="li">
            <s-icon type="success"></s-icon>
            客服只会通过本站内的聊天系统联系您
          </s-cell>
          <s-cell tag="li">
            <s-icon type="success"></s-icon>
            本站仅收取【交易服务费】交易成功时自动扣款 ，您提现的手续费由收款方自动扣除
          </s-cell>
          <s-cell tag="li">
            <s-icon type="error"></s-icon>
            交易时请勿在本站以外的聊天软件（如QQ、微信、贴吧等）进行沟通
          </s-cell>
          <s-cell tag="li">
            <s-icon type="error"></s-icon>
            本站不会要求您转账、汇款，或向您索要其他任何费用
          </s-cell>
          <s-cell tag="li">
            <s-icon type="error"></s-icon>
            本站不会向您主动索要游戏账号和密码
          </s-cell>
        </ul>

        <template slot="footer">
          <s-row gutter=".1rem">
            <s-col span="12">
              <s-button block @click="goHome">返回首页</s-button>
            </s-col>
            <s-col span="12">
              <s-button block type="primary" shadow icon="link" @click="copyLink">复制商品链接</s-button>
            </s-col>
          </s-row>
        </template>

      </s-panel>

    </s-main>
  </s-app>

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
      return {
        surplusTimes: 0
      }
    },
    methods: {
      goHome () {
        this.$router.push('/');
      },

      // 继续发布同类商品
      continueRelease () {
        this.$router.go(-1);
      },

      // http://caniuse.com/#search=clipboard
      copyLink() {
        this.$Message.success('复制成功！');
      }
    },
    watch: {
      $route () {
        this.surplusTimes = this.$route.query.surplusTimes;
      }
    },
    created () {
      this.surplusTimes = this.$route.query.surplusTimes;
    }
  }
</script>
