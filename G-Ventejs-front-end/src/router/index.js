import { createRouter , createWebHistory } from "vue-router";
import Home from '../components/home/home.vue'
import Shop from '../components/home/Shop.vue'
import Login from '../components/auth/Login.vue'
import Signup from '../components/auth/Sign-up.vue'
import Dashboard from '../components/admin/dashboard.vue'
import Cart from '../components/home/Cart.vue'

const routers=[
{
	path:"/",
	name:'home',
	component:()=>import('../components/home/home.vue'),
		
},
{
	path:"/shop",
	name:"shop",
	component:Shop

},
{
	path:"/cart",
	name:"cart",
	component:Cart,
	
},
{
	path:"/dashboard",
	name:"dashboard",
	component:Dashboard
},
{
	path:"/login",
	name:"login",
	component:Login
},
{
	path:"/signup",
	name:"signup",
	component:Signup
}
]

const router = createRouter({
		history:createWebHistory(import.meta.env.BASE_URL),
		routes:routers
})
export default router;