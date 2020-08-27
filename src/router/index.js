import Vue from "vue";
import VueRouter from "vue-router";
import { auth } from "../firebase"
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import Post from "../views/Post.vue";

// import store from "../store";

// const getAuthStatus = () => {
//   let loggedIn

//   if (store.state.loggedIn === null) {
//     loggedIn = localStorage.getItem("loggedIn");
//     if (loggedIn) {
//       store.commit("LOGIN");
//     } else {
//       store.commit("LOGOUT");
//     }
//   } else {
//     loggedIn = store.state.loggedIn
//   }

//   return loggedIn;
// };

const getAuthStatus = ()=>{
  if(auth.currentUser) return true
  else return false
}

const ifNotAuthenticated = (to, from, next) => {
  console.log("route");
  if (!getAuthStatus()) {
    next();
    return;
  }
  next("/dashboard");
};

const ifAuthenticated = (to, from, next) => {
  if (getAuthStatus()) {
    next()
    return
  }
  next("/")
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter : ifAuthenticated,
  },
  {
    path: "/post/:id",
    name: "Post",
    component: Post,
    beforeEnter : ifAuthenticated,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
