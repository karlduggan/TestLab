<template>
    <div>
  
        <n-card title="Name">
            <form >
                <n-space vertical>
                    <n-input v-model:value="name" type="name" size="large" placeholder="Name"  />
                    <n-input v-model:value="email" type="email" size="large" placeholder="Email"  />
                    <n-button type="primary" @click="onSubmit">
                        Create User
                    </n-button>
                    
                </n-space>
            </form>

        </n-card>
        <n-card title="All Users Demo">
            <n-button type="secondary" @click="allUsers">
                        console log all users
            </n-button>
        </n-card>
    </div>
</template>

<script>
import { createUser, getAllUsers } from '@/firebase'
import {ref} from 'vue'

export default {
    name: "HomePage",
    data(){
        return {
            name: '',
            email: '',
            users: ref([])
        }
    },
    setup(){
},
methods : {
    async onSubmit() {
        if (this.name != '' && this.email != ''){
            createUser(
            {
                'name': this.name,
                'email': this.email
            })
            this.clear()
        }

    },
    async allUsers(){
        this.users = getAllUsers()
    },
    clear: function(){
        this.name = ''
        this.email = ''
    }
}

}
</script>

<styled scoped>
.n-card {
  max-width: 300px;
}
</styled>