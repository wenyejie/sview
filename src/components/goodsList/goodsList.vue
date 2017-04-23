<!--
 - goods list 商品列表
 -
 - author: Storm
 - date: 2017/04/23
 -->

<template>
  <article class="s-goodsList">

    <div class="s-goodsList-flags">
      <s-flag>热门商品</s-flag>
      <s-flag type="warning"><span>9.9</span>折</s-flag>
      <s-flag type="info">闪电发货</s-flag>
    </div>

    <div class="s-goodsList-tags">
      <s-icon type="picfill" color="#81C8E4" class="text-middle"></s-icon>
      <s-label type="primary">账号</s-label>
      <s-label type="info">游戏币</s-label>
      <s-label type="warning">装备</s-label>
      <span class="s-goodsList-area">1036区</span>
    </div>

    <h3 class="s-goodsList-title text-ellipsis">召唤师.165级.V10 155万影武者全召唤师.</h3>

    <div class="s-goodsList-price">¥ 1222.0</div>

  </article>
</template>

<script>
  import Flag from '@/components/flag';
  import Label from '@/components/label';
  export default {
    name: 'goodsList',
    components: {
      sFlag: Flag,
      sLabel: Label
    },
    props: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>
