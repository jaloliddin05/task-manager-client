import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: 'project/:id', component: () => import('pages/ProjectPage.vue') },
      { path: 'profile/:id', component: () => import('pages/ProfilePage.vue') },
      { path: 'my-tasks', component: () => import('pages/MyTasksPage.vue') },
      { path: 'workspace', component: () => import('pages/WorkspacePage.vue') },
    ],
  },
  { path: '/signin', component: () => import('pages/SignInPage.vue') },
  { path: '/signup', component: () => import('pages/SignUpPage.vue') },

  // { path: '/', redirect: '/home' },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
