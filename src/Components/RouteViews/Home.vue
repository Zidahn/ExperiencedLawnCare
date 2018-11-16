<template>
  <div class="home">
    <my-home-page/>
  </div>
</template>

<script>
import HomePage from '@/Components/Pages/HomePage.vue'

export default {
  name: 'home',
  components: {
    'my-home-page': HomePage
  }
}
</script>
