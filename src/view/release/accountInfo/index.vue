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

        <s-form-make v-for="item in attrs"
                     v-model="modelAttrs"
                     :key="item.subClassAttrId"
                     :options="item"></s-form-make>

        <s-cell-intro>【寄售交易】由闪电虎发货客服代替您给买家发货（7x24小时服务），快速完成交易。</s-cell-intro>

        <s-main-down>
          <s-radio
            style="margin-left: .22rem;"
            class="c-9"
            size="sm">已阅读<a href="javascript:;" class="c-primary">&lt;闪电虎手机网游服务平台服务协议&gt;</a></s-radio>

          <s-button @click="release" type="primary" block class="mt-30">下一步</s-button>
        </s-main-down>

      </form>

    </s-main>
  </div>

</template>

<script>
  import FormMake from '@/components/formMake';
  import MainDown from '@/components/mainDown';
  import customForm from '@/api/customForm';
  import local from '@/untils/local';

  const {getAttr} = customForm;

  export default {
    name: 'accountInfo',
    components: {
      sFormMake: FormMake,
      sMainDown: MainDown
    },
    props: {},
    data () {
      return {
        getAccountLoading: null,
        attrs: [],
        modelAttrs: [],
        releaseInfo: {},
        getSellerAttrTempLoading: null,
      }
    },
    methods: {

      getAttr,

      // 获取客户端下卖家的模版属性以及配置
      getSellerAttrTemp () {
        if (this.getSellerAttrTempLoading) return false;
        this.getSellerAttrTempLoading = true;

        this.
          $http
          .post('')
      },

      /**
       * 获取卖家账号信息
       * @returns {boolean}
       */
      getAccount () {

        if (this.getAccountLoading) return false;
        this.getAccountLoading = true;

        console.log(this.releaseInfo);

        this
          .getAttr(2, this.releaseInfo.goodsSubClassId)
          .then(response => {
            this.attrs = response;
          })
          .then(() => {
            this.getAccountLoading = false;
          })

      },

      /**
       * 发布商品
       */
      release () {
        this
          .$http
          .post('/h5/seller/publish/publishGoods', this.releaseInfo)
          .then(response => {
            console.log(response);
          })
      }
    },
    created () {
      this.releaseInfo = local.get('releaseInfo');
      this.getAccount();
    }
  }
</script>
