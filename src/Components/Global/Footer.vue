<template>
  <v-footer>
    <v-layout row wrap align-center>
      <v-flex xs6>
        <div class="ml-3">
          Add footer information here
        </div>
      </v-flex>
      <v-flex xs6 class="text-xs-right">
        <div class="mr-3">
          {{ differenceTime }}
        </div>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
    data() {
      return {
        openTime: this.moment(),
        differenceTime: this.moment.utc(0).format('HH:mm:ss')
      }
    },
    created() {
      setInterval(function () {
        this.differenceTime = this.moment.utc(this.moment() - this.openTime).format('HH:mm:ss')
      }.bind(this), 1000)
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
  font-size: 1.3em;
}
</style>

