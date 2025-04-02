import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/Login.vue';
import Dashboard from '@/dashboard.vue';
import Home from '@/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
