<template>
    <!-- start Login form
    - Fields 
        
        * Email 
        * Password 
    -->

    <v-row align="center" class="ma-14" justify="center"><v-span>{{ statusMessage }}</v-span></v-row>
    <v-row align="center" justify="center">
  
       

  <form @submit.prevent="submit" class="" >

    
   

    <v-text-field
    rounded
    type="email"
    variant="outlined"
      v-model="email" 
      label="E-mail"
    ></v-text-field>

    <v-text-field
    rounded
    type="password"
    variant="outlined"
      v-model="password" 
      label="Password"
    ></v-text-field>

  
    <v-btn large rounded class="bg-blue text-white ma-4" type="submit" @click="loginWithEmailandPassword()"> Signin</v-btn>

    OR

    <v-btn rounded class="bg-white text-black text-caption ml-4" color="" type="submit" @click="loginWithGmail()"> 
        <v-icon color="red" class="mr-3">mdi-google</v-icon>Continue with Google</v-btn>
     

    
  </form>
</v-row>
  
    <!-- end signup forn -->
</template>

<script>

import {  signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import {auth} from '../firebaseConfig'


const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({
  'login_hint': 'user@example.com'
});

export default{
    data() {
        return{
password: '',
email: ''
        }
    }, 

    methods:{

        loginWithEmailandPassword() {


signInWithEmailAndPassword(auth, this.email, this.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    this.$router.push("/Manage");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorCode+ 'Message _> '+ errorMessage); 

  });

        },
        loginWithGmail() {
 
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    this.$router.push("/Properties");
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
        }

    }
}
</script>
