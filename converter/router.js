export function createRouter(MainCore, ProductsList) {
  const { createRouter, createWebHashHistory } = VueRouter

  return createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: '/', component: MainCore },
      { path: '/user/:id', component: ProductsList, props: true }
    ]
  })
}
