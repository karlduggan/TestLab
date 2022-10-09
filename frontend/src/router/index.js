import { createRouter, createWebHistory } from "vue-router";
// Import the home page for router
import DashboardPage from '@/views/Dashboard.vue';
import DevPage from '@/views/Dev.vue';


const routes = [
    {
        path: '/', 
        name: 'Dashboard', 
        component: DashboardPage
    },
    {
        path: '/dev',
        name: 'development',
        component: DevPage
    }
]

const router = createRouter( {
    history: createWebHistory(),
    routes
    
})

export default router