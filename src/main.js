import Vue from "vue"
import Buefy from "buefy"
import Vuelidate from "vuelidate"
import "buefy/dist/buefy.css"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { auth } from "./firebase"

Vue.use(Buefy)
Vue.use(Vuelidate)

Vue.config.productionTip = false

let app
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app")
  }
  if(user){
    store.commit("LOGIN");
    store.commit("SET_USER", user);
  }
})
