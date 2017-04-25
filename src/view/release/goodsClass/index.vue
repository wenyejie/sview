<!--
 - 商品分类
 -
 - author: Storm
 - date: 2017/04/21
 -->

<template>

  <s-app>

    <s-header>{{title}}</s-header>

    <s-main>

      <s-card v-for="(item, index) in goodsList"
              :key="item.goodsId"
              @on-remove="remove(index)"
              :goods="item"></s-card>

      <s-nothing v-if="goodsList.length === 0 && loading === false"
                 title="没有找到对应的商品"
                 status="goods"></s-nothing>

    </s-main>

  </s-app>

</template>

<script>
  import Card from '@/components/card';
  import Nothing from '@/components/nothing';

  /* AUDITING(1, "审核中"),HAS_PUTAWAY(2, "已上架"),UNDER(3, "已下架"), */
  const statusList = [
    {
      status: 1,
      title: '审核中'
    },
    {
      status: 2,
      title: '已上架'
    },
    {
      status: 3,
      title: '已下架'
    }
  ];

  export default {
    name: 'goodsClass',
    components: {
      sCard: Card,
      sNothing: Nothing
    },
    props: {},
    data () {
      return {
        title: '',
        status: 0,
        goodsList: [],
        loading: null
      }
    },
    methods: {

      remove (index) {
        // 删除当前数据
        this.goodsList.splice(index, 1);
      },

      init () {
        this.status = parseInt(this.$route.query.status);
        this.getGoodsInfo();
        this.changeTitle();
      },

      changeTitle () {
        const item = statusList.find(item => item.status === this.status);
        this.title = item.title;
      },
      getGoodsInfo (currentPage = 0, pageSize = 20) {

        if (this.loading) return false;
        this.loading = true;

        this
          .$http
          .post('/h5/goods/findSellerGoodsInfo', {
            goodsStatus: this.status,
            currentPage: currentPage,
            pageSize: pageSize
          })
          .then(response => {
            if (response.body.code !== '000') return false;
            this.goodsList = response.body.data.list;
          })
          .finally(() => this.loading = false)
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
