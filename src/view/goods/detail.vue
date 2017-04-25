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
        <router-link to="/release/selectGame">我要卖</router-link>
      </template>
    </s-header>

    <s-main bgc="white">

      <swiper class="goodsDetail-swiper" :options="swiperOpts" v-if="goods.picUrls.length >= 1">

        <swiper-slide v-for="(item, index) in goods.picUrls" :key="index"><img :src="item"></swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <header class="goodsDetail-header">

        <h3>
          <s-label :type="goodsType">{{goods.subClassName}}</s-label>
          {{goods.title}}
        </h3>

        <s-row justify="between" align="center">
          <s-col class="goodsDetail-price">￥{{goods.price}}</s-col>
          <s-col class="goodsDetail-first" v-if="goods.goodsClassId === 1">首次出售</s-col>
        </s-row>

      </header>

      <s-popup v-model="guarantee" class="goodsDetail-guarantee" position="fixed">
        <s-cell size="md">服务保障</s-cell>
        <s-cell size="md">
          <div class="goodsDetail-consignment"></div>
          <div>
            <h5>寄售交易</h5>
            <p>货在闪电虎，付款后由客服发货。</p>
          </div>
        </s-cell>
        <s-cell size="md">
          <div class="goodsDetail-service"></div>
          <div>
            <h5>寄售交易</h5>
            <p>货在闪电虎，付款后由客服发货。</p>
          </div>
        </s-cell>
        <div class="goodsDetail-guarantee-bottom">
          <s-button type="primary" block @click="guarantee = false" shape="angle">完成</s-button>
        </div>
      </s-popup>

      <s-attr label="服务保障" link @click="guarantee = true">寄售交易</s-attr>

      <s-attr label="基本信息">{{goods.plantform}}系统-{{goods.clientName}}-{{goods.domainName}}</s-attr>

      <s-attr v-for="(item, index) in goods.goodsExtInfoList"
              :key="index"
              :label="item.name">{{item.value}}</s-attr>

      <s-attr label="密保绑定" v-if="goods.sellerTradeInfoList.length > 0">{{goods.sellerTradeInfoList.join('、')}}</s-attr>

      <s-panel class="s-panel-article goodsDetail-notify" title="免责声明" icon="notification">
        <p>1.所展示的商品供求信息由买卖双方自行提供，其真实性、准确性和合法性由信息发布人负责</p>
        <p>2.国家法律规定，未成年人不能参与虚拟物品交易</p>
      </s-panel>

      <s-suspension>
        <s-button type="primary" block shadow>立即购买</s-button>
      </s-suspension>

    </s-main>
  </s-app>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import label from '@/components/label';
  import attr from '@/components/attr';
  import suspension from '@/components/suspension';
  import goodsClass from '@/filters/goodsClass';
  import popup from '@/components/popup';
  import './detail.scss';
  export default {
    name: 'detail',
    components: {
      swiper,
      swiperSlide,
      sLabel: label,
      sAttr: attr,
      sSuspension: suspension,
      sPopup: popup
    },
    props: {},
    data () {
      return {
        swiperOpts: {
          pagination: '.swiper-pagination'
        },

        // 服务保障
        guarantee: null,

        loading: null,

        goodsId: null,

        goods: {
          picUrls: [],
          sellerTradeInfoList: []
        }
      }
    },
    computed: {
      goodsType () {
        return goodsClass(this.goods.goodsClassId, 'className');
      },
    },
    methods: {

      /**
       * 获取商品详情
       */
      getDetail () {
        if (this.loading) return false;
        this.loading = true;
        this
          .$http
          .post('/h5/goods/showGoodsInfo', {goodsId: this.goodsId})
          .then(response => {
            if (response.body.code !== '000') return false;
            this.goods = Object.assign({}, this.goods, response.body.data);
          })
          .finally(() => this.loading = false);
      }
    },

    created () {
      this.goodsId = parseInt(this.$route.query.goodsId);
      this.getDetail();
    }
  }
</script>
