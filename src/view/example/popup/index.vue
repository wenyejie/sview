<!--
 - PopupExample
 -
 - author: Storm
 - date: 2017/04/10
 -->

<template>
  <div class="PopupExample">
    <s-header title="Popup"></s-header>

    <s-popup v-model="visible">
      <s-button
        shape="angle"
        type="primary"
        @click="visible = false"
        block
        size="lg"
      >hide</s-button>
    </s-popup>

    <section>
      <h3>default - 默认</h3>
      <s-button type="primary" @click="visible = true">show</s-button>
    </section>
  </div>
</template>

<script>
  import Popup from '../../../components/popup';
  export default {
    name: 'PopupExample',
    components: {
      sPopup: Popup
    },
    props: {},
    data () {
      return {
        visible: false
      }
    },
    methods: {}
  }
</script>

<style scoped>
</style>
