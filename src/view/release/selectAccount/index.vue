<!--
 - 选择登录账号类型
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>
  <div id="app">
    <s-header>选择登录账号类型</s-header>

    <s-main>

      <s-cell-intro>请选择登录账号类型：</s-cell-intro>
      <s-link v-for="item in accountTypes"
              @click="clientClick(item)"
              :to="`/release/accountInfo?accountTypeId=${item.accountTypeId}`"
              :key="item.gameAccountTypeId">{{item.gameAccountTypeName}}
      </s-link>

    </s-main>
  </div>
</template>

<script>

  import local from '@/untils/local';
  export default {
    name: 'SelectAccount',
    props: {},
    data () {
      return {
        getAccountTypeLoading: null,
        clientId: null,
        accountTypes: []
      }
    },
    methods: {

      // 获取账号类型
      getAccountType () {

        if (this.getAccountTypeLoading) return false;
        this.getAccountTypeLoading = true;

        this
          .$http
          .post('/h5/seller/publish/queryAccountTypeInfo', {
            clientId: this.clientId
          }, {
            loading: true
          })
          .then(response => {
            if (response.body.code !== '000') return false;
            this.accountTypes = response.body.data.list;
          })
          .finally(() => {
            this.getAccountTypeLoading = false;
          });

      }

    },

    created () {
      this.clientId = local.get('releaseInfo').clientId;
      this.getAccountType();
    }
  }
</script>
