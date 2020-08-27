<template>
  <div class="card" style="max-width : 500px;margin :auto">
    <div class="card-header">
      <div class="card-header-title is-size-3 is-centered">
        Login
      </div>
    </div>
    <div class="card-content">
    <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue"

export default {
  name: "Login",
  components: {
    LoginForm
  },
  methods :{

  }
}
</script>
