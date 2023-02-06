<template>
  <div>
    <input type="text" v-model="email" placeholder="email"><br>
    <input type="password" v-model="password" placeholder="password"><br>
    <button v-on:click="signUp">가입하기ㅇㅇ</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
  },
  methods: {
    signUp() {
      console.log('ㅎㅇ')

    }
  }
  }
</script>


<style>

</style>