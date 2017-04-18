/**
 * store
 *
 * author: Storm
 * date: 2017/04/18
 */


import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    mainDown: 0
  },
  mutations: {
    setting (state, obj) {
      state[obj.name] = obj.value;
    }
  }
});
