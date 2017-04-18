<template>

  <div id="app" class="selectArea">
    <s-header>
      <div slot="right">
        <a href="">个人中心</a>
        <span class="header-line">|</span>
        <router-link to="/release/selectGame">我要卖</router-link>
      </div>
    </s-header>

    <s-main bgc="gray">

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
