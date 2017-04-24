// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import './styles';
import sView from './components';
import App from './App.vue';
import router from './router';
import store from './store';
import resource from 'vue-resource';
import './untils/promise';

Vue.config.productionTip = false;

Vue.use(sView);

Vue.use(resource);

// 工厂函数
Vue.http.interceptors.push(function (request, next) {

  let loading = null;

  if (request.method === 'POST' && !/(\.\w{2,3})/.test(request.url)) {

    // mock
    //request.url = 'http://mock.youximao.cn/mockjsdata/58' + request.url;


    // 文斐
    request.url = 'http://192.168.2.133:8081' + request.url;
  }
  if (request.loading) {
    //loading = this.$Message.loading(typeof request.loading === 'string' ? request.loading : '加载中');
  }
  next(function (response) {

    console.log(response);

    // 移除loading
    loading && loading.remove();

    // 请求错误，包括404等
    if (response.status !== 200) {
      let message = '';
      switch (response.status) {
        case 0:
          message = '网络错误, 请稍后重试！';
          break;
        case 500:
          message = '服务器错误, 请稍后重试！';
          break;

        default:
          message = '未知错误, 请稍后重试！';
          break;

      }
      this.$Message.error(response.statusText || message);
    } else {

      // 请求正确，单因为参数不正确获取服务器错误等因素
      if (response.body && response.body.code && response.body.code !== '000') {
        this.$Message.warning(response.body.message);
      }

    }

    return response;
  });

});

window.app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});
