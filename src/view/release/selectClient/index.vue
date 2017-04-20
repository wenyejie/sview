<!--
 - 选择客户端
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>
  <div id="app">
    <s-header>选择客户端</s-header>

    <s-main>

      <s-cell-intro>请选择商品所在游戏客户端：</s-cell-intro>
      <s-cell v-for="item in clientList"
              @click="clientClick(item)"
              :key="item.gameClientId">{{item.gameClientName}}
        <template slot="right">
          <s-icon type="right"></s-icon>
        </template>
      </s-cell>

    </s-main>
  </div>
</template>

<script>
  export default {
    name: 'SelectClient',
    props: {},
    data () {
      return {
        gameId: null,
        goodsClassId: null,
        goodsSubClassId: null,
        goodsSubClassEnableServer: null,
        getClientLoading: null,
        getAreaListLoading: null,
        clientList: []
      }
    },
    methods: {

      // 获取链接中所带参数
      getQuery () {
        const query = this.$route.query;
        this.gameId = parseInt(query.gameId);
        this.goodsClassId = parseInt(query.goodsClassId);
        this.goodsSubClassId = parseInt(query.goodsSubClassId);
        this.goodsSubClassEnableServer = parseInt(query.goodsSubClassEnableServer);
      },

      // 获取客户端列表
      getClient () {

        if (this.getClientLoading) return false;
        this.getClientLoading = true;

        this
          .$http
          .post('/h5/goods/common/queryGameClientBySubClass', {
              goodsSubClassId: this.goodsSubClassId
            },
            {
              loading: true
            }
          )
          .then(response => {
            if (response.body.code !== '000') return false;
            this.clientList = response.body.data.list;
          })
          .finally(() => {
            this.getClientLoading = false;
          })
        ;

      },

      // 获取客户端对应的服务区列表
      getAreaList (gameClientId) {

        return new Promise((resolve, reject) => {

          if (this.getAreaListLoading) return false;
          this.getAreaListLoading = true;

          this
            .$http
            .post('/h5/goods/common/queryDomainByClient', {
                clientId: gameClientId
              },
              {
                loading: true
              }
            )
            .then(response => {
              if (response.body.code !== '000') return false;
              response.body.data.list.length >= 1 ? resolve() : reject();

              // 保存至store，未来页需要调用
              this.$store.commit('setting', {
                name: 'serviceAreaList',
                value: response.body.data.list
              });
            })
            .finally(() => {
              this.getAreaListLoading = false;
            })
          ;

        });

      },

      /**
       * 点击客户端名称进行跳转
       * @param item 客户端数据
       */
      clientClick (item) {
        switch (this.goodsSubClassEnableServer) {

          // 全部区服
          case 1:
            this
              .getAreaList(item.gameClientId)
              .then(
                // 如果该客户端下存在服务区则跳转至选择服务区
                () => this.$router.push({
                  path: '/release/selectArea',
                  query: {
                    gameId: this.gameId,
                    goodsClassId: this.goodsClassId,
                    goodsSubClassId: this.goodsSubClassId,
                    clientId: item.gameClientId,
                  }
                }),

                // 不存在服务区在跳转至选择服务器
                () => this.$router.push({
                  name: 'selectServerRelease',
                  query: {
                    gameId: this.gameId,
                    goodsClassId: this.goodsClassId,
                    goodsSubClassId: this.goodsSubClassId,
                    clientId: item.gameClientId,
                  }
                })
              );
            break;

          // 全服通用
          case 2:
            break;

          // 全服通用+全部区服
          case 3:
            break;

          // 其它
          default:
            break;
        }
      }

    },

    watch: {
      '$route' () {
        this.getQuery();
        this.getClient();
      }
    },

    created () {
      this.getQuery();
      this.getClient();
    }
  }
</script>
