<template>
  <div class='card' style="max-width : 500px;margin :auto">
    <div class='card-header'>
      <div class='card-header-title is-size-3 is-centered'>
        Register
      </div>
    </div>
    <div class="card-content">
    <RegisterForm />
    </div>
  </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue'

export default {
  name: 'Login',
  components: {
    RegisterForm
  }
}
</script>
