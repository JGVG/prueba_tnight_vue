import { createRouter, createWebHistory } from 'vue-router';
import ListaUsuarios from '../components/ListaUsuarios.vue';
import AgregarUsuario from '../components/AgregarUsuario.vue';

const routes = [
  {
    path: '/',
    name: 'ListaUsuarios',
    component: ListaUsuarios,
  },
  {
    path: '/agregar-usuario',
    name: 'AgregarUsuario',
    component: AgregarUsuario,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

