<!--
 - 选择商品分类
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>
  <div id="app">
    <s-header>选择商品分类</s-header>

    <s-main>

      <s-cell-intro>目前【热血传奇手机版】支持出售的商品类别如下：</s-cell-intro>
      <s-link v-for="cls in goodsClassList"
              :key="cls.classId"
              :to="`/release/selectType?gameId=${gameId}&goodsClassId=${cls.classId}`">{{cls.className}}
      </s-link>

    </s-main>
  </div>
</template>

<script>
  export default {
    name: 'SelectClass',
    props: {},
    data () {
      return {

        // 商品分类列表
        goodsClassList: [],

        // 获取商品分类列表loading
        getGoodsClassLoading: null,

        // 游戏ID
        gameId: null
      }
    },
    methods: {

      /**
       * 获取链接中的游戏ID
       */
      getQuery () {
        this.gameId = parseInt(this.$route.query.gameId);
      },

      /**
       * 获取商品分类列表
       * @returns {boolean}
       */
      getGoodsClass () {

        if (this.getGoodsClassLoading) return false;
        this.getGoodsClassLoading = true;

        this
          .$http
          .post('/h5/goods/common/queryAllGoodsClass', {
              gameId: this.gameId
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
            this.getGoodsClassLoading = false;
          })
        ;
      }
    },
    watch: {
      '$route' () {
        this.getQuery();
        this.getGoodsClass();
      }
    },
    created () {
      this.getQuery();
      this.getGoodsClass();
    }
  }
</script>
