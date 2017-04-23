<!--
 - 填写商品描述
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>

  <s-app>
    <s-header>填写商品描述</s-header>

    <s-main>

      <form name="goodsInfo" novalidate>
        <s-cell-intro icon="warning">请认真填写您出售的商品信息，让买家快速了解并下单，可大大提高成功交易机会。</s-cell-intro>
        <s-cell>
          <span class="c-primary">*&nbsp;</span>
          <span>上传图片</span>
          <s-radio-group v-model="showType" slot="right">
            <s-radio :label="2" name="showType">有图</s-radio>
            <s-radio :label="1" name="showType">无图</s-radio>
          </s-radio-group>
        </s-cell>

        <s-upload v-model="picUrls" v-if="showType === 2"></s-upload>

        <s-cell-intro>单张图片不能超过10MB，最多可以上传10张图片</s-cell-intro>

        <!-- 当用户需要输入标题时展示商品标题输入框 -->
        <s-form-control label="商品标题" v-if="titleAttr.goodsSubClassTitleRule !== 1">
          <input type="text"
                 v-model="releaseInfo.title"
                 :maxlength="titleAttr.goodsSubClassMaxTitleLen"
                 placeholder="请输入商品标题">

        </s-form-control>

        <s-form-make v-for="item in formAttrs"
                     v-model="modelAttrs"
                     :key="item.attrId"
                     v-if="item.attrRule[0].showType === showType || item.attrRule[0].showType === 3"
                     :options="item"></s-form-make>


        <!-- 库存，价格 -->
        <s-form-control label="商品库存" required>
          <input type="number"
                 v-if="goodsClassId !==1"
                 :max="titleAttr.store"
                 min="1"
                 v-model.number="releaseInfo.storage" placeholder="请输入商品库存">
        </s-form-control>

        <s-form-control label="商品价格" required>
          <input type="number"
                 :max="titleAttr.maxPrice"
                 :min="titleAttr.minPrice"
                 v-model.number="releaseInfo.price"
                 placeholder="请输入商品价格">
        </s-form-control>


      </form>

      <s-sedimentation>
        <s-button type="primary" @click="nextStep" block>下一步</s-button>
      </s-sedimentation>

    </s-main>
  </s-app>


</template>

<script>
  import FormMake from '@/components/formMake';
  import FormControl from '@/components/formControl';
  import Sedimentation from '@/components/sedimentation';
  import Upload from '@/components/upload';
  import local from '@/untils/local';

  export default {
    name: 'goodsInfo',
    components: {
      sFormMake: FormMake,
      sSedimentation: Sedimentation,
      sFormControl: FormControl,
      sUpload: Upload
    },
    props: {},
    data () {
      return {
        gameId: null,
        goodsClassId: null,
        goodsSubClassId: null,
        clientId: null,
        domainId: null,
        serverId: null,

        getAttrsLoading: null,

        getAccountTypeLoading: null,

        formAttrs: [],

        modelAttrs: [],

        showType: 1,

        picUrls: '',

        releaseInfo: {
          title: '',
          storage: 0,
          price: 0
        },

        // 标题属性
        titleAttr: {}
      }
    },
    methods: {

      // 获取发布信息
      getInfo () {
        this.releaseInfo = Object.assign({}, this.releaseInfo, {
          clientId: this.clientId,
          domainId: this.domainId,
          showType: this.showType,
          serverId: this.serverId,
          goodsClassId: this.goodsClassId,
          subClassId: this.goodsSubClassId,
          attrs: this.modelAttrs
        });

        this.releaseInfo.picUrls = this.picUrls !== '' ? this.picUrls : undefined;

      },

      // 下一步
      nextStep () {
        this.getInfo();
        local.set('releaseInfo', this.releaseInfo);
        this.$store.dispatch('setReleaseInfo', this.releaseInfo);

        this.getAccountType();
      },

      // 获取账号类型
      getAccountType () {

        if (this.getAccountTypeLoading) return false;
        this.getAccountTypeLoading = true;

        this
          .$http
          .post('/h5/seller/publish/queryAccountTypeInfo', {
            clientId: this.clientId
          }, {
            loading: true
          })
          .then(response => {
            if (response.body.code !== '000') return false;
            this.accountTypes = response.body.data.list;

            if (this.accountTypes.length === 0) {
              this.$Dialog.alert('账号类型数据错误，请联系客服！');
              return false;
            }

            // 当账号类型大于等于2的时候，跳转至账号类型选择页面，
            // 否则直接跳转至账号信息填写页面
            if (this.accountTypes.length > 1) {
              local.set('releaseAccountTypes', this.accountTypes);
              this.$router.push('selectAccount');
              return false;
            }
            this.$router.push({
              path: 'accountInfo',
              query: {
                accountTypeId: this.accountTypes[0].gameAccountTypeId
              }
            });
          })
          .finally(() => {
            this.getAccountTypeLoading = false;
          });

      },

      // 获取链接中所带参数
      getQuery () {
        const query = this.$route.query;
        this.gameId = parseInt(query.gameId);
        this.goodsClassId = parseInt(query.goodsClassId);
        this.goodsSubClassId = parseInt(query.goodsSubClassId);
        this.clientId = parseInt(query.clientId);
        this.domainId = parseInt(query.domainId) || undefined;
        this.serverId = parseInt(query.serverId);
      },

      /**
       * 获取商品信息
       * @returns {boolean}
       */
      getAttrs () {

        if (this.getAttrsLoading) return false;
        this.getAttrsLoading = true;

        this
          .$http
          .post('/h5/seller/publish/queryAttrByType', {
              attrType: 1,
              subClassId: this.goodsSubClassId
            },
            {
              loading: true
            }
          )
          .then(response => {
            if (response.body.code !== '000') return false;
             this.dataSync(response.body.data.list);
          })
          .finally(() => {
            this.getAttrsLoading = false;
          })
        ;

      },

      // 数据同步
      dataSync (list) {
        list.forEach(item => {
          this.formAttrs.push({
            attrSeq: item.subClassAttrSeq,
            attrRule: item.subClassAttrRule,
            attrId: item.subClassAttrId,
            attrName: item.subClassAttrName,
            attrType: item.subClassAttrType
          });
        })

      }

    },

    created () {

      // 获取到在选择商品类型中保存的标题属性信息

      this.titleAttr = local.get('releaseTitleAttr');
      this.getQuery();
      this.getAttrs();
    }

  }
</script>
