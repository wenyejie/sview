<!--
 - 选择登录账号类型
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>
  <s-app>
    <s-header>选择登录账号类型</s-header>

    <s-main>

      <s-cell-intro>请选择登录账号类型：</s-cell-intro>
      <s-link v-for="item in accountTypes"
              @click="clientClick(item)"
              :to="`/release/accountInfo?accountTypeId=${item.accountTypeId}`"
              :key="item.gameAccountTypeId">{{item.gameAccountTypeName}}
      </s-link>

    </s-main>
  </s-app>
</template>

<script>

  import local from '@/untils/local';
  export default {
    name: 'SelectAccount',
    props: {},
    data () {
      return {
        accountTypes: []
      }
    },
    methods: {

    },

    created () {
      this.accountTypes = local.get('releaseAccountTypes');
    }
  }
</script>
