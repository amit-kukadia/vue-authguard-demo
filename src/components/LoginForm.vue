<template>
  <section>
    <b-field label="Email">
      <b-input type="email" v-model="email"></b-input>
    </b-field>

    <b-field label="Password">
      <b-input type="password" v-model="password"></b-input>
    </b-field>
    <b-message
      title="Error"
      type="is-danger"
      aria-close-label="Close message"
      v-model="showError"
    >{{errorMessage}}</b-message>
    <b-button expanded class="is-primary" :loading="loading" @click="loginAndRedirect">Submit</b-button>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      errorMessage :"",
      showError : false
    };
  },
  validations: {
    email: {
      required,
      minLength: minLength(6),
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },
  methods: {
    ...mapActions(["login"]),
    loginAndRedirect() {
      console.log("login and rediredt");
      this.loading = true;
      this.login({
        email: this.email,
        password: this.password,
      })
        .then(() => {
          this.$buefy.notification.open({
            message: "Login successfull",
            type: "is-success",
          });
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          this.loading = false;
          this.errorMessage = error.message
          this.showError = true
          console.log(error);
        });
    },
  },
};
</script>