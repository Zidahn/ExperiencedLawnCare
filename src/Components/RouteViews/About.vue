<template>
  <div class="about">
    <my-about-page/>
  </div>
</template>

<script>
import AboutPage from '@/Components/Pages/AboutPage.vue'

export default {
  name: 'about',
  components: {
    'my-about-page': AboutPage
  }
}
</script>