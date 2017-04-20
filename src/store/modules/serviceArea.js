/**
 * 服务区列表
 *
 * author: Storm
 * date: 2017/04/19
 */

const state = {
  list: []
};

const getters = {
  list: list => state.list
};

const actions = {
  /*getList ({commit}){
    serviceArea.list(list => {
      commit('serviceAreaList', {list})
    });
  }*/

  // setList
};

const mutations = {
  serviceAreaList (state, {list}) {
    state.list = list;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
