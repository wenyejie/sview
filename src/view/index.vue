<template>

  <div id="app">
    <s-header>
      <template slot="left"></template>
      <template slot="right">
        <router-link to="/personal">个人中心</router-link>
        <span class="header-line">|</span>
        <router-link to="/release/selectGame">我要卖</router-link>
      </template>
    </s-header>

    <s-main>

      <swiper :options="swiperOpts" class="index-swiper">

        <swiper-slide><img src="http://img.la/640x300?s=demo"></swiper-slide>
        <swiper-slide><img src="http://img.la/640x300?s=demo"></swiper-slide>
        <swiper-slide><img src="http://img.la/640x300?s=demo"></swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <div class="index-message">
        <a href="">
          <img src="../assets/icon-message.png">
          亲，您有待取货的订单哦，赶紧去取货吧！<span>点击进入</span>
        </a>
      </div>

      <s-search text="搜索" @on-click="searchGame"></s-search>

      <s-row class="index-menu">
        <s-col span="6">
          <a class="index-menu-link" href="">
            <img class="index-menu-icon" src="../assets/menu-account.png">
            <p class="index-menu-name">账号</p>
          </a>
        </s-col>
        <s-col span="6">
          <a class="index-menu-link" href="">
            <img class="index-menu-icon" src="../assets/menu-gameCurrency.png">
            <p class="index-menu-name">游戏币</p>
          </a>
        </s-col>
        <s-col span="6">
          <a class="index-menu-link" href="">
            <img class="index-menu-icon" src="../assets/menu-equipment.png">
            <p class="index-menu-name">装备道具</p>
          </a>
        </s-col>
        <s-col span="6">
          <a class="index-menu-link" href="">
            <img class="index-menu-icon" src="../assets/menu-illustrate.png">
            <p class="index-menu-name">交易指南</p>
          </a>
        </s-col>
      </s-row>


      <section class="index-hotGame">
        <h3 class="index-title"><span>热门游戏</span></h3>
        <s-game-grid>
          <s-game-grid-item></s-game-grid-item>
          <s-game-grid-item></s-game-grid-item>
          <s-game-grid-item></s-game-grid-item>
          <s-game-grid-item></s-game-grid-item>
        </s-game-grid>
      </section>

      <div class="index-notice">
        <h3 class="index-title"><span>公告区</span></h3>

        <ul>
          <li>我是公告内容我是公告内容我是公告内容</li>
          <li>我是公告内容我是公告内容我是公告内容我是公告我是公告内容我是公告内容我是公告内容我是公告</li>
          <li>我是公告内容我是公告内容我是公告内容我是公告</li>
        </ul>
      </div>

      <footer class="index-copyright">
        <p>闪电虎，真诚为您服务</p>
        <p>7*24小时 全天候快速、安全服务</p>
        <p>www.shandianhu.com</p>
      </footer>

    </s-main>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import {gameGrid, gameGridItem} from '@/components/gameGrid';
  import search from '@/components/search';
  import './index.scss';
  export default {
    name: 'Home',
    components: {
      swiper,
      swiperSlide,
      sGameGrid: gameGrid,
      sGameGridItem: gameGridItem,
      sSearch: search
    },
    data () {
      return {
        swiperOpts: {
          pagination: '.swiper-pagination'
        },
      }
    },
    methods: {
      searchGame () {
        this.$router.push({
          path: '/search'
        })
      }
    }
  }
</script>
