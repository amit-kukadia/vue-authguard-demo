<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item class="is-size-4" tag="router-link" :to="{ path: '/' }">AuthDemo</b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link v-if="!loggedIn"  :to="{ path: '/register' }" class="button is-primary">
            <strong>Sign up</strong>
          </router-link>
          <router-link v-if="!loggedIn" :to="{ path: '/' }" class="button is-light">Log in</router-link>
          <button v-if="loggedIn" @click="logoutAndRedirect" class="button is-primary">
            <strong>Logout</strong>
          </button>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
import {mapState,mapActions} from "vuex"
export default {
    computed:{
    ...mapState(["loggedIn"]),
    },
    methods:{
    ...mapActions(["logout"]),
    logoutAndRedirect(){
        this.logout().then(()=>{
          this.$router.push("/")
        })
        
    }
    }
}
</script>