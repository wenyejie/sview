<!--
 - 填写寄售账号信息
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>

  <div id="app">
    <s-header>选择游戏</s-header>

    <s-main>

      <form novalidate>

        <s-cell-intro icon="warning"><span class="c-primary">谨防受骗：请勿向任何人泄露您的账号密码！</span></s-cell-intro>

        <s-form-control required label="游戏账号">
          <input type="text" placeholder="请输入游戏账号">
        </s-form-control>

        <s-form-control required label="游戏密码">
          <input type="text" placeholder="请输入游戏密码">
        </s-form-control>

        <s-form-control required label="解锁密码">
          <input type="text" placeholder="请输入解锁密码">
        </s-form-control>

        <s-form-control required label="角色名称">
          <input type="text" placeholder="请输入角色名称">
        </s-form-control>

        <s-form-select
          label="交易设定"
          placeholder="请选择"
          required></s-form-select>

        <s-cell-intro>我是提示信息,我是提示信息,我是提示信息,我是提示信息,我是提示信息,我是提示信息,我是提示信息,</s-cell-intro>

        <s-form-control required label="联系手机">
          <input type="tel" placeholder="请输入联系手机">
        </s-form-control>

        <s-cell-intro>【寄售交易】由闪电虎发货客服代替您给买家发货（7x24小时服务），快速完成交易。</s-cell-intro>

        <s-main-down>
          <s-radio
            style="margin-left: .22rem;"
            class="c-9"
            size="sm">已阅读<a href="javascript:;" class="c-primary">&lt;闪电虎手机网游服务平台服务协议&gt;</a></s-radio>

          <s-button type="primary" block class="mt-30">下一步</s-button>
        </s-main-down>

      </form>

    </s-main>
  </div>

</template>

<script>
  import FormControl from '@/components/formControl';
  import FormSelect from '@/components/formSelect';
  import MainDown from '@/components/mainDown';
  export default {
    name: 'accountInfo',
    components: {
      sFormControl: FormControl,
      sFormSelect: FormSelect,
      sMainDown: MainDown
    },
    props: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>
