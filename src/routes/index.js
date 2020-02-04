import home from '../pages/home/home.vue'
import categories from '../pages/categories/categories.vue'
import find from '../pages/find/find.vue'
import cart from '../pages/cart/cart.vue'
import user from '../pages/user/user.vue'
export default  [
  { path: "/home", component: home,meta:{showFooter:true}},
    { path:"/", redirect: "/home" },
  {path:"/categories",component:categories,meta:{showFooter:true}},
  {path:"/find",component:find,meta:{showFooter:true}},
  {path:"/cart",component:cart,meta:{showFooter:true}},
  {path:"/user",component:user},
]