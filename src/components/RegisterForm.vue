<template>
  <section>
    <b-field label="Name">
      <b-input v-model="name" ></b-input>
    </b-field>

    <b-field label="Email" >
      <b-input type="email" v-model="email"></b-input>
    </b-field>

    <b-field label="Password">
      <b-input type="password" v-model="password" value="iwantmytreasure" password-reveal></b-input>
    </b-field>

    <b-button class='is-primary' expanded @click="registerAndRedirect">Submit</b-button>
  </section>
</template>

<script>
export default {
  data() {
    return {
        name:'',
        email:'',
        password:''
    };
  },
  methods: {
    registerAndRedirect() {
      this.$buefy.notification.open({
        message: "Registered successfully!",
        type: "is-success",
      });
      this.$router.push("/");
    },
  },
};
</script>