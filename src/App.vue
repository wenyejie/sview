<template>
  <div id="app">
    <h1>SVIEW</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;

  & h1 {
    font-size: 80px;
    border-bottom: 1px solid #d7dde4;
    margin-bottom: 30px;
  }
}
</style>
