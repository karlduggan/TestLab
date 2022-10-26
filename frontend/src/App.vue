
<template>
   <div id="app" fluid>
    
      <nav>
        <n-space id="navbar" justify="space-between">
        <button v-if="!isLoggedIn" @click="activate('left')">Login</button>
        <button v-if="isLoggedIn" @click="logOut">Log Out</button>
        </n-space>
      </nav>
      <router-view/>

      <n-drawer v-model:show="active" :width="502" :placement="placement">
            <n-drawer-content title="">

            <n-card id="login-card" title="Login">
                <n-space vertical>
                    <n-input
                    v-model:value = "email"
                    type="email"
                    placeholder="Email"
                    :maxlength="100"
                    />

                    <n-input
                    v-model:value = "password"
                    type="password"
                    show-password-on="mousedown"
                    placeholder="Password"
                    :maxlength="50"
                    />
                    <n-space justify="space-between">
                        <n-button @click="logIn" type="primary">Login</n-button>
                    </n-space>
                    
                    <n-gradient-text v-if="errMsg" type="error">
                        {{errMsg}}
                    </n-gradient-text>
                </n-space>
               
            </n-card>
            
            </n-drawer-content>
        </n-drawer>
    

  </div>
</template>

<script>

import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'vue-router'
import router from './router';

export default {
    name: "App",
    components: {

    },
    setup() {

    let auth;
    const isLoggedIn = ref(false)

    const email = ref("")
    const password = ref("")
    // Display error message on the frontend
    const errMsg = ref("")
    
    const router = useRouter();

    const active = ref(false);
    const placement = ref();
    const activate = (place) => {
      active.value = true;
      placement.value = place;
    };
    return {
      active,
      placement,
      activate,
      email,
      password,
      router,
      errMsg,
      auth,
      isLoggedIn
    };
  },
  // Keep logged in when refreshing page or navigating
  beforeMount(){
    this.auth = getAuth();
    onAuthStateChanged(this.auth, (user) => {
        if(user){
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      })
  },
 
  methods: {

    logOut: function(){
      this.auth.signOut()
      router.push('/')
    },
    logIn: function(){
        this.auth = getAuth() // From firebase/auth
        signInWithEmailAndPassword(this.auth, this.email, this.password)
        .then(() => {
            console.log("Successfully signed in!")
            this.router.push('/dashboard') // redirect to the dashboard
            // Close login side draw on success 
            this.active = false;
            // Clear both email and password fields
            this.email = ""
            this.password = ""
        })
        .catch((error) => {
            console.log(error.code)
            switch (error.code){
                case "auth/invalid-email":
                    this.errMsg = "Invalid email"
                    break;
                case "auth/user-not-found":
                    this.errMsg = "No account with that email was found"
                    break;
                case "auth/wrong-password":
                    this.errMsg = "Incorrect password"
                    break;
                default:
                    this.errMsg = "Email or password was incorrect"
                    break;
            }
        
        })
   
    },
    
  },
 

}
</script>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: hsl(210, 29%, 24%);
 
}
#navbar {
padding: 10px;

}
.n-card {
  top: 25%;
  border: none;
}

</style>
