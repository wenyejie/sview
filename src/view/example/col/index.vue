<!--
 - author: Storm
 - date: 2017/03/31
 -->

<template>
  <div class="ColExample">
    <h1>Col</h1>

    <section>
      <h3 class="example-title">span - 默认</h3>
      <s-row :gutter="10">
        <s-col :span="6" class="ColExample-col">DMEO</s-col>
        <s-col :span="6" class="ColExample-col">DMEO</s-col>
        <s-col :span="6" class="ColExample-col">DMEO</s-col>
        <s-col :span="6" class="ColExample-col">DMEO</s-col>
      </s-row>
    </section>

    <section>
      <h3 class="example-title">offset - 偏移</h3>
      <s-row gutter="10">
        <s-col span="6" class="ColExample-col">DMEO</s-col>
        <s-col span="6" offset="6" class="ColExample-col">DMEO</s-col>
        <s-col span="6" class="ColExample-col">DMEO</s-col>
      </s-row>
    </section>

    <section>
      <h3 class="example-title">justify - 对齐方式</h3>
      <s-row gutter="10" justify="left">
        <s-col span="6" class="ColExample-col">DMEO</s-col>
        <s-col span="6" class="ColExample-col">DMEO</s-col>
        <s-col span="6" class="ColExample-col">DMEO</s-col>
      </s-row>
      <s-row gutter="10" justify="center">
        <s-col span="6" class="ColExample-col">DMEO</s-col>
        <s-col span="6" class="ColExample-col">DMEO</s-col>
        <s-col span="6" class="ColExample-col">DMEO</s-col>
      </s-row>
      <s-row gutter="10" justify="right">
        <s-col span="6" class="ColExample-col">DMEO</s-col>
        <s-col span="6" class="ColExample-col">DMEO</s-col>
        <s-col span="6" class="ColExample-col">DMEO</s-col>
      </s-row>
      <s-row gutter="10" justify="between">
        <s-col span="6" class="ColExample-col">DMEO</s-col>
        <s-col span="6" class="ColExample-col">DMEO</s-col>
        <s-col span="6" class="ColExample-col">DMEO</s-col>
      </s-row>
      <s-row gutter="10" justify="around">
        <s-col span="6" class="ColExample-col">DMEO</s-col>
        <s-col span="6" class="ColExample-col">DMEO</s-col>
        <s-col span="6" class="ColExample-col">DMEO</s-col>
      </s-row>
    </section>

    <section>
      <h3 class="example-title">responsive - 响应式</h3>
      <s-row gutter="10" justify="left">
        <s-col xs="24" sm="16" md="8" lg="4" class="ColExample-col">DMEO</s-col>
      </s-row>
    </section>

    <section>
      <h3 class="example-title">align-self - 子元素对齐方式</h3>
      <s-row gutter="10" justify="left">
        <s-col span="8" class="ColExample-col">
          <div style="height: 100px"></div>
        </s-col>
        <s-col align="top" span="8" class="ColExample-col">
          <div style="height: 80px">top</div>
        </s-col>
        <s-col span="8" class="ColExample-col">
          <div style="height: 120px"></div>
        </s-col>
      </s-row>
      <s-row gutter="10" justify="left">
        <s-col span="8" class="ColExample-col">
          <div style="height: 100px"></div>
        </s-col>
        <s-col align="center" span="8" class="ColExample-col">
          <div style="height: 80px">center</div>
        </s-col>
        <s-col span="8" class="ColExample-col">
          <div style="height: 120px"></div>
        </s-col>
      </s-row>
      <s-row gutter="10" justify="left">
        <s-col span="8" class="ColExample-col">
          <div style="height: 100px"></div>
        </s-col>
        <s-col align="bottom" span="8" class="ColExample-col">
          <div style="height: 80px">bottom</div>
        </s-col>
        <s-col span="8" class="ColExample-col">
          <div style="height: 120px"></div>
        </s-col>
      </s-row>
      <s-row gutter="10" justify="left">
        <s-col span="8" class="ColExample-col">
          <div style="height: 100px"></div>
        </s-col>
        <s-col align="stretch" span="8" class="ColExample-col">
          <div style="height: 80px">stretch</div>
        </s-col>
        <s-col span="8" class="ColExample-col">
          <div style="height: 120px"></div>
        </s-col>
      </s-row>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'ColExample',
    props: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .s-row + .s-row {
    margin-top: 15px;
  }
  .ColExample-col {
    min-height: 36px;
    line-height: 36px;
    text-align: center;
  }
  .ColExample-col:nth-child(odd) {
    background-color: #d3dce6;
  }
  .ColExample-col:nth-child(even) {
    background-color: #e5e9f2;
  }
</style>
