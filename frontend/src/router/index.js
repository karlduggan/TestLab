import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
// Import the home page for router
import DashboardPage from '@/views/Dashboard.vue';
import DevPage from '@/views/Dev.vue';
import Dev2Page from '@/views/Dev2.vue';
import HomePage from '@/views/Home.vue'
import EditPage from '@/views/Edit.vue'
import CrudPage from '@/views/CrudDemo'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/dashboard', 
        name: 'Dashboard', 
        component: DashboardPage,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/dev',
        name: 'development',
        component: DevPage
    },
    {
        path: '/dev2',
        name: 'development2',
        component: Dev2Page
    },

    {
        path: '/edit/:id',
        name: 'Edit',
        component: EditPage
    },
    {
        path: '/crud',
        name: 'CRUD',
        component: CrudPage
    }
]

const router = createRouter( {
    history: createWebHistory(),
    routes
    
})

const getCurrentUser = () => {
 return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
        getAuth(),
        // Callback
        (user) => {
            removeListener();
            resolve(user);
        },
        reject
    )
 })
}

// Navigation guard
router.beforeEach(async (to, from, next)=> {
    if(to.matched.some((record) => record.meta.requiresAuth)){
        if(await getCurrentUser()) {
            next();
        } else {
            alert("You don't have access!");
            next("/");
        }
    }
    next();
})

export default router