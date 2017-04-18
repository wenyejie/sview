<template>
  <div class="hello">

    <s-header>
      <div slot="right">
        <a href="">个人中心</a>
        <span class="header-line">|</span>
        <router-link to="/release/selectGame">我要卖</router-link>
      </div>
    </s-header>

    <div style="display: inline-block;">
      <span style="width: 5px; display: inline-block;"></span>
      <span></span>
      <span style="width: 5px; display: inline-block;"></span>
    </div>

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
