/**
 * store
 *
 * author: Storm
 * date: 2017/04/18
 */


import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {

  // 主要内容具体底部的padding-bottom
  mainDown: 0,

  // 服务区列表
  serviceAreas: [],

  // 发布信息
  releaseInfo: {}
};

// 在actions中调用
// 调用方法：commit('SET_RELEASE_INFO', obj);
const mutations = {
  setting (state, obj) {
    state[obj.name] = obj.value;
  },

  SETTING (state, obj) {
    state[obj.name] = obj.value;
  },

  SET_SERVICE_AREAS (state, obj) {
    state.serviceAreas = obj;
  },

  SET_RELEASE_INFO (state, obj) {
    state.releaseInfo = obj;
  }
};

// 在methods中调用
// 调用方法：// 通过dispatch分发到actions中，
// this.$store.dispatch('setReleaseInfo');
const actions = {
  setting({commit}, obj) {
    commit('SETTING', obj);
  },

  setReleaseInfo({commit}, obj) {
    commit('SET_RELEASE_INFO', obj);
  },

  setServiceAreas({commit}, obj) {
    commit('SET_SERVICE_AREAS', obj);
  }
};

// 在computed中调用
// 调用方法：this.$store.getters.releaseInfo
const getters = {
  mainDown: state => state.mainDown,
  serviceAreaList: state => state.serviceAreaList,
  releaseInfo: state => state.releaseInfo
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug
});

export default store;
