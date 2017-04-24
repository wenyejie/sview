<!--
 - 修改寄售账号信息
 -
 - author: Storm
 - date: 2017/04/24
 -->

<template>

  <s-app>
    <s-header>修改寄售账号信息</s-header>

    <s-main>

      <form novalidate>

        <s-cell-intro icon="warning"><span class="c-primary">谨防受骗：请勿向任何人泄露您的账号密码！</span></s-cell-intro>
        <s-form-make v-for="(item, index) in goodsModifyConfig.sellerTempAttrs"
                     v-model="releaseInfo.sellerTempAttrs[index]"
                     :key="item.attrId"
                     :options="item"></s-form-make>

        <s-form-make v-for="(item, index) in goodsModifyConfig.sellerAttrs"
                     v-model="releaseInfo.sellerAttrs[index]"
                     :key="item.attrId"
                     :options="item"></s-form-make>

        <s-cell-intro>【寄售交易】由闪电虎发货客服代替您给买家发货（7x24小时服务），快速完成交易。</s-cell-intro>

        <s-sedimentation>
          <s-radio
            style="margin-left: .22rem;"
            class="c-9"
            size="sm">已阅读并同意<a href="javascript:;" class="c-primary">&lt;闪电虎手机网游服务平台服务协议&gt;</a></s-radio>

          <s-button @click="release" type="primary" block class="mt-30">提交</s-button>
        </s-sedimentation>

      </form>

    </s-main>
  </s-app>

</template>

<script>
  import FormMake from '@/components/formMake';
  import Sedimentation from '@/components/sedimentation';
  import local from '@/untils/local';

  export default {
    name: 'accountInfo',
    components: {
      sFormMake: FormMake,
      sSedimentation: Sedimentation
    },
    props: {},
    data () {
      return {
        releaseInfo: {},
        formAttrs: [],

        goodsModifyConfig: {}
      }
    },
    methods: {

      // 初始化表单模版
      initFormTemplate () {
        this.formAttrs = this.goodsModifyConfig.sellerTempAttrs.concat(this.goodsModifyConfig.sellerAttrs);
        this.goodsModifyConfig.sellerTempAttrs.forEach(item => {
          this.releaseInfo.sellerTempAttrs.push({
            attrId: item.attrId,
            attrName: item.attrName,
            attrType: item.attrType,
            attrValue: item.attrValue,
            ruleId: item.attrRuleId,
          });
          item.ruleId = item.attrRuleId;
        });

        this.goodsModifyConfig.sellerAttrs.forEach(item => {
          this.releaseInfo.sellerAttrs.push({
            attrId: item.attrId,
            attrName: item.attrName,
            attrType: item.attrType,
            attrValue: item.attrValue,
            ruleId: item.attrRuleId,
          });
          item.ruleId = item.attrRuleId;
        });
      },

      // 获取表单token
      getFormToken () {
        return new Promise ((resolve, reject) => {

          this
            .$http
            .post('/h5/token/getFormSubmitToken')
            .then(response => {
              if (response.body.code !== '000') reject();
              resolve(response.body.data.formToken);
            }, reject);

        });
      },

      /**
       * 修改商品
       */
      release () {

        this
          .getFormToken()
          .then(formToken => {

            this.releaseInfo.formToken = formToken;

            this
              .$http
              .post('/h5/seller/publish/updateGoodsInfo', this.releaseInfo)
              .then(response => {
                if (response.body.code !== '000') return false;
                this.$Message.success('商品修改成功！');
                this.$router.replace({
                  path: 'goodsClass',
                  query: {
                    status: 3
                  }
                })
              });

          });
      }
    },
    created () {
      this.releaseInfo = local.get('goodsModifyValue');
      console.log(this.releaseInfo);
      this.goodsModifyConfig = local.get('goodsModifyConfig');
      this.initFormTemplate()
    }
  }
</script>
