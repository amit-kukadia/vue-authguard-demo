import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: null,
  },
  mutations: {
    LOGIN: (state) => {
      state.loggedIn = true;
    },
    LOGOUT: (state) => {
      state.loggedIn = false;
    },
  },
  actions: {
    login: ({ commit }) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          localStorage.setItem("loggedIn", true); 
          commit('LOGIN');
          resolve();
        }, 1000);
      });
    },
    logout: ({ commit }) => {
      return new Promise((resolve) => {
        localStorage.removeItem("loggedIn"); 
        commit('LOGOUT');
        resolve();
      });
    },
  },
  modules: {},
});
