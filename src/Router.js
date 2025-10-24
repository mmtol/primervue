import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import CineComponent from './components/CineComponent.vue'
import MusicaComponent from './components/MusicaComponent.vue'
import CicloVida from './components/CicloVida.vue'

//array con las rutas
const rutas=
[
    {
        path:"/",
        component:HomeComponent
    },
    {
        path:"/cine",
        component:CineComponent
    },
    {
        path:"/musica",
        component:MusicaComponent
    },
    {
        path:"/ciclovida",
        component:CicloVida
    }
]

//variable para el router indicando tipo de navegacion y rutas
const router=createRouter(
    {
        history:createWebHistory(),
        routes:rutas
    })

//router es la que utiliza el fichero main.js, hay que exportarla
export default router;