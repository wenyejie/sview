<!--
 - card
 -
 - author: Storm
 - date: 2017/04/21
 -->

<template>
  <section class="s-card">
    <s-cell class="s-card-header" tag="header">
      <span class="s-card-time c-9">发布时间:{{goods.ctime | date}}</span>
      <!--<s-button size="xs" type="default">复制</s-button>-->
      <!--<template slot="right"><span class="s-card-type c-9">发货中</span></template>-->
    </s-cell>
    <s-link to="javascript:;" class="s-card-body" size="lg">
      <div class="s-card-left">
        <h4 class="s-card-title">
          <s-icon v-if="goods.showType !== 1" type="picfill" size="34" color="#81C8E4" class="text-middle"></s-icon>
          <s-label :class="classClasses">{{goods.className}}</s-label>
          <span class="s-card-title-inner">{{goods.showTitle}}</span>
        </h4>
        <div class="s-card-desc">{{goods.gameName}}-{{goods.serverName}}</div>
      </div>

    </s-link>
    <s-cell class="s-card-other">
      <div class="s-card-storge">库存:{{goods.storage}}</div>
      <div slot="right" class="s-card-storge">总价:<span style="color: #fd802c">¥{{goods.price}}</span></div>
    </s-cell>
    <s-cell class="s-card-footer" tag="footer">
      <!--<div class="s-card-confirm">最晚确认时间：xx小时</div>-->
      <div class="s-card-tool" slot="right">
        <template v-if="goods.status === 1 || goods.status === 2">
          <s-button type="default" size="sm">下架</s-button>
        </template>
        <template v-if="goods.status === 3">
          <s-button type="default" size="sm" @click="modify">修改信息</s-button>
          <s-button type="default" outline size="sm">重新上架</s-button>
        </template>
        <!--<s-button type="default" outline size="sm">重新上架</s-button>-->
      </div>
    </s-cell>
  </section>
</template>

<script>
  import Label from '@/components/label';
  import date from '@/filters/date';

  /* AUDITING(1, "审核中"),HAS_PUTAWAY(2, "已上架"),UNDER(3, "已下架"), */


  /* case 1: return '账号';case 2: return '道具';case 3: return '游戏币'; */
  const classClss = [
    {
      classId: 1,
      className: 'primary'
    },
    {
      classId: 2,
      className: 'info'
    },
    {
      classId: 3,
      className: 'warning'
    },
  ];
  export default {
    name: 'Card',
    components: {
      sLabel: Label
    },
    filters: {
      date: date
    },
    props: {
      goods: {
        type: Object
      }
    },
    data () {
      return {
        up
      }
    },
    computed: {
      classClasses () {
        const cls = classClss.find(item => item.classId = this.goods.classId);
        return [`s-label-${cls.className}`];
      }
    },
    methods: {

      // 修改
      modify () {
        this.$router.push({
          path: 'goodsInfo',
          query: {
            goodsId: this.goods.goodsId
          }
        });
      },

      /**
       * 商品赏析家
       * @param goodsStatus 3-up 4-down
       */
      shelf (goodsStatus) {
        return new Promise((resolve, reject) => {
          this
            .$http
            .post('/h5/goods/upOrDownGoods', {
              goodsId: this.goods.goodsId,
              goodsStatus: goodsStatus
            })
            .then(response => {
              if (response.body.code !== '000') reject();
              resolve();
            }, reject);
        });
      },

      // 上架
      up () {
        this
          .shelf(3)
          .then(() => {
            this.$Message.success('商品上架成功！');
          });
      },

      // 下架
      down () {
        this
          .shelf(4)
          .then(() => {
            this.$Message.success('商品下架成功！');
          });
      }
    }
  }
</script>
