import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import CineComponent from './components/CineComponent.vue'
import MusicaComponent from './components/MusicaComponent.vue'
import CicloVida from './components/CicloVida.vue'
import DirectivasComponent from './components/DirectivasComponent.vue'
import ParImpar from './components/ParImpar.vue'
import PropiedadConmutada from './components/PropiedadConmutada.vue'
import MetodosFilters from './components/MetodosFilters.vue'

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
    },
    {
        path:"/directivas",
        component:DirectivasComponent
    },
    {
        path:"/parimpar",
        component:ParImpar
    },
    {
        path:"/propiedadconmutada",
        component:PropiedadConmutada
    },
    {
        path:"/metodosfilters",
        component:MetodosFilters
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