<template>
  <div id="app">
    <TSignUp></TSignUp>
    <TMain></TMain>
  </div>
</template>

<script>
import TMain from './components/layout/TMain.vue'
import TSignUp from './components/layout/TSignUp.vue'

export default {
  data: function(){
    return {
      myWeight: ''
    }
  },
  components: {
    TMain,
    TSignUp,
  }
  
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
</style>
