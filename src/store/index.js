import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { auth } from "../firebase";
// import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: null,
    user: {},
    posts : []
  },
  mutations: {
    LOGIN: (state) => {
      state.loggedIn = true;
    },
    LOGOUT: (state) => {
      state.loggedIn = false;
    },
    SET_USER: (state, data) => {
      state.user = data;
    },
    SET_POSTS: (state, data) => {
      state.posts = data;
    },
  },
  actions: {
    // login: ({ commit }) => {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       localStorage.setItem("loggedIn", true);
    //       commit("LOGIN");
    //       resolve();
    //     }, 1000);
    //   });
    // },
    login({ commit }, form) {
      return new Promise((resolve, reject) => {
        auth
          .signInWithEmailAndPassword(form.email, form.password)
          .then((user) => {
            commit("LOGIN");
            commit("SET_USER", user);
            resolve(user);
          })
          .catch((error) => {
            reject(error)
          });
      });
    },
    // logout: ({ commit }) => {
    //   return new Promise((resolve) => {
    //     localStorage.removeItem("loggedIn");
    //     commit("LOGOUT");
    //     resolve();
    //   });
    // },
    async logout({ commit }) {
      await auth.signOut();
      commit("LOGOUT");
      commit("SET_USER", {});
    },
    getPosts: ({ commit }) => {
      return new Promise((resolve, reject) => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
          .then((data) => {
            commit("SET_POSTS", data.data);
            resolve(data.data);
          })
          .catch((error) => {
            reject(error)
          });
      });
    },
    getPost: (_, id) => {
      return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
