<!--
 - Title
 -
 - author: Storm
 - date: 2017/04/10
 -->

<template>
  <div class="TabsExample">
    <s-header title="Tabs"></s-header>
    <section>
      <h3>horizontal - 水平</h3>
      <s-tabs >
        <s-tabs-panel label="One">One Panel</s-tabs-panel>
        <s-tabs-panel label="Two">Two Panel</s-tabs-panel>
        <s-tabs-panel label="Three">Three Panel</s-tabs-panel>
      </s-tabs>
    </section>

    <section>
      <h3>vertical - 垂直</h3>
      <s-tabs direction="vertical">
        <s-tabs-panel label="One">One Panel</s-tabs-panel>
        <s-tabs-panel label="Two">Two Panel</s-tabs-panel>
        <s-tabs-panel label="Three">Three Panel</s-tabs-panel>
      </s-tabs>
    </section>

  </div>
</template>

<script>
  import Tabs from '../../components/tabs';
  import TabsPanel from '../../components/tabsPanel';
  export default {
    name: 'TabsExample',
    components: {
      sTabs: Tabs,
      sTabsPanel: TabsPanel
    },
    props: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>
