<!--
 - 选择商品类型
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>
  <div id="app">
    <s-header>选择商品类型</s-header>

    <s-main>

      <s-cell-intro>目前【热血传奇手机版】支持出售的商品类型如下：</s-cell-intro>
      <s-link v-for="item in goodsTypeList"
              :key="item.goodsSubClassId"
              :to="`/release/selectClient?goodsSubClassId=${item.goodsSubClassId}&goodsSubClassEnableServer=${item.goodsSubClassEnableServer}&gameId=${gameId}&goodsClassId=${goodsClassId}`">{{item.goodsSubClassName}}</s-link>

    </s-main>
  </div>
</template>

<script>
  export default {
    name: 'SelectType',
    props: {},
    data () {
      return {

        // 游戏ID
        gameId: null,

        // 游戏分类ID
        goodsClassId: null,

        getGoodsTypeLoading: null,

        goodsTypeList: []
      }
    },
    methods: {

      // 获取链接中所带参数
      getQuery () {
        const query = this.$route.query;
        this.gameId = parseInt(query.gameId);
        this.goodsClassId = parseInt(query.goodsClassId);
      },

      /**
       * 获取商品类型
       * @returns {boolean}
       */
      getGoodsType () {

        if (this.getGoodsTypeLoading) return false;
        this.getGoodsTypeLoading = true;

        this
          .$http
          .post('/h5/goods/common/queryEnableGoodsSubClass', {
              gameId: this.gameId,
              goodsClassId: this.goodsClassId
            },
            {
              loading: true
            }
          )
          .then(response => {
            if (response.body.code !== '000') return false;
            this.goodsTypeList = response.body.data.list;
          })
          .finally(() => {
            this.getGoodsTypeLoading = false;
          })
        ;

      }
    },
    watch: {
      '$route' () {
        this.getQuery();
      }
    },
    created () {
      this.getQuery();
      this.getGoodsType();
    }
  }
</script>
