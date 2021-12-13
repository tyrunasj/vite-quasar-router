const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/Index.vue'), name: 'Home' }],
  },
  {
    path: '/auth',
    component: () => import('../layouts/EmptyLayout.vue'),
    children: [
      { path: 'login', component: () => import('../pages/auth/Login.vue'), name: 'Login' },
      { path: 'logout', component: () => import('../pages/auth/Logout.vue'), name: 'Logout' },
    ],
  },
];
export default routes;
