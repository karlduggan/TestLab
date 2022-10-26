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

       
    </div>
</template>

<script>

export default {
    name: "HomePage",
  
    setup() {

    
 
   
  },
 
  methods: {
   
    
  }

}
</script>

<style scoped>

</style>