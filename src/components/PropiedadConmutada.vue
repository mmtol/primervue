<template>
   <div>
    <h1>Propiedad conmutada</h1>
    <ul>
        <li v-for="juego in juegos" :key="juego">
            {{ juego }}
        </li>
    </ul>
    <h2>Ahora comnutado</h2>
    <ul>
        <li v-for="juego in juegosRojos" :key="juego"  v-html="juego"></li>
    </ul>
    <h2>Ahora con número</h2>
    <h3 v-html="evaluarNumero"></h3>
   </div> 
</template>

<script>
export default 
{
    name:"PropiedadConmutada",
    computed:
    {
        //se escribe como un metodo pero se utiliza como una propiedad
        juegosRojos() 
        {
            var datos = [];
            var i = 0;
            for (var juego of this.juegos)
            {
                var juegoRojo = "<span style='color:red'>"+juego+"</span>";
                datos[i] = juegoRojo;
                ++i;
            }
            return datos;
        },
        evaluarNumero()
        {
            var data = "";
            if (this.numero % 2 == 0)
            {
                data = "<span>PAR</span>";
            }
            else
            {
                data = "<span>IMPAR</span>";
            }
            return data;
        }
    },
    data()
    {
        return{
            juegos:["Parchis", "Canicas", "Escondite", "La Oca"], 
            numero:4
        }
    }
}
</script>

<style>

</style>