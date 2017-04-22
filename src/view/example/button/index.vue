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
      <s-button type="link">Link</s-button>
      <s-button type="primary">Primary</s-button>
    </section>

    <section>
      <h3 class="example-title">shape - 形状</h3>
        <s-button type="primary">Default</s-button>
        <s-button shape="angle" type="primary">Angle</s-button>
    </section>

    <section>
      <h3 class="example-title">size - 大小</h3>
      <s-button size="lg" type="primary">Lg</s-button>
      <s-button type="primary">md</s-button>
      <s-button size="sm" type="primary">sm</s-button>
      <s-button size="xs" type="primary">xs</s-button>
    </section>

    <section>
      <h3 class="example-title">icon - 图标</h3>
      <s-button type="link" icon="favor">favor</s-button>
      <s-button type="primary" icon="roundclose">roundclose</s-button>
    </section>

    <section>
      <h3 class="example-title">disabled - 禁用</h3>
      <s-button disabled>Default</s-button>
      <s-button disabled type="primary">Primary</s-button>
    </section>

    <section>
      <h3 class="example-title">block - 块级</h3>
      <s-button block>Default</s-button>
      <s-button block type="primary">Primary</s-button>
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
