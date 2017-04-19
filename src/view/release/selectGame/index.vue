<!--
 - 选择游戏
 -
 - author: Storm
 - date: 2017/04/17
 -->

<template>

  <div id="app">
    <s-header>选择游戏</s-header>

    <s-main bgc="white">

      <s-search placeholder="请输入游戏名称"></s-search>

      <div class="content-lg">

        <section class="searchGame-history section">
          <h3 class="section-title">最近搜索</h3>
          <s-cell padding="0">
            <s-icon type="timefill"></s-icon>
            <span>王者荣耀</span>
            <span slot="right"><s-icon type="close"></s-icon></span>
          </s-cell>
          <s-cell padding="0">
            <s-icon type="timefill"></s-icon>
            刀锋战士
            <span slot="right"><s-icon type="close"></s-icon></span>
          </s-cell>
          <s-cell padding="0">
            <s-icon type="timefill"></s-icon>
            罗马帝国复兴
            <span slot="right"><s-icon type="close"></s-icon></span>
          </s-cell>
        </section>

        <section class="section">

          <h3 class="section-title">热门游戏</h3>

          <ul class="game game-grid">
            <li class="game-item">
              <img class="game-icon" src="http://img.la/100x100?s=demo">
              <p class="game-name">时空猎人</p>
            </li>
            <li class="game-item">
              <img class="game-icon" src="http://img.la/100x100?s=demo">
              <p class="game-name">时空猎人</p>
            </li>
            <li class="game-item">
              <img class="game-icon" src="http://img.la/100x100?s=demo">
              <p class="game-name">时空猎人</p>
            </li>
            <li class="game-item">
              <img class="game-icon" src="http://img.la/100x100?s=demo">
              <p class="game-name">时空猎人</p>
            </li>
            <li class="game-item">
              <img class="game-icon" src="http://img.la/100x100?s=demo">
              <p class="game-name">时空猎人</p>
            </li>
            <li class="game-item">
              <img class="game-icon" src="http://img.la/100x100?s=demo">
              <p class="game-name">时空猎人</p>
            </li>
          </ul>

        </section>

      </div>

    </s-main>
  </div>

</template>

<script>
  import Search from '@/components/search';
  import '../release.scss';
  export default {
    name: 'SelectGame',
    components: {
      sSearch: Search
    },
    props: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>
