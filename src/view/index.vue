<template>

  <div id="app">
    <s-header>
      <div slot="right">
        <a href="">个人中心</a>
        <span class="header-line">|</span>
        <router-link to="/release/selectGame">我要卖</router-link>
      </div>
    </s-header>

    <s-main>

      <swiper :options="swiperOpts" class="index-swiper">

        <swiper-slide><img src="http://img.la/640x300?s=demo"></swiper-slide>
        <swiper-slide><img src="http://img.la/640x300?s=demo"></swiper-slide>
        <swiper-slide><img src="http://img.la/640x300?s=demo"></swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <s-link to="/release">全部商品</s-link>
      <s-link to="/goods?gameId=27&gameName=阴阳师">阴阳师</s-link>
      <s-link to="/goods?gameId=28&gameName=九阴真经3D">九阴真经3D</s-link>

    </s-main>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import './index.scss';
  export default {
    name: 'Home',
    components: {
      swiper,
      swiperSlide,
    },
    data () {
      return {
        swiperOpts: {
          pagination: '.swiper-pagination'
        },
      }
    }
  }
</script>
