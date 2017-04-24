<!--
 - Title
 -
 - author: Storm
 - date: 2017/04/22
 -->

<template>

  <s-app>

    <s-header>{{gameName}}
      <template slot="right">
        <router-link to="/release/selectGame">我要卖</router-link>
      </template>
    </s-header>

    <s-main>

      <ul class="goods-search">
        <li class="goods-search-item"
            @click="phoneChose"
            :class="{'selected': phoneVisible, 'on': query.platformId}"><span>{{phoneText}}</span></li>
        <li class="goods-search-item"
            @click="categoryChose"
            :class="{'selected': categoryVisible, 'on': query.goodsClassId || query.subClassId}"><span>{{categoryText}}</span></li>
        <li class="goods-search-item"
            @click="serverChose"
            :class="{'selected': serverVisible, 'on': query.serverId !== -1}"><span>{{serverText}}</span></li>
        <li class="goods-search-item"
            @click="sortChose"
            :class="{'selected': sortVisible, 'on': query.sortRule !== 1}"><span>{{sortText}}</span></li>
      </ul>

      <!-- 选择机型 -->
      <s-popup class="goods-popup phone-popup" v-model="phoneVisible" direction="top">
        <s-cell v-for="item in phones"
                :key="item.platformId"
                @click="phoneSelect(item)">{{item.platformName}}
        </s-cell>
      </s-popup>
      <!-- /选择机型 -->

      <!-- 商品类别 -->
      <s-popup class="goods-popup category-popup" v-model="categoryVisible" direction="top">
        <s-tabs direction="vertical">
          <s-tabs-panel label="全部">
            <ul class="category-popup-list">
              <li class="category-popup-item"
                  @click="categorySelect()"
                  :class="{'on': query.subClassId === undefined && query.goodsClassId === undefined}">
                <a href="javascript:;">全部</a>
              </li>
                <li class="category-popup-item"
                    v-for="item in categoriesAllItem"
                    @click="categorySelect(undefined, item)"
                    :class="{'on': item.subClassId === query.subClassId && query.goodsClassId === undefined}"
                    :key="item.subClassId"><a href="javascript:;">{{item.subClassName}}</a></li>
            </ul>
          </s-tabs-panel>
          <s-tabs-panel v-for="item in categories"
                        :key="item.classId"
                        :label="item.className">
            <ul class="category-popup-list">
              <li class="category-popup-item"
                  @click="categorySelect(item)"
                  :class="{'on': query.subClassId === undefined && query.goodsClassId === item.classId}">
                <a href="javascript:;">全部</a>
              </li>
              <li class="category-popup-item"
                  v-for="subItem in item.subClassList"
                  @click="categorySelect(item, subItem)"
                  :class="{'on': subItem.subClassId === query.subClassId && query.goodsClassId === item.classId}"
                  :key="subItem.subClassId"><a href="javascript:;">{{subItem.subClassName}}</a></li>
            </ul>
          </s-tabs-panel>
        </s-tabs>
      </s-popup>
      <!-- /商品类别 -->

      <!-- 服务器 -->
      <s-popup class="goods-popup server-popup" v-model="serverVisible" direction="top">
        <s-tabs direction="vertical">
          <s-tabs-panel label="全部">

            <s-search placeholder="服务器名称/数字" text="搜索"></s-search>

            <s-cell v-for="item in serverAllItem"
                    :key="item.serverId"
                    :class="{'on': query.domainId === undefined && query.serverId === item.serverId}"
                    @click="serverSelect(undefined, item)">{{item.serverName}}</s-cell>

          </s-tabs-panel>
          <s-tabs-panel v-for="item in servers"
                        :key="item.domainId"
                        :label="item.domainName">

            <s-cell v-for="subItem in item.serverList"
                    :key="subItem.serverId"
                    :class="{'on': query.domainId === item.domainId && query.serverId === subItem.serverId}"
                    @click="serverSelect(item, subItem)">{{subItem.serverName}}</s-cell>

          </s-tabs-panel>
        </s-tabs>
      </s-popup>
      <!-- /服务器 -->

      <!-- 筛选排序 -->
      <s-popup class="goods-popup sort-popup" v-model="sortVisible" direction="top">
        <s-cell>价格范围
          <input class="sort-popup-number"
                 min="0"
                 :max="query.maxPrice"
                 v-model.number="query.minPrice"
                 type="number">至
          <input class="sort-popup-number"
                 :min="query.minPrice"
                 v-model.number="query.maxPrice"
                 type="number">元
        </s-cell>
        <s-cell>排序方式</s-cell>

        <!--
        PUBLISH_TIME_DESC(1, "按发布时间排序"),
        PRICE_ASC(2, "按价格从低到高排序"),
        PRICE_DESC(3, "按价格从高到低排序"),
        SINGLE_PRICE_ASC(4, "按单价从低到高排序"),
        -->
        <div class="s-radio-list">
          <label class="s-radio-item">
            <input class="s-radio-check" type="radio" name="sortRule" :value="1" v-model="query.sortRule">
            <span class="s-radio-title">默认</span>
            <span class="s-radio-desc">按发布时间排序</span>
          </label>
          <label class="s-radio-item">
            <input class="s-radio-check" type="radio" name="sortRule" :value="2" v-model="query.sortRule">
            <span class="s-radio-title">价格↑</span>
            <span class="s-radio-desc">按价格从低到高排序</span>
          </label>
          <label class="s-radio-item">
            <input class="s-radio-check" type="radio" name="sortRule" :value="3" v-model="query.sortRule">
            <span class="s-radio-title">价格↓</span>
            <span class="s-radio-desc">按价格从高到低排序</span>
          </label>
          <label class="s-radio-item">
            <input class="s-radio-check" type="radio" name="sortRule" :value="4" v-model="query.sortRule">
            <span class="s-radio-title">单价↑</span>
            <span class="s-radio-desc">按单价从低到高排序</span>
          </label>
        </div>

        <div class="sort-popup-tool">
          <s-button size="sm" type="default" @click="clearSort">清空</s-button>
          <s-button size="sm" outline @click="sortConfirm">确定</s-button>
        </div>

      </s-popup>
      <!-- /筛选排序 -->

      <!-- 商品列表 -->
      <section class="s-goodsList-wrap">
        <s-goods-list v-for="item in goods"
                      :key="item.goodsId"
                      @click="chosenGoods(item.goodsId)"
                      :goods="item"></s-goods-list>
      </section>
      <!-- /商品列表 -->

    </s-main>

  </s-app>

