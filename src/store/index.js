/**
 * store
 *
 * author: Storm
 * date: 2017/04/18
 */


import Vue from 'vue';
import Vuex from 'vuex';
//import serviceArea from './modules/serviceArea';
//import mainPaddingBottom from './modules/mainPaddingBottom';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  state: {
    mainDown: 0,
    serviceAreaList: []
  },
  mutations: {
    setting (state, obj) {
      state[obj.name] = obj.value;
    }
  },
  /*modules: {
   serviceArea,
   // mainPaddingBottom
   },*/
  strict: debug
});

/*if (module.hot) {
 module.hot.accept([
 './modules/serviceArea',
 './modules/mainPaddingBottom'
 ], () => {
 store.hotUpdate({
 serviceArea: require('./modules/serviceArea'),
 mainPaddingBottom: require('./modules/mainPaddingBottom')
 })
 })
 }*/


export default store;
