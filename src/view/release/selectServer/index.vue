<!--
 - 选择服务器
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>
  <div id="app">
    <s-header>选择服务器</s-header>

    <s-main>

      <s-search placeholder="请输入游戏名称"></s-search>

      <section>
        <s-cell-intro>请选择商品所在服务器：</s-cell-intro>
        <s-link v-for="item in servers"
                :key="item.domainId"
                :to="`/release/goodsInfo?gameId=${gameId}&goodsClassId=${goodsClassId}&goodsSubClassId=${goodsSubClassId}&=clientId=${clientId}&domainId=${domainId}&serverId=${item.serverId}`">{{item.serverName}}</s-link>
      </section>

    </s-main>
  </div>
</template>

<script>
  import Search from '@/components/search'
  export default {
    name: 'selectServer',
    components: {
      sSearch: Search
    },
    props: {},
    data () {
      return {
        getServersLoading: null,
        servers: [],

        gameId: null,
        goodsClassId: null,
        goodsSubClassId: null,
        clientId: null,
        domainId: null
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
      },

      /**
       * 获取服务器列表
       * @returns {boolean}
       */
      getServers () {

        if (this.getServersLoading) return false;
        this.getServersLoading = true;

        this
          .$http
          .post('/h5/goods/common/queryServerByClient', {
              clientId: this.clientId
            },
            {
              loading: true
            }
          )
          .then(response => {
            if (response.body.code !== '000') return false;
            this.servers = response.body.data.list;
          })
          .finally(() => {
            this.getServersLoading = false;
          })
        ;

      }
    },

    watch: {
      '$route' () {
        this.getQuery();
        this.getServers();
      }
    },

    created () {
      this.getQuery();
      this.getServers();
    }

  }
</script>