</template>

<script>
  import Tabs from '@/components/tabs';
  import TabsPanel from '@/components/tabsPanel';
  import Search from '@/components/search'
  import Popup from '@/components/popup';
  import GoodsList from '@/components/goodsList';
  import './index.scss';
  export default {
    name: 'index',
    components: {
      sGoodsList: GoodsList,
      sPopup: Popup,
      sTabs: Tabs,
      sTabsPanel: TabsPanel,
      sSearch: Search
    },
    props: {},
    data () {
      return {
        phoneVisible: null,
        phoneModel: null,
        phoneText: '选择机型',
        phoneLoading: null,
        phones: [],

        categoryVisible: null,
        categoryModel: null,
        categoryText: '商品类别',
        categoryLoading: null,
        categories: [],
        categoriesAllItem: [],

        serverVisible: null,
        serverModel: null,
        serverText: '服务器',
        serverLoading: null,
        servers: [],
        serverAllItem: [],

        sortVisible: null,
        sortModel: null,

        loading: null,

        gameName: '',

        query: {
          domainId: undefined,
          gameId: null,
          goodsClassId: undefined,
          platformId: undefined,
          sortRule: 1,
          serverId: -1,
          subClassId: undefined,
          maxPrice: undefined,
          minPrice: undefined
        },

        goods: []
      }
    },
    methods: {

      chosenGoods (goodsId) {
        this.$router.push({
          path: 'detail',
          query: {goodsId}
        });
      },

      /**
       * 清空筛选条件
       */
      clearSort () {
        this.query.minPrice = undefined;
        this.query.maxPrice = undefined;
        this.query.sortRule = 1;
        this.sortVisible = false;
      },

      /**
       * 确定筛选条件
       */
      sortConfirm () {
        this.getGoods();
        this.sortVisible = false;
      },

      /**
       * 根据筛选条件获取商品列表
       * @param currentPage 页码
       * @param pageSize 每页条数
       */
      getGoods (currentPage = 0, pageSize = 20) {
        if (this.loading) return false;
        this.loading = true;

        const param = Object.assign({currentPage, pageSize}, this.query);

        this.$http
          .post('/h5/goods/gameGoodsScreening', param)
          .then(response => {
            if (response.body.code !== '000') return [];
            this.goods = response.body.data.list;
          })
          .finally(() => this.loading = false);
      },

      /**
       * 手机选择
       * @param item 平台实例
       */
      phoneSelect (item) {
        if (item.platformId === this.query.platformId) return false;
        this.query.platformId = item.platformId;
        this.phoneText = item.platformName;
        this.phoneVisible = false;
        this.getGoods();
      },

      /**
       * 获取手机平台列表
       * @returns {boolean}
       */
      getPhone () {
        if (this.phoneLoading) return false;
        this.phoneLoading = true;
        this
          .$http
          .post('/h5/goods/findGamePlatform')
          .then(response => {
            if (response.body.code !== '000') return false;
            this.phones = response.body.data.list;
          })
          .finally(() => this.phoneLoading = false);
      },

      /**
       * 查询商品分类
       * @param item 分类实例
       * @param subItem 子分类实例
       */
      categorySelect(item, subItem) {
        if (item !== undefined) this.categoryText = item.className;

        if (subItem !== undefined) this.categoryText = subItem.subClassName;

        if (item === undefined && subItem === undefined) this.categoryText = '商品类别';

        this.query.goodsClassId = item ? item.classId : undefined;
        this.query.subClassId = subItem ? subItem.subClassId : undefined;
        this.categoryVisible = false;
        this.getGoods();
      },

      /**
       * 获取商品类别
       * @returns {boolean}
       */
      getCategory () {
        if (this.categoryLoading) return false;
        this.categoryLoading = true;
        this
          .$http
          .post('/h5/goods/findClassAndGoodsSubClass', {gameId: this.query.gameId})
          .then(response => {
            if (response.body.code !== '000') return false;
            this.categories = response.body.data.list;
            // this.categoriesAllItem = this.categories[0].subClassList
            this.getCategoriesAllItem(this.categories);
          })
          .finally(() => this.categoryLoading = false);
      },

      /**
       * 获取所有子分类
       * @param obj 分类集合
       */
      getCategoriesAllItem (obj) {
        obj.forEach(item => {
          item.subClassList.forEach(subItem => this.categoriesAllItem.push(subItem));
        });
      },

      /**
       * 获取所有服务器
       * @param obj 区集合
       */
      getServerAllItem (obj) {
        obj.forEach(item => {
          item.serverList.forEach(subItem => this.serverAllItem.push(subItem));
        });
      },

      /**
       * 选中服务区
       * @param item 服务区实例
       * @param subItem 服务器实例
       */
      serverSelect (item, subItem) {
        this.serverText = subItem.serverName;

        this.query.domainId = item ? item.domainId : undefined;
        this.query.serverId = subItem.serverId;

        this.serverVisible = false;
        this.getGoods();
      },


      /**
       * 获取服务器类别
       * @returns {boolean}
       */
      getServer () {
        if (this.serverLoading) return false;
        this.serverLoading = true;
        this
          .$http
          .post('/h5/goods/findDomainAndServers', {gameId: this.query.gameId})
          .then(response => {
            if (response.body.code !== '000') return false;
            this.servers = response.body.data.list;
            this.getServerAllItem(this.servers);
          })
          .finally(() => this.serverLoading = false);
      },

      /**
       * 选择手机
       */
      phoneChose () {
        this.categoryVisible = false;
        this.serverVisible = false;
        this.sortVisible = false;
        this.phoneVisible = !this.phoneVisible;
        this.phoneLoading === null && this.getPhone();
      },

      /**
       * 商品类别选择
       */
      categoryChose () {
        this.phoneVisible = false;
        this.serverVisible = false;
        this.sortVisible = false;
        this.categoryVisible = !this.categoryVisible;
        this.categoryLoading === null && this.getCategory();
      },

      /**
       * 服务器列表选择
       */
      serverChose () {
        this.phoneVisible = false;
        this.categoryVisible = false;
        this.sortVisible = false;
        this.serverVisible = !this.serverVisible;
        this.serverLoading === null && this.getServer();
      },

      /**
       * 排序选择
       */
      sortChose () {
        this.phoneVisible = false;
        this.categoryVisible = false;
        this.serverVisible = false;
        this.sortVisible = !this.sortVisible;
      },

      init () {
        const query = this.$route.query;
        this.query.gameId = parseInt(query.gameId);
        this.gameName = query.gameName;
        if (!this.query.gameId) {
          this.$Message.error('游戏ID不存在, 请重新选择游戏');
          // this.$router.push({path: '/'});
          return false;
        }
        this.getGoods();
      }
    },

    computed: {
      sortText () {
        switch (this.query.sortRule) {
          case 2:
            return '价格↑';
            break;
          case 3:
            return '价格↓';
            break;
          case 4:
            return '单价↑';
            break;
          default:
            return '筛选排序';
            break;

        }
      }
    },

    watch: {
      $route () {
        this.init();
      },
    },

    created () {
      this.init();
    }
  }
</script>
