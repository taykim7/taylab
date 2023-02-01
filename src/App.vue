<template>
  <div id="app">
    <LabHeader></LabHeader>
    <LabBody></LabBody>
    <LabFooter></LabFooter>
  </div>
</template>

<script>
import LabHeader from './components/layout/LabHeader.vue'
import LabBody from './components/layout/LabBody.vue'
import LabFooter from './components/layout/LabFooter.vue'

export default {
  data: function(){
    return {
      myWeight: ''
    }
  },
  components: {
    'LabHeader': LabHeader,
    'LabBody': LabBody,
    'LabFooter': LabFooter
  }
  
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
</style>
