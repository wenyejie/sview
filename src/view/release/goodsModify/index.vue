<!--
 - 修改商品信息
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>

  <s-app>
    <s-header>修改商品信息</s-header>

    <s-main>

      <form name="goodsInfo" novalidate>
        <s-cell-intro icon="warning">请认真填写您出售的商品信息，让买家快速了解并下单，可大大提高成功交易机会。</s-cell-intro>
        <s-cell>
          <span class="c-primary">*&nbsp;</span>
          <span>上传图片</span>
          <s-radio-group v-model="goods.showType" slot="right">
            <s-radio :label="2" name="showType">有图</s-radio>
            <s-radio :label="1" name="showType">无图</s-radio>
          </s-radio-group>
        </s-cell>

        <s-upload v-model="goods.picUrls" v-if="goods.showType === 2"></s-upload>

        <s-cell-intro>单张图片不能超过10MB，最多可以上传10张图片</s-cell-intro>

        <!-- 当用户需要输入标题时展示商品标题输入框 -->
        <s-form-control label="商品标题" v-if="titleAttr.goodsSubClassTitleRule !== 1">
          <input type="text"
                 v-model="goods.title"
                 :maxlength="titleAttr.goodsSubClassMaxTitleLen"
                 placeholder="请输入商品标题">

        </s-form-control>

        <s-form-make v-for="item in goods.goodsAttrs"
                     prefix="goods"
                     v-model="item.attrValue"
                     :key="item.attrId"
                     v-if="item.attrRule[0].showType === goods.showType || item.attrRule[0].showType === 3"
                     :options="item"></s-form-make>


        <!-- 库存，价格 -->
        <s-form-control label="商品库存" required>
          <input type="number"
                 v-if="goods.classId !==1"
                 :max="titleAttr.store"
                 min="1"
                 v-model.number="goods.storage" placeholder="请输入商品库存">
        </s-form-control>

        <s-form-control label="商品价格" required>
          <input type="number"
                 :max="titleAttr.maxPrice"
                 :min="titleAttr.minPrice"
                 v-model.number="goods.price"
                 placeholder="请输入商品价格">
        </s-form-control>


      </form>

      <s-main-down>
        <s-button type="primary" @click="nextStep" block>下一步</s-button>
      </s-main-down>

    </s-main>
  </s-app>


</template>

<script>
  import FormMake from '@/components/formMake';
  import FormControl from '@/components/formControl';
  import MainDown from '@/components/mainDown';
  import Upload from '@/components/upload';
  import local from '@/untils/local';

  export default {
    name: 'goodsInfo',
    components: {
      sFormMake: FormMake,
      sMainDown: MainDown,
      sFormControl: FormControl,
      sUpload: Upload
    },
    props: {},
    data () {
      return {

        // 标题属性
        titleAttr: {},

        goods: {
          goodsId: 0,
          title: '',
          storage: 0,
          price: 0,
          showType: 1,
          picUrls: '//img.youximao.tv/FiFq7r48kcHq21lB-m2ycEKn4res'
        },

        // 加载模版信息loading
        getTemplateLoading: null
      }
    },
    methods: {

      init () {
        this.getQuery();
        this.getTemplate();
      },

      // 下一步
      nextStep () {

      },

      // 获取链接中所带参数
      getQuery () {
        const query = this.$route.query;
        this.goods.goodsId = parseInt(query.goodsId);
      },

      // 获取修改商品所需要的模版信息
      getTemplate () {

        if (Number.isNaN(this.goods.goodsId)) {
          this.$Message.error('不存在该商品！');
          return false;
        }
        if (this.getTemplateLoading) return false;
        this.getTemplateLoading = true;
        this
          .$http
          .post('/h5/goods/queryGoodsInfo', {
            goodsId: this.goods.goodsId
          })
          .then(response => {
            if (response.body.code !== '000') return false;
            //this.goods = response.body.data;
          })
          .finally(() => this.getTemplateLoading = false);

      }

    },

    watch: {

      $route () {
        this.init();
      }

    },

    created () {
      this.init();
    }

  }
</script>
