<template>
  <div>
    
    <THeader></THeader>
    <TContents></TContents>
    <TFooter></TFooter>
  </div>
</template>

<script>
import THeader from './THeader.vue'
import TContents from './TContents.vue'
import TFooter from './TFooter.vue'


export default {
    Data: function(){
    return {
      myWeight: ''
    }
  },
  components: {
    THeader,
    TContents,
    TFooter,
  }
}
</script>

<style>

</style>