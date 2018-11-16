<template>
  <div class="login">
    <login-page/>
  </div>
</template>

<script>
import Login from '@/Components/Pages/LoginPage.vue'

export default {
  name: 'login',
  components: {
    'login-page': Login
  }
}
</script>