<!--
 - steps example
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>

  <div id="app" class="selectArea">
    <s-header>Steps</s-header>

    <s-main>

      <s-steps :active="1" status="error">
        <s-step label="发布成功,等待商品审核">03-30 14:53</s-step>
        <s-step label="审核通过，商品自动上架">约30分钟</s-step>
        <s-step label="等待玩家购买"></s-step>
      </s-steps>

    </s-main>
  </div>

</template>

<script>
  import steps from '@/components/steps';
  import step from '@/components/step';
  export default {
    name: 'stepsExample',
    components: {
      sSteps: steps,
      sStep: step
    },
    props: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>
