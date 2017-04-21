<!--
 - 填写寄售账号信息
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>

  <div id="app">
    <s-header>填写寄售账号信息</s-header>

    <s-main>

      <form novalidate>

        <s-cell-intro icon="warning"><span class="c-primary">谨防受骗：请勿向任何人泄露您的账号密码！</span></s-cell-intro>
        <s-form-make v-for="item in formAttrs"
                     v-model="modelAttrs"
                     :key="item.attrId"
                     :options="item"></s-form-make>

        <s-cell-intro>【寄售交易】由闪电虎发货客服代替您给买家发货（7x24小时服务），快速完成交易。</s-cell-intro>

        <s-main-down>
          <s-radio
            style="margin-left: .22rem;"
            class="c-9"
            size="sm">已阅读并同意<a href="javascript:;" class="c-primary">&lt;闪电虎手机网游服务平台服务协议&gt;</a></s-radio>

          <s-button @click="release" type="primary" block class="mt-30">下一步</s-button>
        </s-main-down>

      </form>

    </s-main>
  </div>

</template>

<script>
  import FormMake from '@/components/formMake';
  import MainDown from '@/components/mainDown';
  import local from '@/untils/local';

  export default {
    name: 'accountInfo',
    components: {
      sFormMake: FormMake,
      sMainDown: MainDown
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
                subClassId: this.releaseInfo.goodsSubClassId
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

      // 获取卖家表单数据
      getFormAttrs () {
        if (this.getFormAttrsLoading) return false;
        this.getFormAttrsLoading = true;
        Promise
          .all([this.getSellerAttrTemp(), this.getAccount()])
          .then(([attrTemps, accounts]) => {
            console.log(attrTemps);
            accounts = this.dataSync(accounts);
            this.formAttrs = attrTemps.concat(accounts);
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
                this.$router.push({
                  path: 'success',
                  query: {
                    demo: 1
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
