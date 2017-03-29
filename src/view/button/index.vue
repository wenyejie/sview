<!--
 - author: Storm
 - date: 2017/03/28
 -->

<template>
  <div class="buttonExample">
    <h1>Button</h1>

    <section>
      <h3 class="example-title">type - 类型</h3>
      <s-button>Default</s-button>
      <s-button type="primary">Primary</s-button>
      <s-button type="success">Success</s-button>
      <s-button type="warning">Warning</s-button>
      <s-button type="danger">Danger</s-button>
      <s-button type="info">Info</s-button>
    </section>

    <section>
      <h3 class="example-title">size - 大小</h3>
      <s-button size="lg" type="primary">Default</s-button>
      <s-button type="primary">Primary</s-button>
      <s-button size="sm" type="primary">Primary</s-button>
    </section>

    <section>
      <h3 class="example-title">disabled - 禁用</h3>
      <s-button disabled>Default</s-button>
      <s-button disabled type="primary">Primary</s-button>
      <s-button disabled type="success">Success</s-button>
      <s-button disabled type="warning">Warning</s-button>
      <s-button disabled type="danger">Danger</s-button>
      <s-button disabled type="info">Info</s-button>
    </section>

    <section>
      <h3 class="example-title">block - 块</h3>
      <s-button>Default</s-button>
      <s-button block>Default</s-button>
    </section>

    <section>
      <h3 class="example-title">icon - 图标</h3>
      <s-button icon="delete">Default</s-button>
      <s-button icon="appreciate" type="primary"></s-button>
      <s-button icon="check" type="success">Success</s-button>
      <s-button icon="close" type="warning">Warning</s-button>
      <s-button icon="edit" type="danger">Danger</s-button>
      <s-button icon="favor" type="info">Info</s-button>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'ButtonExample',
    props: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>
