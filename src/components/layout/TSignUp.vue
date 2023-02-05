<template>
  <div>
    <input type="text" v-model="email" placeholder="email"><br>
    <input type="password" v-model="password" placeholder="password"><br>
    <button v-on:click="signUp">가입하기</button>
  </div>
</template>

<script>
  import firebase from "firebase/app";

  export default {
    data() {
      return {
        email: '',
        password: ''
      }
  },
  methods: {
    signUp() {
      console.log(firebase)
      // firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
      //   function(user) {
      //     alert('회원가입 완료!' + user)
      //   },
      //   function(err) {
      //     alert('에러 : ' + err.message)
      //   }
      //);
    }
  }
  }
</script>


<style>

</style>