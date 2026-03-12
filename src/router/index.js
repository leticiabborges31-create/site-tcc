import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Admin from '../views/Admin.vue'

const router = createRouter({

history: createWebHistory(),

routes: [

{
path: '/',
name: 'home',
component: HomeView
},

{
path: '/admin',
name: 'admin',
component: Admin
}

]

})

export default router