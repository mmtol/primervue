<template>
<div>
    <h1>Mi primer vue, y en viernes, que bien</h1>
    <img src="./../assets/images/vaca.jpg"/>
    <h2>Su nombre es {{nombre}} y tiene {{edad}} añitos</h2>
</div>    
</template>

<script>
    //vue utiliza js especial
    //cada component debe tener un nombre y debemos exportarlo con ese nombre
    //el name es la etiqueta que se utilizara para dibujarlo
    export default
    {
        name:"HolaMundo",
        data()
        {
            //las variables son declaradas en formato json dentro de un return
            //se hace referencia a ellas con doble {{}}
            return{
                nombre: "Pepa",
                edad:5, 
                array:[],
                obj:{}
            }
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css';
</style>