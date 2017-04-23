<!--
 - Title
 -
 - author: Storm
 - date: 2017/04/22
 -->

<template>

  <s-app>

    <s-header>游戏名称
      <template slot="right">
        <router-link to="">我要卖</router-link>
      </template>
    </s-header>

    <s-main>

      <ul class="goods-search">
        <li class="goods-search-item"
            @click="phoneChose"
            :class="{'on': phoneVisible || phoneModel}"><span>{{phoneText}}</span></li>
        <li class="goods-search-item"
            @click="categoryChose"
            :class="{'on': categoryVisible || categoryModel}"><span>{{categoryText}}</span></li>
        <li class="goods-search-item"
            @click="serverChose"
            :class="{'on': serverVisible || serverModel}"><span>{{serverText}}</span></li>
        <li class="goods-search-item"
            @click="sortChose"
            :class="{'on': sortVisible || sortModel}"><span>{{sortText}}</span></li>
      </ul>

      <!-- 选择机型 -->
      <s-popup class="goods-popup phone-popup" v-model="phoneVisible" direction="top">
        <s-cell>安卓版</s-cell>
        <s-cell>IOS-AppStore版</s-cell>
        <s-cell>IOS-越狱版</s-cell>
      </s-popup>
      <!-- /选择机型 -->

      <!-- 商品类别 -->
      <s-popup class="goods-popup category-popup" v-model="categoryVisible" direction="top">
        <s-tabs direction="vertical">
          <s-tabs-panel label="全部">
            <ul class="category-popup-list">
              <li class="category-popup-item"><a href="javascript:;">全部</a></li>
              <li class="category-popup-item"><a href="javascript:;">水晶钻</a></li>
              <li class="category-popup-item"><a href="javascript:;">金币</a></li>
              <li class="category-popup-item"><a href="javascript:;">银币</a></li>
            </ul>
          </s-tabs-panel>
          <s-tabs-panel label="账号">Two Panel</s-tabs-panel>
          <s-tabs-panel label="游戏币">Three Panel</s-tabs-panel>
          <s-tabs-panel label="装备道具">Three Panel</s-tabs-panel>
        </s-tabs>
      </s-popup>
      <!-- /商品类别 -->

      <!-- 服务器 -->
      <s-popup class="goods-popup server-popup" v-model="serverVisible" direction="top">
        <s-tabs direction="vertical">
          <s-tabs-panel label="全部">

            <s-search placeholder="服务器名称/数字" text="搜索"></s-search>

            <s-cell>1区【QQ】 </s-cell>
            <s-cell>1区【QQ】 </s-cell>
            <s-cell>1区【QQ】 </s-cell>
            <s-cell>1区【QQ】 </s-cell>
            <s-cell>1区【QQ】 </s-cell>
            <s-cell>1区【QQ】 </s-cell>
          </s-tabs-panel>
          <s-tabs-panel label="账号">Two Panel</s-tabs-panel>
          <s-tabs-panel label="游戏币">Three Panel</s-tabs-panel>
          <s-tabs-panel label="装备道具">Three Panel</s-tabs-panel>
        </s-tabs>
      </s-popup>
      <!-- /服务器 -->

      <!-- 筛选排序 -->
      <s-popup class="goods-popup sort-popup" v-model="sortVisible" direction="top">
        <s-cell>价格范围
          <input class="sort-popup-number" min="0" type="number">至
          <input class="sort-popup-number" min="0" type="number">元
        </s-cell>
        <s-cell>排序方式</s-cell>

        <div class="s-radio-list">
          <label class="s-radio-item">
            <input class="s-radio-check" type="radio" name="sort">
            <span class="s-radio-title">默认</span>
            <span class="s-radio-desc">按发布时间排序</span>
          </label>
          <label class="s-radio-item">
            <input class="s-radio-check" type="radio" name="sort">
            <span class="s-radio-title">价格↑</span>
            <span class="s-radio-desc">按价格从低到高排序</span>
          </label>
          <label class="s-radio-item">
            <input class="s-radio-check" type="radio" name="sort">
            <span class="s-radio-title">价格↓</span>
            <span class="s-radio-desc">按价格从高到低排序</span>
          </label>
          <label class="s-radio-item">
            <input class="s-radio-check" type="radio" name="sort">
            <span class="s-radio-title">单价↑</span>
            <span class="s-radio-desc">按价格从低到高排序</span>
          </label>
        </div>

        <div class="sort-popup-tool">
          <s-button size="sm" type="default">清空</s-button>
          <s-button size="sm" outline>确定</s-button>
        </div>

      </s-popup>
      <!-- /筛选排序 -->

      <!-- 商品列表 -->
      <section class="s-goodsList-wrap">
        <s-goods-list></s-goods-list>
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
  import '@/styles/goods.scss';
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

        categoryVisible: null,
        categoryModel: null,
        categoryText: '商品类别',

        serverVisible: null,
        serverModel: null,
        serverText: '服务器',

        sortVisible: null,
        sortModel: null,
        sortText: '筛选排序'
      }
    },
    methods: {
      phoneChose () {
        this.phoneVisible = !this.phoneVisible;
      },
      categoryChose () {
        this.categoryVisible = !this.categoryVisible;
      },
      serverChose () {
        this.serverVisible = !this.serverVisible;
      },
      sortChose () {
        this.sortVisible = !this.sortVisible;
      }
    }
  }
</script>
