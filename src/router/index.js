import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VistaCards from '../views/VistaCards.vue'
import VistaListaEspecifica from '../views/VistaListaEspecifica.vue'
import VistaInfo from '../views/VistaInfo.vue'
import GlobalView from '../views/GlobalView.vue'
import Instrucciones from '../views/Instrucciones.vue'
import ListadoTelefonico from '../views/ListadoTelefonico.vue'
import Inicio from '../views/Inicio.vue'
import HTrauma from '../views/HTrauma.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: GlobalView
  },
  {
    path: '/VistaCards',
    name: 'VistaCards',
    component: VistaCards
  },
  {
    path: '/VistaListaEspecifica/:title',
    name: 'VistaListaEspecifica',
    component: VistaListaEspecifica
  },
  {
    path: '/VistaInfo/:numinventari',
    name: 'VistaInfo',
    component: VistaInfo
  },
  {
    path: '/GlobalView',
    name: 'GlobalView',
    component: HomeView
  },
  {
    path: '/Instrucciones',
    name: 'Instrucciones',
    component: Instrucciones
  },
  {
    path: '/ListadoTelefonico',
    name: 'ListadoTelefonico',
    component: ListadoTelefonico
  },
  {
    path: '/Inicio',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/HTrauma',
    name: 'H-Trauma',
    component: HTrauma
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
