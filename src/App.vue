<template>
  <v-app :dark="darkTheme">
    <my-top-navbar v-on:toggleTheme="darkTheme = !darkTheme"/>
    <v-content>
      <router-view/>
    </v-content>
    <my-footer/>
  </v-app>
</template>

<script>
import TopNavbar from '@/Components/Global/TopNavbar'
import Footer from '@/Components/Global/Footer'

export default {
  name: 'App',
  components: {
    'my-top-navbar': TopNavbar,
    'my-footer': Footer
  },
  data () {
    return {
      darkTheme: true
    }
  }
}
</script>

<style>

</style>
