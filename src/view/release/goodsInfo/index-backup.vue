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
          <s-radio-group v-model="hasImage" slot="right">
            <s-radio :label="true" name="city">有图</s-radio>
            <s-radio :label="false" name="city">无图</s-radio>
          </s-radio-group>
        </s-cell>

        <s-cell-intro>单张图片不能超过10MB，最多可以上传10张图片</s-cell-intro>

        <s-form-select
          label="宝石名称"
          placeholder="请选择"
          name="name"
          val="id"
          :options="gemNames"
          required></s-form-select>

        <s-form-select
          label="宝石等级"
          placeholder="请选择"
          name="name"
          val="id"
          :options="gemNames"
          required></s-form-select>

         <s-cell-intro>我是提示信息,我是提示信息,我是提示信息,我是提示信息,我是提示信息,我是提示信息,我是提示信息,</s-cell-intro>

        <s-form-control label="宝石数量">
          <input type="number" placeholder="请输入数量">
        </s-form-control>

        <s-form-control label="商品价格">
          <input type="number" min="1" placeholder="请输入数量">
        </s-form-control>

        <s-cell-intro>商品价格必须大于1</s-cell-intro>

        <s-form-control label="库存">
          <input type="number" placeholder="请输入库存数量">
        </s-form-control>

        <s-form-control label="商品描述" required>
          <input type="text" placeholder="请输入商品描述">
        </s-form-control>

        <s-cell-intro>每笔交易将被收取
          <span class="c-primary">0</span> 元服务费,
          <span class="c-primary">&lt;收费规则&gt;</span>
        </s-cell-intro>

        <div class="content" style="margin-top: .36rem">
          <s-button type="primary" block>下一步</s-button>
        </div>

      </form>

    </s-main>
  </div>


</template>

<script>
  import FormControl from '@/components/formControl';
  import FormSelect from '@/components/formSelect';
  import attrType from '@/data/attrType';

  export default {
    name: 'goodsInfo',
    components: {
      sFormControl: FormControl,
      sFormSelect: FormSelect
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

        getGoodsInfosLoading: null,

        hasImage: true,
        gemNames: [
          {
            name: '提尔之石',
            id: 1
          },
          {
            name: '赫尔精之石',
            id: 2
          },
          {
            name: '氟利嘉之石',
            id: 3
          },
          {
            name: '须弥之石',
            id: 4
          }
        ]
      }
    },
    methods: {

      // 获取链接中所带参数
      getQuery () {
        const query = this.$route.query;
        this.gameId = parseInt(query.gameId);
        this.goodsClassId = parseInt(query.goodsClassId);
        this.goodsSubClassId = parseInt(query.goodsSubClassId);
        this.clientId = parseInt(query.clientId);
        this.domainId = parseInt(query.domainId);
        this.serverId = parseInt(query.serverId);
      },

      /**
       * 获取商品信息
       * @returns {boolean}
       */
      getGoodsInfos () {

        if (this.getGoodsInfosLoading) return false;
        this.getGoodsInfosLoading = true;

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
            this.goodsClassList = response.body.data.list;
          })
          .finally(() => {
            this.getGoodsInfosLoading = false;
          })
        ;

      }

    },

    created () {
      this.getQuery();
      this.getGoodsInfos();
      attrType.getNameById(1);
    }

  }
</script>
