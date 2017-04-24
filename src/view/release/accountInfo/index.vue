<!--
 - 填写寄售账号信息
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>

  <s-app>
    <s-header>全部商品</s-header>

    <s-main>

      <form novalidate>

        <s-cell-intro icon="warning"><span class="c-primary">谨防受骗：请勿向任何人泄露您的账号密码！</span></s-cell-intro>
        <s-form-make v-for="(item, index) in formAttrs"
                     v-model="modelAttrs[index]"
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
        getFormAttrsLoading: null,
        modelAttrs: [],
        releaseInfo: {},
        formAttrs: []
      }
    },
    methods: {

      // 获取客户端下卖家的模版属性以及配置
      getSellerAttrTemp () {

        return new Promise((resolve, reject) => {
          this.$http
            .post('/h5/seller/publish/querySellerAttrTemp', {
              accountTypeId: this.releaseInfo.gameAccountTypeId
            })
            .then(response => {
              if (response.body.code !== '000') reject();
              response.body.data.list.forEach(item => {
                item.attrType = 2;
              });
              resolve(response.body.data.list);
            }, reject)
            .catch(reject)
        });
      },

      /**
       * 获取卖家账号信息
       * @returns {boolean}
       */
      getAccount () {

        return new Promise((resolve, reject) => {
          this
            .$http
            .post('/h5/seller/publish/queryAttrByType', {
                attrType: 2,
                subClassId: this.releaseInfo.subClassId
              }
            ).then(response => {
            if (response.body.code !== '000') reject();
            resolve(response.body.data.list);
          }, reject)
        })

      },

      // 数据同步
      dataSync (data) {
        let result = [];
        data.forEach(item => {
          result.push({
            attrSeq: item.subClassAttrSeq,
            attrRule: item.subClassAttrRule,
            attrId: item.subClassAttrId,
            attrName: item.subClassAttrName,
            attrType: item.subClassAttrType
          });
        });

        return result;

      },

      // 同步model数据
      modelSync (data) {
        data.forEach(item => {
          this.modelAttrs.push({
            attrId: item.attrId,
            attrName: item.attrName,
            attrType: item.attrType,
            attrValue: null,
            ruleId: null,
          });
        });
      },

      // 获取卖家表单数据
      getFormAttrs () {
        if (this.getFormAttrsLoading) return false;
        this.getFormAttrsLoading = true;
        Promise
          .all([this.getSellerAttrTemp(), this.getAccount()])
          .then(([attrTemps, accounts]) => {
            accounts = this.dataSync(accounts);
            this.formAttrs = attrTemps.concat(accounts);
            this.modelSync(this.formAttrs);
          })
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
       * 发布商品
       */
      release () {
        this.releaseInfo.attrs = this.releaseInfo.attrs.concat(this.modelAttrs);

        this
          .getFormToken()
          .then(formToken => {

            this.releaseInfo.formToken = formToken;

            this
              .$http
              .post('/h5/seller/publish/publishGoods', this.releaseInfo)
              .then(response => {
                if (response.body.code !== '000') return false;
                this.$Message.success('商品发布成功！');
                this.$router.replace({
                  path: 'success',
                  query: {
                    surplusTimes: 1
                  }
                })
              });

          });
      }
    },
    created () {
      this.releaseInfo = local.get('releaseInfo');
      this.releaseInfo.gameAccountTypeId = parseInt(this.$route.query.accountTypeId);
      this.getFormAttrs();
    }
  }
</script>
