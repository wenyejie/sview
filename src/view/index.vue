<template>

  <div id="app">
    <s-header>
      <div slot="right">
        <a href="">个人中心</a>
        <span class="header-line">|</span>
        <router-link to="/release/selectGame">我要卖</router-link>
      </div>
    </s-header>

    <s-main>

      <s-link to="/release">全部商品</s-link>
      <s-link to="/goods?gameId=27&gameName=阴阳师">阴阳师</s-link>
      <s-link to="/goods?gameId=28&gameName=九阴真经3D">九阴真经3D</s-link>

    </s-main>
  </div>
</template>

<script>
  import Header from '../components/header';
  export default {
    name: 'Home',
    components: {
      sHeader: Header
    },
    data () {
      return {
        msg: 'Welcome to sview'
      }
    }
  }
</script>
