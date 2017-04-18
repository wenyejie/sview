<!--
 - 填写商品描述
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>

  <div id="app" class="goodsInfo">
    <s-header>填写商品描述</s-header>

    <s-main>

      <form name="goodsInfo">
        <s-cell-intro icon="warning">请认真填写您出售的商品信息，让买家快速了解并下单，可大大提高成功交易机会。</s-cell-intro>
        <s-cell>
          <span class="text-primary">*&nbsp;</span>上传图片
          <s-radio-group v-model="hasImage" slot="right">
            <s-radio :label="true" name="city">有图</s-radio>
            <s-radio :label="false" name="city">无图</s-radio>
          </s-radio-group>
        </s-cell>

        <s-cell-intro>单张图片不能超过10MB，最多可以上传10张图片</s-cell-intro>

        <s-form-control label="宝石名称">
          <select required name="name">
            <option value="">请选择</option>
            <option value="">提尔之石</option>
            <option value="">赫尔精之石</option>
            <option value="">氟利嘉之石</option>
            <option value="">须弥之石</option>
          </select>
        </s-form-control>

        <s-form-control label="宝石数量">
          <input type="number" placeholder="请输入数量">
        </s-form-control>

        <s-form-control label="商品价格">
          <input type="number" min="1" placeholder="请输入数量">
        </s-form-control>

        <s-cell-intro>商品价格必须大于1</s-cell-intro>

        <s-form-control label="库存">
          <input type="number" placeholder="请输入库存数量">
        </s-form-control>

        <s-form-control label="商品描述">
          <input type="text" placeholder="请输入商品描述">
        </s-form-control>

      </form>

    </s-main>
  </div>


</template>

<script>
  import FormControl from '@/components/formControl';
  export default {
    name: 'goodsInfo',
    components: {
      sFormControl: FormControl
    },
    props: {},
    data () {
      return {
        hasImage: true
      }
    },
    methods: {}
  }
</script>
