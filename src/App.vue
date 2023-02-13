<template>
  <div id="app">
    <TMain></TMain>
    <AuthBtn />
  </div>
</template>

<script>
import TMain from './components/layout/TMain.vue'
import AuthBtn from './components/AuthBtn.vue';

export default {
  data: function(){
    return {
      myWeight: ''
    }
  },
  components: {
    TMain,
    AuthBtn,
  }
  
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
</style>
