// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './styles';
import sView from './components';
import App from './App.vue';
import router from './router';
import store from './store';
import resource from 'vue-resource';

Vue.config.productionTip = false;

Vue.use(sView);

Vue.use(resource);

// 工厂函数
Vue.http.interceptors.push(function ( request, next ) {

  let loading = null;

  if (request.method === 'POST' && !/(\.\w{2,3})/.test(request.url)) {
    request.url = 'http://mock.youximao.cn/mockjsdata/58' + request.url;
  }
  if (request.loading) {
    loading = this.$Message.loading(typeof request.loading === 'string' ? request.loading : '加载中');
  }
  next(function (response) {

    // 移除loading
    loading && loading.remove();

    // 请求错误，包括404等
    if (response.status !== 200) {
      this.$Message.error(response.statusText);
    }

    //debugger;

    // 请求正确，单因为参数不正确获取服务器错误等因素
    if (response.body.code && response.body.code !== '000') {
      this.$Message.warning(response.body.message);
    }

    return response;
  });

});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
