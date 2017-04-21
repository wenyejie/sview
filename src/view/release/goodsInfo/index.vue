<!--
 - 填写商品描述
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>

  <div id="app">
    <s-header>填写商品描述</s-header>

    <s-main>

      <form name="goodsInfo" novalidate>
        <s-cell-intro icon="warning">请认真填写您出售的商品信息，让买家快速了解并下单，可大大提高成功交易机会。</s-cell-intro>
        <s-cell>
          <span class="c-primary">*&nbsp;</span>
          <span>上传图片</span>
          <s-radio-group v-model="showType" slot="right">
            <s-radio :label="1" name="showType">有图</s-radio>
            <s-radio :label="2" name="showType">无图</s-radio>
          </s-radio-group>
        </s-cell>

        <s-upload v-model="picUrls" v-if="showType === 1"></s-upload>

        <s-cell-intro>单张图片不能超过10MB，最多可以上传10张图片</s-cell-intro>


        <s-form-make v-for="item in attrs"
                     v-model="modelAttrs"
                     :key="item.subClassAttrId"
                     v-if="item.subClassAttrRule[0].showType === showType || item.subClassAttrRule[0].showType === 3"
                     :options="item"></s-form-make>

        <!--{{modelAttrs}}-->


        <!--<div class="content" style="margin-top: .36rem">
          <s-button type="primary" @click="next" block>下一步</s-button>
        </div>-->

      </form>

      <s-main-down>
        <s-button type="primary" @click="next" block>下一步</s-button>
      </s-main-down>

    </s-main>
  </div>


</template>

<script>
  import FormMake from '@/components/formMake';
  import MainDown from '@/components/mainDown';
  import Upload from '@/components/upload';
  import local from '@/untils/local';

  export default {
    name: 'goodsInfo',
    components: {
      sFormMake: FormMake,
      sMainDown: MainDown,
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

        attrs: [],

        modelAttrs: [],

        showType: 1,

        picUrls: [],

        releaseInfo: {}
      }
    },
    methods: {

      // 获取发布信息
      getInfo () {
        this.releaseInfo = {
          clientId: this.clientId,
          domainId: this.domainId,
          showType: this.showType,
          serverId: this.serverId,
          goodsClassId: this.goodsClassId,
          goodsSubClassId: this.goodsSubClassId,
          attrs: this.modelAttrs
        };

        this.releaseInfo.picUrls = this.picUrls.length > 0 ? this.picUrls : undefined;

      },

      next () {
        this.getInfo();
        local.set('releaseInfo', this.releaseInfo);
        this.$store.dispatch('setReleaseInfo', this.releaseInfo);
        this.$router.push('selectAccount');
        /*this.$router.push({
          path: '/release/accountInfo',
          query: {
            gameId: this.gameId,
            goodsClassId: this.goodsClassId,
            goodsSubClassId: this.goodsSubClassId,
            clientId: this.clientId,
            domainId: this.domainId,
            serverId: this.serverId
          }
        });*/
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

             this.attrs = response.body.data.list;
          })
          .finally(() => {
            this.getAttrsLoading = false;
          })
        ;

      }

    },

    created () {
      this.getQuery();
      this.getAttrs();
    }

  }
</script>
