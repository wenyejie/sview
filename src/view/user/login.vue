<!--
 - Login 登录
 -
 - author: Storm
 - date: 2017/04/27
 -->

<template>

  <s-app>

    <s-header title="登录" type="white"></s-header>

    <s-main bgc="white">

      <div class="content">

        <s-input block placeholder="请输入账号" v-model="account"></s-input>

        <s-input block placeholder="请输入账号" type="password" v-model="password"></s-input>

        <s-button type="primary" block>登录</s-button>

      </div>

    </s-main>

  </s-app>

</template>

<script>

  import Input from '@/components/input';
  import './user.scss';
  export default {
    name: 'name',
    components: {
      sInput: Input
    },
    props: {},
    data () {
      return {
        account: '',
        password: ''
      }
    },
    computed: {
      validator () {
        return {
          account: this.account && this.account.length >= 11
        }
      }
    },
    watch: {
      account (val, oldValue) {
        console.log(val, this.account)
      }
    },
    methods: {},

    created () {
      console.log(this);
    }
  }
</script>
