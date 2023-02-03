<template>
  <div id="app">
    <TMain></TMain>
  </div>
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
    'TMain' : TMain
  }
  
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
</style>
