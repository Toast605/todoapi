<<<<<<< HEAD
const routes = [
    {
      path: '/',
      component: () => import('layouts/MainLayout.vue'),
      children: [
        { path: '', component: () => import('pages/IndexPage.vue') },
        { path: '/vue', component: () => import('pages/VueEx.vue') },
        { path: '/shop', component: () => import('pages/ShoppingList.vue') },
        { path: '/todo', component: () => import('pages/Todo.vue') },
      ]
    },
  
  
    // Always leave this as last one,
    // but you can also remove it
    {
      path: '/:catchAll(.*)*',
      component: () => import('pages/ErrorNotFound.vue')
    }
  ]
  
  export default routes
=======

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/vue', component: () => import('pages/VueEx.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
>>>>>>> 2098123e9902d3a33c2bd1149d9a305415390ba8
