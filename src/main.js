import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

var app = createApp(App)
app.config.globalProperties.$filters={
    //creamos los metodos que recibiran algo y devolveran un resultado
    mayuscula(dato)
    {
        return dato.toUpperCase();
    },
    getNumDoble(num)
    {
        return num * 2;
    }
}

app.use(router).mount('#app')
