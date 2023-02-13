<template>
  <button @click="signIn">
    로그인
  </button>
</template>

<script>
import { 
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { auth } from '@/plugins/firebase'

const provider = new GoogleAuthProvider();
export default  {
    methods: {
        signIn() {
            signInWithPopup(auth, provider)
        }
    }
}
</script>

<style>

</style>