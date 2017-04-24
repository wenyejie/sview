<!--
 - goods list 商品列表
 -
 - author: Storm
 - date: 2017/04/23
 -->

<template>
  <router-link :to="`/goods/detail?goodsId=${goods.goodsId}`" class="s-goodsList">

    <!--<s-flag-group>-->
    <!--<s-flag>热门商品</s-flag>-->
    <!--<s-flag type="warning"><span>9.9</span>折</s-flag>-->
    <!--<s-flag type="info">闪电发货</s-flag>-->
    <!--</s-flag-group>-->

    <div class="s-goodsList-tags">
      <s-icon v-if="goods.showType === 2"
              type="picfill"
              color="#81C8E4"
              class="text-middle"></s-icon>
      <s-label :type="goddsType">{{goods.subClassName}}</s-label>
      <span class="s-goodsList-area">{{goods.domainName || goods.serverName || '全服通用'}}</span>
    </div>

    <h3 class="s-goodsList-title text-ellipsis" :style="styles">{{goods.showTitle}}</h3>

    <div class="s-goodsList-price">¥ {{goods.price}}</div>

  </router-link>
</template>

<script>
  import Flag from '@/components/flag';
  import FlagGroup from '@/components/flagGroup';
  import Label from '@/components/label';
  export default {
    name: 'goodsList',
    components: {
      sFlag: Flag,
      sFlagGroup: FlagGroup,
      sLabel: Label
    },
    props: {
      goods: Object
    },
    data () {
      return {}
    },
    methods: {},
    computed: {
      goddsType () {
        switch (this.goods.classId) {
          case 1:
            return 'primary';
          case 2:
            return 'info';
          case 3:
            return 'warning';
          default:
            return '';
        }
      },

      styles () {
        let result = {};
        if (/^【/.test(this.goods.showTitle)) result.marginLeft = '-.16rem';
        return result;
      }
    }
  }
</script>
