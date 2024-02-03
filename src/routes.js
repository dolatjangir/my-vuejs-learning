import { createWebHistory,createRouter} from "vue-router";
import  login from './components/Login.vue'
import LifeCycle from './components/LifeCycle.vue'


const routes = [
    {
        name:'login',
        path:'/login/:name',
        component:login
    },
    {
        name:'LifeCycle',
        path:'/LifeCycle',
        component:LifeCycle
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router
