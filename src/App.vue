<template>
  <v-app id="app">
    <TMain></TMain>
  </v-app>
</template>

<script>
import TMain from './components/layout/TMain.vue'

export default {
  data: function(){
    return {
      myWeight: ''
    }
  },
  components: {
    TMain,
  }
  
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
</style>
