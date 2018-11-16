<template>
  <v-toolbar fixed scroll-off-screen>
    <v-btn flat icon @click="$emit('toggleTheme')">
      <v-icon>highlight</v-icon>
    </v-btn>
    <v-toolbar-title v-text="'Hello ' + getUserName"></v-toolbar-title>
    <v-spacer/>
    <h3>{{ title }}</h3>
    <v-spacer/>
    <router-link to="/" class="navbar-route">Home</router-link>
    <router-link to="/Login" class="navbar-route">Login</router-link>
    <router-link to="/About" class="navbar-route">About</router-link>
  </v-toolbar>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState([
      'title'
    ]),
    ...mapGetters([
      'getUserName'
    ])
  }
}
</script>

<style scoped>
.theme--dark a {
  color: white;
}
.theme--light a {
  color: #303030;
}
a {
  text-decoration: none;
  font-size: 1.5em;
  margin-left: 10px;
}
.v-toolbar__title {
  margin-left: 0 !important;
}
</style>
