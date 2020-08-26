import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

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
          commit("LOGIN");
          resolve();
        }, 1000);
      });
    },
    logout: ({ commit }) => {
      return new Promise((resolve) => {
        localStorage.removeItem("loggedIn");
        commit("LOGOUT");
        resolve();
      });
    },
    getPosts: () => {
      return axios.get("https://jsonplaceholder.typicode.com/posts");
    },
    getPost: (_, id) => {
      return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    },
    getComments: (_, postId) => {
      return axios.get(`https://jsonplaceholder.typicode.com/comments`, {
        params: {
          postId,
        },
      });
    },
    addPost: (_, postData) => {
      return axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: postData.title,
        body: postData.body,
        userId: 1,
      });
    },
  },
  modules: {},
});
