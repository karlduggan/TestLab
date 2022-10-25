<template>
    <div>
        <h1>Home Page</h1>
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
                        <n-button @click="login" type="primary">Login</n-button>
                    </n-space>
                    
                    <n-gradient-text v-if="errMsg" type="error">
                        {{errMsg}}
                    </n-gradient-text>
                </n-space>
               
            </n-card>
            
            </n-drawer-content>
        </n-drawer>

        <n-button @click="activate('left')">
        Login
        </n-button>
    </div>
</template>

<script>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
export default {
    name: "HomePage",
    setup() {
    const email = ref("")
    const password = ref("")
    const errMsg = ref("")

    const router = useRouter();


    const active = ref(false);
    const placement = ref("left");
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
      errMsg
    };
  },
  methods: {
    login: function(){
        const auth = getAuth() // From firebase/auth
        signInWithEmailAndPassword(auth, this.email, this.password)
        .then((data) => {
            console.log("Successfully signed in!")

            console.log(auth.currentUser)
            console.log(data)
            this.router.push('/dashboard') // redirect to the dashboard
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
        console.log([this.email, this.password])
    },
    
  }

}
</script>

<style scoped>
.n-card {
  top: 25%;
  border: none;
}
</style>