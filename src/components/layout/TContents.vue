<template>
  <div>
    <button>오늘</button>
    <i class="fas fa-trash-alt"></i>
    <h1>{{ year + '.' + month + '.' + day }}</h1>
    <button>65</button>
    <button>70</button>
    <button>75</button>
    <h1>70.9</h1>
    <button>:)</button>
    <input type="text">
    <button>저장</button>
    <button>분석</button>
  </div>
</template>

<script>

export default {
  data: function(){
    return {
      year: '',
      month: '',
      day: '',
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.getDate()
    },
    getDate() {
      const date = new Date();
      this.year = date.getFullYear();
      this.month = ('0' + (date.getMonth() + 1));
      this.day = ('0' + date.getDate());

    }
  }
}
</script>

<style>

</style>