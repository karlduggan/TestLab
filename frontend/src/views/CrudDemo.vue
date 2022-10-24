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
        <n-card title="User by ID Demo">
            <n-space vertical>
                <n-input v-model:value="userID" type="name" size="large" placeholder="id"  />
                <n-button type="secondary" @click="userByID">
                            console log user detail by id
                </n-button>
                <n-button type="error" @click="deleteUser">
                    Delete User
                </n-button>
            </n-space>
        </n-card>
        <n-card title="Update User by ID Demo">
            <n-space vertical>
                <n-input v-model:value="userID" type="name" size="large" placeholder="id"  />
                <n-input v-model:value="name" type="name" size="large" placeholder="Name"  />
                <n-input v-model:value="email" type="email" size="large" placeholder="Email"  />
                <n-button type="secondary" @click="updateUser">
                        Update User Detail
                </n-button>
            </n-space>
        </n-card>
    </div>
</template>

<script>
import { createUser, getAllUsers, getUserByID, deleteUserByID, updateUser } from '@/firebase'
import {ref} from 'vue'

export default {
    name: "CrudPage",
    data(){
        return {
            name: '',
            email: '',
            userID: '',
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
    async userByID(){
        getUserByID(this.userID)
    },
    async updateUser(){
        try{
        var payload = {
            'name': this.name,
            'email': this.email
        }
        updateUser(this.userID, payload)
        }
        catch(error){
            console.log(error)
        }
    }
    ,
    async deleteUser(){
        deleteUserByID(this.userID)
    }
    ,
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