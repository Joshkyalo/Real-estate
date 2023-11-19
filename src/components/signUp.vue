<template>
    <!-- start signup form
    - Fields 
        * Full Name 
        * Email 
        * Password 
    -->

    <v-row align="center" class="mt-16 ma-4" justify="center"><v-span>{{ statusMessage }}</v-span></v-row>
    <v-row align="center" justify="center">
  <form @submit.prevent="submit" class="" >
    <v-text-field
    rounded
    variant="outlined"
    color="bg-white"
      v-model="name"
      :counter="10"
      label="Name"
    ></v-text-field>

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

    <v-text-field
    rounded
    type="password"
    variant="outlined"
      v-model="passwordConfirm" 
      label="Confirm Password"
    ></v-text-field>
    <v-btn large rounded class="bg-blue text-white ma-4" type="submit" @click="signupWithEmailandPassword()"> Signup</v-btn>

    OR

    <v-btn rounded class="bg-white text-black text-caption ml-4" color="" type="submit" @click="signUpWithGoogle()"> 
        <v-icon color="red" class="mr-3">mdi-google</v-icon>Continue with Google</v-btn>
    
  </form>
</v-row>
 
    <form hidden>
        <v-row 
        align="center" 
        justify="center"
        class="mt-6"
        width="100"
        >
   
        <v-text-field 
            variant="outlined"
            placeholder="Email"
            color="blue"
            v-model="user.email"
            type="email"></v-text-field>
           

            <v-text-field 
            variant="outlined"
            placeholder="First Name"
            v-model="user.name"
        > </v-text-field>


            <v-text-field
            variant="outlined"
            placeholder="Password"
            v-model="user.password"
            type="password">
        </v-text-field>

             <v-btn variant="outlined" rounded @click="signUpWithGoogle()">Submit</v-btn>
             <!----->
        </v-row> 


    </form>
    <!-- end signup forn -->
</template>

<style >
.v-text-field{
  border-color: red;
}
</style>


<script>

/** imports */
import {auth} from'../firebaseConfig' 
import { GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword } from "firebase/auth";
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');



auth.languageCode = 'fr';

provider.setCustomParameters({
  'login_hint': 'user@example.com'
});



/* move this to a seperate file */ 

export default{

    data() {
        return{
            select:'',
            email: '',
            name:'',
            checkbox:'',
            passwordConfirm:'',
            password:'',
            statusMessage:'',
  
user: {}
        }
    },

    methods: {

        signupWithEmailandPassword() {
           
 
createUserWithEmailAndPassword(auth, this.email, this.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert(JSON.toString(user));
    console.log(user);
    this.$router.push("/Manage");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage + ' Code => '+errorCode);
    // ..
  });
        },

        signUpWithGoogle() {
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    this.statusMessage = 'Logged In';
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
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

    },
},

}


</script>