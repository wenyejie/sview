<!--
 - 商品详情
 -
 - author: Storm
 - date: 2017/04/23
 -->

<template>

  <s-app>

    <s-header>游戏名称
      <template slot="right">
        <router-link to="">我要卖</router-link>
      </template>
    </s-header>

    <s-main bgc="white">

      <swiper class="goodsDetail-swiper">
        <swiper-slide><img src="//img.la/640x400?s=demo0"></swiper-slide>
        <swiper-slide><img src="//img.la/640x400?s=demo1"></swiper-slide>
        <swiper-slide><img src="//img.la/640x400?s=demo2"></swiper-slide>
      </swiper>

      <header class="goodsDetail-header">

        <h3>
          <s-label>360账号</s-label>
          召唤师.166级 182万装备升满可带人装召唤师.166级 182万装备升满可带人装
        </h3>

        <s-row justify="between" align="center">
          <s-col class="goodsDetail-price">￥78.0</s-col>
          <s-col class="goodsDetail-first">首次出售</s-col>
        </s-row>

      </header>

      <s-attr label="服务保障" link>寄售交易</s-attr>
      <s-attr label="基本信息">安卓系统-360客户端-131区</s-attr>
      <s-attr label="角色等级">166级</s-attr>
      <s-attr label="角色职业">狂战士</s-attr>
      <s-attr label="VIP等级">21</s-attr>
      <s-attr label="战斗力">18万</s-attr>
      <s-attr label="密保绑定">密保手机、密保邮箱、密保问题</s-attr>
      <s-attr label="补充描述">看图，诚心买的拍看图，诚心买的拍
        看图，诚心买的拍看图，诚心买的拍
        看图，诚心买的拍看图，诚心买的拍
        看图，诚心买的拍看图，诚心买的拍
        看图，诚心买的拍看图，诚心买的拍</s-attr>

    </s-main>
  </s-app>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import label from '@/components/label';
  import attr from '@/components/attr';
  import './detail.scss';
  export default {
    name: 'detail',
    components: {
      swiper,
      swiperSlide,
      sLabel: label,
      sAttr: attr
    },
    props: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>
