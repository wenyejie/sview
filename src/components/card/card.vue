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
      <template slot="right"><span class="s-card-type c-9">{{goods.status | statusLabel}}</span></template>
    </s-cell>
    <s-link to="javascript:;" class="s-card-body" size="lg">
      <div class="s-card-left">
        <h4 class="s-card-title">
          <s-icon v-if="goods.showType !== 1" type="picfill" size="34" color="#81C8E4" class="text-middle"></s-icon>
          <s-label :type="classType">{{goods.className}}</s-label>
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
          <s-button type="default" size="sm" @click="down">下架</s-button>
        </template>
        <template v-if="goods.status === 3">
          <s-button type="default" size="sm" @click="modify">修改信息</s-button>
          <s-button type="default" outline size="sm" @click="up">重新上架</s-button>
        </template>
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
      type: 'primary'
    },
    {
      classId: 2,
      type: 'info'
    },
    {
      classId: 3,
      type: 'warning'
    },
  ];

  // 属性标签
  const statusLabel = (status) => {
    switch (status) {
      case 3:
        return '已下架';
      default:
        return '';
    }
  };
  export default {
    name: 'Card',
    components: {
      sLabel: Label
    },
    filters: {
      date,
      statusLabel,
    },
    props: {
      goods: {
        type: Object
      }
    },
    data () {
      return {
        uping: null,
        downing: null
      }
    },
    computed: {
      classType () {
        const cls = classClss.find(item => item.classId === this.goods.classId);
        return cls.type;
      }
    },
    methods: {

      // 修改
      modify () {
        this.$router.push({
          path: 'goodsModify',
          query: {
            goodsId: this.goods.goodsId
          }
        });
      },

      /**
       * 商品上下架
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
        if (this.uping) return false;
        this.uping = true;
        this
          .shelf(3)
          .then(() => {
            this.$Message.success('商品上架成功！');
            this.$emit('on-remove');
          })
          .finally(() => this.uping = false);
      },

      // 下架
      down () {
        if (this.downing) return false;
        this.downing = true;
        this
          .shelf(4)
          .then(() => {
            this.$Message.success('商品下架成功！');
            this.$emit('on-remove');
          })
          .finally(() => this.downing = false);
      }
    }
  }
</script>
