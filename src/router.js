import Vue from 'vue';
import Router from 'vue-router';

// This Views for Auth user
import LoginViews from '@/views/Login.vue';
import RegisterViews from '@/views/Register.vue';

// This Views For User
import UserViews from '@/views/User.vue';

// This Views For Check After Auth
import HomeViews from '@/views/Home.vue';
import EditViews from '@/views/Edit.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeViews,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginViews, 
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterViews,
        },
        {
            path: '/user',
            name: 'user',
            component: UserViews,
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: EditViews,
        }
    ]
});