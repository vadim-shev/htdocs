
 import { MainCore } from './components/MainCore.js'
import { ProductsList } from './components/ProductsList.js'
import { createRouter } from './router.js'

const { createApp } = Vue

const app = createApp({
  template: `<router-view></router-view>`
})
const router = createRouter(MainCore, ProductsList)

app.use(router)
app.mount('#app')
