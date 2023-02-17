<template>
  <div>
    <button @click="login">
      로그인
    </button></div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/plugins/firebase'

export default  {
    methods: {
        async login() {
          try {
            console.log('성공?')
            await signInWithEmailAndPassword(auth, 'th_77@naver.com', '123456')
            console.log('성공!')
          } catch (error) {
            console.log(error)
          }
        }
    }
}
</script>

<style>

</style>