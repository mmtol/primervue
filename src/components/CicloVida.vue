<template>
    <div>
        <h1>Ciclo vida y métodos</h1>
        <h2>{{ mensaje }}</h2>
        <button @click="cambiarMensaje()">Que pasa hoy?</button>
    </div>
</template>

<script>
export default 
{
    name:"CicloVida",
    data()
    {
        return{
            mensaje: "Hoy es viernes!!!"
        }
    },
    methods:{
        //aqui van los metodos personalizados
        cambiarMensaje()
        {
            //para acceder a las variables se hace con this
            this.mensaje = "Hoy se mime!!!";
        }
    },
    mounted()
    {
        console.log("mounted");
    },
    created()
    {
        console.log("created");
    },
    updated()
    {
        console.log("updated");
    },
    unmounted()
    {
        console.log("unmounted");
    }
}
</script>

<style>
    @import './../assets/css/estilos.css';
</style>