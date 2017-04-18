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

      <section>
        <s-cell-intro icon="warning">请认真填写您出售的商品信息，让买家快速了解并下单，可大大提高成功交易机会。</s-cell-intro>
        <s-cell>
          <span class="text-primary">*&nbsp;</span>上传图片
          <s-radio-group v-model="hasImage" slot="right">
            <s-radio :label="true" name="city">有图</s-radio>
            <s-radio :label="false" name="city">无图</s-radio>
          </s-radio-group>
        </s-cell>
        <s-cell-intro>单张图片不能超过10MB，最多可以上传10张图片</s-cell-intro>
        <s-form-select required>宝石名称</s-form-select>
      </section>

    </s-main>
  </div>


</template>

<script>
  import FormSelect from '@/components/formSelect';
  export default {
    name: 'goodsInfo',
    components: {
      sFormSelect: FormSelect
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
