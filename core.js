
import Home from './routes/index.js'
import Care from './routes/care.js'
import CountPrice from './routes/countPrice.js'
import ProductIndex from './routes/productIndex.js'
import ProductList from './routes/productList.js'

import Product from './routes/prod.js'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: "/", 
        children: [{
                path: '', component: Home },
                { path: '/:product', component: ProductList },
                { path: '/:product/:id', component: Product },
            ]}
        
    ]
})

Vue.createApp().use(router).mount('#app')
