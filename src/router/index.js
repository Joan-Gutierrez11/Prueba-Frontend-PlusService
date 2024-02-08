import { createRouter, createWebHistory } from 'vue-router'

import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import LibrosView from "../views/LibrosView.vue";
import AgregarLibroView from '../views/AgregarLibroView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'registro',
      component: RegisterView
    },
    {
      path: '/libros',
      name: 'libros',
      component: LibrosView
    },
    {
      path: '/libros/agregar',
      name: 'agregar-libro',
      component: AgregarLibroView
    },
  ]
})

export default router
