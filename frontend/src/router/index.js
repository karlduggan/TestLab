import { createRouter, createWebHistory } from "vue-router";
// Import the home page for router
import DashboardPage from '@/views/Dashboard.vue';
import DevPage from '@/views/Dev.vue';
import Dev2Page from '@/views/Dev2.vue';


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
    },
    {
        path: '/dev2',
        name: 'development2',
        component: Dev2Page
    }
]

const router = createRouter( {
    history: createWebHistory(),
    routes
    
})

export default router