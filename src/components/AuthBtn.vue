<template>
  <div>
    <button @click="signIn">
      준비
    </button>
    <button @click="login">
      시작
    </button></div>
</template>

<script>
import { 
    //GoogleAuthProvider,
    //signInWithPopup,
    //getAuth,
    //signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from '@/plugins/firebase'

//const provider = new GoogleAuthProvider();
export default  {
    methods: {
        signIn() {
            //signInWithPopup(auth, provider)
            //getAuth(auth)
        },
        async login() {
          try {
            console.log('성공?')
            //await signInWithEmailAndPassword(auth, 'th_77@naver.com', '1234')
            console.log(auth)
          } catch (error) {
            console.log(error)
          }
        }
    }
}
</script>

<style>

</style>